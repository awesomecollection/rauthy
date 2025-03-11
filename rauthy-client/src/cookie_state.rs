use crate::rauthy_error::RauthyError;
use crate::{b64_decode, b64_encode, generate_pkce_challenge, secure_random};
use chacha20poly1305::aead::{Aead, OsRng};
use chacha20poly1305::{AeadCore, ChaCha20Poly1305, Key, KeyInit, Nonce};
use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use std::borrow::Cow;
use tracing::error;

/// The name of the encrypted OIDC state cookie during the login flow
#[allow(dead_code)]
pub static OIDC_STATE_COOKIE: &str = "OIDC_STATE";

/// The encrypted OIDC state cookie during the login flow
#[derive(Serialize, Deserialize)]
pub struct OidcCookieState {
    pub nonce: String,
    pub pkce_verifier: String,
    pub state: String,
    pub timestamp: DateTime<Utc>,
}

impl OidcCookieState {
    #[allow(dead_code)]
    pub(crate) fn generate() -> (Self, String) {
        let (pkce_verifier, challenge) = generate_pkce_challenge();
        let slf = Self {
            nonce: secure_random(32),
            pkce_verifier,
            state: secure_random(24),
            timestamp: Utc::now(),
        };
        (slf, challenge)
    }

    #[inline]
    pub fn from_cookie_value(
        state_cookie_value: &str,
        enc_key: &[u8],
    ) -> Result<Self, RauthyError> {
        let enc = b64_decode(state_cookie_value)?;
        let dec = Self::decrypt(&enc, enc_key)?;
        let (slf, _) = bincode::serde::decode_from_slice(&dec, bincode::config::standard())?;
        Ok(slf)
    }

    #[cfg(feature = "axum")]
    #[inline]
    pub fn from_jar_cookie_value(
        jar: &axum_extra::extract::CookieJar,
        enc_key: &[u8],
    ) -> Result<Self, RauthyError> {
        match jar.get(OIDC_STATE_COOKIE) {
            None => {
                tracing::warn!("STATE_COOKIE is missing - Request may have expired");
                Err(RauthyError::Request(Cow::from("Request has expired")))
            }
            Some(cookie) => Self::from_cookie_value(cookie.value(), enc_key),
        }
    }

    #[cfg(feature = "actix-web")]
    #[inline]
    pub fn from_req_cookie_value(
        req: &actix_web::HttpRequest,
        enc_key: &[u8],
    ) -> Result<Self, RauthyError> {
        match req.cookie(OIDC_STATE_COOKIE) {
            None => {
                tracing::warn!("STATE_COOKIE is missing - Request may have expired");
                Err(RauthyError::Request(Cow::from("Request has expired")))
            }
            Some(cookie) => Self::from_cookie_value(cookie.value(), enc_key),
        }
    }

    #[inline]
    pub fn to_encrypted_cookie_value(&self, key: &[u8]) -> String {
        let ser = bincode::serde::encode_to_vec(self, bincode::config::standard()).unwrap();
        let enc = Self::encrypt(&ser, key).unwrap();
        b64_encode(&enc)
    }

    fn decrypt(ciphertext: &[u8], key: &[u8]) -> Result<Vec<u8>, RauthyError> {
        // TODO can this check be removed safely?
        if ciphertext.len() < 12 {
            error!("Invalid ciphertext for decryption: {:?}", ciphertext);
            return Err(RauthyError::Encryption(Cow::from(
                "Invalid ciphertext for decryption",
            )));
        }
        let k = Key::from_slice(key);
        let cipher = ChaCha20Poly1305::new(k);
        // 96 bits nonce is always the first bytes, if the `encrypt()` was used before
        let (n, text) = ciphertext.split_at(12);
        let nonce = Nonce::from_slice(n);
        let plaintext = cipher.decrypt(nonce, text)?;

        Ok(plaintext)
    }

    fn encrypt(plain: &[u8], key: &[u8]) -> Result<Vec<u8>, RauthyError> {
        let k = Key::from_slice(key);
        let cipher = ChaCha20Poly1305::new(k);
        let nonce = ChaCha20Poly1305::generate_nonce(&mut OsRng);
        let ciphertext = cipher.encrypt(&nonce, plain)?;

        let mut res = nonce.to_vec();
        res.extend(ciphertext);

        Ok(res)
    }
}
