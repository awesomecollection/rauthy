use actix_web::{HttpRequest, HttpResponse, get, post, web};
use rauthy_error::ErrorResponse;

#[cfg(debug_assertions)]
use rauthy_models::entity::principal::Principal;
#[cfg(debug_assertions)]
use rauthy_service::oidc::logout;
#[cfg(debug_assertions)]
use validator::Validate;

// dev-only endpoint - in prod, values will be inserted into the HTML directly.
// Returns the inner template value, as it would be rendered during prod, inside the body,
// which is different depending on the id.
#[get("/template/{id}")]
pub async fn get_template(
    #[allow(unused_variables)] id: web::Path<String>,
    #[allow(unused_variables)] req: HttpRequest,
) -> Result<HttpResponse, ErrorResponse> {
    // TODO maybe auto-block IP as suspicious if used in prod?
    #[cfg(not(debug_assertions))]
    return Ok(HttpResponse::NotFound().finish());

    #[cfg(debug_assertions)]
    {
        use actix_web::FromRequest;
        use rauthy_common::constants::DEV_MODE;
        use rauthy_models::app_state::AppState;
        use rauthy_models::html::templates::HtmlTemplate;

        if !*DEV_MODE {
            return Ok(HttpResponse::NotFound().finish());
        }

        let data = web::Data::<AppState>::extract(&req).await?;
        let principal = web::ReqData::<Principal>::extract(&req).await?;
        let session = principal.validate_session_auth().ok().cloned();
        let (tpl, cookie) = HtmlTemplate::build_from_str(data, id.as_str(), session).await?;

        if let Some(cookie) = cookie {
            Ok(HttpResponse::Ok()
                .cookie(cookie)
                .body(tpl.inner().to_string()))
        } else {
            Ok(HttpResponse::Ok().body(tpl.inner().to_string()))
        }
    }
}

// This is a dev only endpoint. It is used in very specific scenarios only to work around a
// limitation of the vite proxy. E.h. the `/oidc/logout` endpoint is used with `GET` to return
// HTML, and with POST to actually do the logout. However, the vite proxy (at the time of writing)
// cannot be configured in a fine-grained way to only proxy POST request to the backend and handle
// GET via the dev UI. This endpoint solves this issue to provide a better DX and make everything
// usable during local dev.
//
// DEV_MODE MUST be `true` and the code be compiled with `debug_assertions` to make it work.
#[post("/dev/{typ}")]
pub async fn post_dev_only_endpoints(
    #[allow(unused_variables)] typ: web::Path<String>,
    #[allow(unused_variables)] req: HttpRequest,
    #[allow(unused_variables)]
    #[allow(unused_mut)]
    mut payload: web::Payload,
) -> Result<HttpResponse, ErrorResponse> {
    // TODO maybe auto-block IP as suspicious if used in prod?
    #[cfg(not(debug_assertions))]
    return Ok(HttpResponse::NotFound().finish());

    #[cfg(debug_assertions)]
    {
        use crate::oidc;
        use crate::{auth_providers, users};
        use actix_web::FromRequest;
        use futures::StreamExt;
        use rauthy_api_types::auth_providers::ProviderCallbackRequest;
        use rauthy_api_types::oidc::{LoginRequest, LogoutRequest};
        use rauthy_api_types::users::NewUserRegistrationRequest;
        use rauthy_common::constants::DEV_MODE;
        use rauthy_error::ErrorResponseType;
        use rauthy_models::app_state::AppState;

        if !*DEV_MODE {
            return Ok(HttpResponse::NotFound().finish());
        }

        // for some weird reason, the `payload` would be empty, if we extract it here from `req`
        let mut body = web::BytesMut::new();
        while let Some(chunk) = payload.next().await {
            let chunk = chunk?;
            if (body.len() + chunk.len()) > 262_144 {
                return Err(ErrorResponse::new(
                    ErrorResponseType::BadRequest,
                    "payload too large",
                ));
            }
            body.extend_from_slice(&chunk);
        }
        let bytes = body.as_ref();

        let data = web::Data::<AppState>::extract(&req).await?;

        match typ.as_str() {
            "authorize" => {
                let payload = serde_json::from_slice::<LoginRequest>(bytes)?;
                let principal = web::ReqData::<Principal>::extract(&req).await?;
                oidc::post_authorize_handle(data, req, payload, principal).await
            }
            "logout" => {
                let params = serde_urlencoded::from_bytes::<LogoutRequest>(bytes)?;
                params.validate()?;
                let principal = web::ReqData::<Principal>::extract(&req).await.ok();
                let session = principal.and_then(|p| p.validate_session_auth().ok().cloned());
                logout::post_logout_handle(req, data, params, session).await
            }
            "providers_callback" => {
                let payload = serde_json::from_slice::<ProviderCallbackRequest>(bytes)?;
                let principal = web::ReqData::<Principal>::extract(&req).await?;
                auth_providers::post_provider_callback_handle(data, req, payload, principal).await
            }
            "register" => {
                let payload = serde_json::from_slice::<NewUserRegistrationRequest>(bytes)?;
                users::post_users_register_handle(data, req, payload).await
            }
            _ => {
                tracing::warn!("unhandled DEV template request: {}", typ);
                Ok(HttpResponse::NotFound().finish())
            }
        }
    }
}
