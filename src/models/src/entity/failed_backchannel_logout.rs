use crate::database::DB;
use hiqlite::{Param, params};
use rauthy_common::is_hiqlite;
use rauthy_error::ErrorResponse;
use serde::Deserialize;

#[derive(Debug, Deserialize)]
pub struct FailedBackchannelLogout {
    pub client_id: String,
    // both `sub` and `sid` may be empty but cannot be NULL because Postgres requires
    // NOT NULL if used in a primary key
    pub sub: String,
    pub sid: String,
    pub retry_count: i32,
}

impl FailedBackchannelLogout {
    pub async fn upsert(
        client_id: String,
        sub: Option<String>,
        sid: Option<String>,
        retry_count: u16,
    ) -> Result<(), ErrorResponse> {
        let sub = sub.unwrap_or_default();
        let sid = sid.unwrap_or_default();

        if is_hiqlite() {
            DB::client()
                .execute(
                    r#"
INSERT INTO failed_backchannel_logouts (client_id, sub, sid, retry_count)
VALUES ($1, $2, $3, $4)
ON CONFLICT (client_id, sub, sid)
DO UPDATE SET retry_count = retry_count + 1"#,
                    params!(client_id, sub, sid, retry_count),
                )
                .await?;
        } else {
            sqlx::query!(
                r#"
INSERT INTO failed_backchannel_logouts (client_id, sub, sid, retry_count)
VALUES ($1, $2, $3, $4)
ON CONFLICT (client_id, sub, sid)
DO UPDATE SET retry_count = failed_backchannel_logouts.retry_count + 1"#,
                client_id,
                sub,
                sid,
                retry_count as i32
            )
            .execute(DB::conn())
            .await?;
        }

        Ok(())
    }

    pub async fn delete(self) -> Result<(), ErrorResponse> {
        if is_hiqlite() {
            DB::client()
                .execute(
                    r#"
DELETE FROM failed_backchannel_logouts
WHERE client_id = $1 AND sub = $2 AND sid = $3"#,
                    params!(self.client_id, self.sub, self.sid),
                )
                .await?;
        } else {
            sqlx::query!(
                r#"
DELETE FROM failed_backchannel_logouts
WHERE client_id = $1 AND sub = $2 AND sid = $3"#,
                self.client_id,
                self.sub,
                self.sid
            )
            .execute(DB::conn())
            .await?;
        }

        Ok(())
    }
}
