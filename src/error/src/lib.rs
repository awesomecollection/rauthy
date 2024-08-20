use derive_more::Display;
use serde::{Deserialize, Serialize};
use std::borrow::Cow;
use std::fmt::Formatter;
use utoipa::ToSchema;

pub mod error_impls;

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize, ToSchema)]
pub enum ErrorResponseType {
    BadRequest,
    Connection,
    CSRFTokenError,
    Database,
    DatabaseIo,
    Disabled,
    // These String could be optimized in the future with borrowing
    // -> just not going down that rabbit hole for now
    DPoP(Option<String>),
    Encryption,
    UseDpopNonce((Option<String>, String)),
    Forbidden,
    Internal,
    JoseError,
    MfaRequired,
    NoSession,
    NotFound,
    PasswordExpired,
    PasswordRefresh,
    SessionExpired,
    SessionTimeout,
    TooManyRequests(i64),
    Unauthorized,
    WWWAuthenticate(String),
}

impl Display for ErrorResponseType {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        write!(f, "{:?}", self)
    }
}

// This is the default `ErrorResponse` that could be the answer on almost every API endpoint in
// case something is wrong.<br>
// Except for input validations, every error will have this format and every possible error in the
// backend will be converted to this.
#[derive(Debug, Clone, Display, Serialize, Deserialize, PartialEq, Eq, ToSchema)]
#[display("error: {} message: {}", error, message)]
pub struct ErrorResponse {
    pub timestamp: i64,
    pub error: ErrorResponseType,
    pub message: Cow<'static, str>,
}
