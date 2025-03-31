use actix_web::web;
use rand::Rng;
use rauthy_error::ErrorResponse;
use rauthy_models::app_state::AppState;
use rauthy_models::entity::clients::Client;
use rauthy_models::entity::failed_backchannel_logout::FailedBackchannelLogout;
use rauthy_models::entity::jwk::JwkKeyPair;
use rauthy_service::oidc::logout;
use std::env;
use std::string::ToString;
use std::sync::LazyLock;
use std::time::Duration;
use tokio::task::JoinSet;
use tokio::time;
use tracing::{error, info, warn};

static BACKCHANNEL_LOGOUT_RETRY_COUNT: LazyLock<u16> = LazyLock::new(|| {
    env::var("BACKCHANNEL_LOGOUT_RETRY_COUNT")
        .unwrap_or_else(|_| "100".to_string())
        .parse::<u16>()
        .expect("Cannot parse BACKCHANNEL_LOGOUT_RETRY_COUNT as u16")
});

pub async fn backchannel_logout_retry(data: web::Data<AppState>) {
    loop {
        // We want to randomize the sleep because this scheduler should run on all cluster members.
        // This increases the chance opf success in case of a network segmentation.
        let millis = rand::thread_rng().gen_range(60_000..90_000);
        time::sleep(Duration::from_millis(millis)).await;

        if let Err(err) = execute_logout_retries(&data).await {
            error!("Error during backchannel_logout_retry: {}", err.message);
        }
    }
}

async fn execute_logout_retries(data: &web::Data<AppState>) -> Result<(), ErrorResponse> {
    let failures = FailedBackchannelLogout::find_all().await?;
    if failures.is_empty() {
        return Ok(());
    }

    let mut clients: Vec<Client> = Vec::with_capacity(1);
    let mut kps: Vec<JwkKeyPair> = Vec::with_capacity(1);
    let mut tasks = JoinSet::new();

    for failure in failures {
        // TODO make configurable
        if failure.retry_count >= *BACKCHANNEL_LOGOUT_RETRY_COUNT as i32 {
            warn!("Retry count exceeded for backchannel logout {:?}", failure);
            // TODO generate global event here?
            failure.delete().await?;
            continue;
        }

        let sub = if failure.sub.is_empty() {
            None
        } else {
            Some(failure.sub.clone())
        };
        let sid = if failure.sid.is_empty() {
            None
        } else {
            Some(failure.sid.clone())
        };

        let client = match clients.iter().find(|c| c.id == failure.client_id) {
            None => {
                let c = Client::find(failure.client_id.clone()).await?;
                clients.push(c.clone());
                c
            }
            Some(c) => c.clone(),
        };

        match logout::send_backchannel_logout(
            client,
            data.issuer.clone(),
            sub,
            sid,
            &mut kps,
            &mut tasks,
        )
        .await
        {
            Ok(_) => {
                info!(
                    "Success retrying backchannel logout for {}",
                    failure.client_id
                );
                failure.delete().await?;
            }
            Err(err) => {
                error!("Error executing Backchannel Logout: {}", err);
            }
        }
    }

    Ok(())
}
