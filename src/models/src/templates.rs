use crate::entity::colors::Colors;
use crate::entity::password::PasswordPolicy;
use crate::i18n::account::I18nAccount;
use crate::i18n::authorize::I18nAuthorize;
use crate::i18n::device::I18nDevice;
use crate::i18n::email_confirm_change_html::I18nEmailConfirmChangeHtml;
use crate::i18n::error::I18nError;
use crate::i18n::index::I18nIndex;
use crate::i18n::logout::I18nLogout;
use crate::i18n::password_reset::I18nPasswordReset;
use crate::i18n::register::I18nRegister;
use crate::i18n::SsrJson;
use crate::language::Language;
use actix_web::http::StatusCode;
use actix_web::{HttpResponse, HttpResponseBuilder};
use askama_actix::Template;
use rauthy_common::constants::{
    DEVICE_GRANT_USER_CODE_LENGTH, HEADER_HTML, OPEN_USER_REG, USER_REG_DOMAIN_RESTRICTION,
};
use std::borrow::Cow;
use std::fmt::{Debug, Display, Formatter};

#[derive(Debug, Clone)]
pub enum FrontendAction {
    Refresh,
    MfaLogin(String),
    None,
}

impl Display for FrontendAction {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        match self {
            FrontendAction::Refresh => write!(f, "Refresh"),
            FrontendAction::MfaLogin(s) => write!(f, "MfaLogin {}", s),
            FrontendAction::None => write!(f, "None"),
        }
    }
}

#[derive(Default, Template)]
#[template(path = "html/index.html")]
pub struct IndexHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: bool,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl IndexHtml<'_> {
    pub fn build(colors: &Colors, lang: &Language) -> String {
        let res = IndexHtml {
            lang: lang.as_str(),
            csrf_token: "",
            data: &OPEN_USER_REG.to_string(),
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            i18n: I18nIndex::build(lang).as_json(),
            ..Default::default()
        };

        res.render().unwrap()
    }
}

#[derive(Default, Template)]
#[template(path = "html/account.html")]
pub struct AccountHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: &'a str,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: String,
}

impl AccountHtml<'_> {
    pub fn build(colors: &Colors, lang: &Language, auth_providers_json: Option<String>) -> String {
        let res = AccountHtml {
            lang: lang.as_str(),
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            i18n: I18nAccount::build(lang).as_json(),
            auth_providers: auth_providers_json.unwrap_or_default(),
            ..Default::default()
        };
        res.render().unwrap()
    }
}

#[derive(Default, Template)]
#[template(path = "html/admin.html")]
pub struct AdminHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: &'a str,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl AdminHtml<'_> {
    pub fn build(colors: &Colors) -> String {
        let res = AdminHtml {
            lang: "en",
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            ..Default::default()
        };

        res.render().unwrap()
    }
}

#[derive(Default, Template)]
#[template(path = "html/device.html")]
pub struct DeviceHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: bool,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl DeviceHtml<'_> {
    pub fn build(colors: &Colors, lang: &Language) -> String {
        let res = DeviceHtml {
            lang: lang.as_str(),
            csrf_token: "",
            data: &DEVICE_GRANT_USER_CODE_LENGTH.to_string(),
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            i18n: I18nDevice::build(lang).as_json(),
            ..Default::default()
        };

        res.render().unwrap()
    }
}

#[derive(Default, Template)]
#[template(path = "html/fedcm.html")]
pub struct FedCMHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: bool,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl FedCMHtml<'_> {
    pub fn build(colors: &Colors) -> String {
        let res = FedCMHtml {
            lang: "en",
            csrf_token: "",
            data: &DEVICE_GRANT_USER_CODE_LENGTH.to_string(),
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            ..Default::default()
        };

        res.render().unwrap()
    }
}

#[derive(Debug, Default, Template)]
#[template(path = "html/error.html")]
pub struct ErrorHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: bool,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl ErrorHtml<'_> {
    pub fn build(
        colors: &Colors,
        lang: &Language,
        status_code: StatusCode,
        details_text: Option<Cow<'static, str>>,
    ) -> String {
        let res = ErrorHtml {
            lang: lang.as_str(),
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            i18n: I18nError::build_with(lang, status_code, details_text).as_json(),
            ..Default::default()
        };

        res.render().unwrap()
    }

    pub fn response(body: String, status_code: StatusCode) -> HttpResponse {
        HttpResponseBuilder::new(status_code)
            .insert_header(HEADER_HTML)
            .body(body)
    }
}

// The error template is defined 3 more times.
// This may look a bit ugly here in the code, but is actually better for the efficiency and
// performance down the road. The same error template is being pre-compiled 4 times with just
// slightly different resource links. This makes it possible to just server the correct error
// page in every location without the need to dynamically modify the path for each render.

#[derive(Debug, Default, Template)]
#[template(path = "html/error/error.html")]
pub struct Error1Html<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: bool,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl Error1Html<'_> {
    pub fn build<C>(
        colors: &Colors,
        lang: &Language,
        status_code: StatusCode,
        details_text: Option<C>,
    ) -> String
    where
        C: Into<Cow<'static, str>>,
    {
        let res = Error1Html {
            lang: lang.as_str(),
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            i18n: I18nError::build_with(lang, status_code, details_text).as_json(),
            ..Default::default()
        };

        res.render().unwrap()
    }
}

#[derive(Debug, Default, Template)]
#[template(path = "html/error/error/error.html")]
pub struct Error2Html<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: bool,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl Error2Html<'_> {
    pub fn build<C>(
        colors: &Colors,
        lang: &Language,
        status_code: StatusCode,
        details_text: Option<C>,
    ) -> String
    where
        C: Into<Cow<'static, str>>,
    {
        let res = Error2Html {
            lang: lang.as_str(),
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            i18n: I18nError::build_with(lang, status_code, details_text).as_json(),
            ..Default::default()
        };

        res.render().unwrap()
    }
}

#[derive(Debug, Default, Template)]
#[template(path = "html/error/error/error/error.html")]
pub struct Error3Html<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: bool,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl Error3Html<'_> {
    pub fn build<C>(
        colors: &Colors,
        lang: &Language,
        status_code: StatusCode,
        details_text: Option<C>,
    ) -> String
    where
        C: Into<Cow<'static, str>>,
    {
        let res = Error3Html {
            lang: lang.as_str(),
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            i18n: I18nError::build_with(lang, status_code, details_text).as_json(),
            ..Default::default()
        };

        res.render().unwrap()
    }
}

#[derive(Default, Template)]
#[template(path = "html/admin/api_keys.html")]
pub struct AdminApiKeysHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: &'a str,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl AdminApiKeysHtml<'_> {
    pub fn build(colors: &Colors) -> String {
        let res = AdminApiKeysHtml {
            lang: "en",
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            ..Default::default()
        };

        res.render().unwrap()
    }
}

#[derive(Default, Template)]
#[template(path = "html/admin/attributes.html")]
pub struct AdminAttributesHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: &'a str,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl AdminAttributesHtml<'_> {
    pub fn build(colors: &Colors) -> String {
        let res = AdminAttributesHtml {
            lang: "en",
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            ..Default::default()
        };

        res.render().unwrap()
    }
}

#[derive(Default, Template)]
#[template(path = "html/admin/blacklist.html")]
pub struct AdminBlacklistHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: &'a str,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl AdminBlacklistHtml<'_> {
    pub fn build(colors: &Colors) -> String {
        let res = AdminBlacklistHtml {
            lang: "en",
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            ..Default::default()
        };

        res.render().unwrap()
    }
}

#[derive(Default, Template)]
#[template(path = "html/admin/clients.html")]
pub struct AdminClientsHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: &'a str,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl AdminClientsHtml<'_> {
    pub fn build(colors: &Colors) -> String {
        let res = AdminClientsHtml {
            lang: "en",
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            ..Default::default()
        };

        res.render().unwrap()
    }
}

#[derive(Default, Template)]
#[template(path = "html/admin/config.html")]
pub struct AdminConfigHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: &'a str,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl AdminConfigHtml<'_> {
    pub fn build(colors: &Colors) -> String {
        let res = AdminConfigHtml {
            lang: "en",
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            ..Default::default()
        };

        res.render().unwrap()
    }
}

#[derive(Default, Template)]
#[template(path = "html/admin/docs.html")]
pub struct AdminDocsHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: &'a str,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl AdminDocsHtml<'_> {
    pub fn build(colors: &Colors) -> String {
        let res = AdminDocsHtml {
            lang: "en",
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            ..Default::default()
        };

        res.render().unwrap()
    }
}

#[derive(Default, Template)]
#[template(path = "html/admin/events.html")]
pub struct AdminEventsHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: &'a str,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl AdminEventsHtml<'_> {
    pub fn build(colors: &Colors) -> String {
        let res = AdminEventsHtml {
            lang: "en",
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            ..Default::default()
        };

        res.render().unwrap()
    }
}

#[derive(Default, Template)]
#[template(path = "html/admin/groups.html")]
pub struct AdminGroupsHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: &'a str,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl AdminGroupsHtml<'_> {
    pub fn build(colors: &Colors) -> String {
        let res = AdminGroupsHtml {
            lang: "en",
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            ..Default::default()
        };

        res.render().unwrap()
    }
}

#[derive(Default, Template)]
#[template(path = "html/admin/roles.html")]
pub struct AdminRolesHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: &'a str,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl AdminRolesHtml<'_> {
    pub fn build(colors: &Colors) -> String {
        let res = AdminRolesHtml {
            lang: "en",
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            ..Default::default()
        };

        res.render().unwrap()
    }
}

#[derive(Default, Template)]
#[template(path = "html/admin/scopes.html")]
pub struct AdminScopesHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: &'a str,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl AdminScopesHtml<'_> {
    pub fn build(colors: &Colors) -> String {
        let res = AdminScopesHtml {
            lang: "en",
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            ..Default::default()
        };

        res.render().unwrap()
    }
}

#[derive(Default, Template)]
#[template(path = "html/admin/sessions.html")]
pub struct AdminSessionsHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: &'a str,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl AdminSessionsHtml<'_> {
    pub fn build(colors: &Colors) -> String {
        let res = AdminSessionsHtml {
            lang: "en",
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            ..Default::default()
        };

        res.render().unwrap()
    }
}

#[derive(Default, Template)]
#[template(path = "html/admin/users.html")]
pub struct AdminUsersHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: &'a str,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl AdminUsersHtml<'_> {
    pub fn build(colors: &Colors) -> String {
        let res = AdminUsersHtml {
            lang: "en",
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            ..Default::default()
        };

        res.render().unwrap()
    }
}

#[derive(Default, Template)]
#[template(path = "html/oidc/authorize.html")]
pub struct AuthorizeHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: &'a str,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: String,
}

impl AuthorizeHtml<'_> {
    pub fn build(
        client_name: &Option<String>,
        csrf_token: &str,
        action: FrontendAction,
        colors: &Colors,
        lang: &Language,
        auth_providers_json: Option<String>,
    ) -> String {
        let mut res = AuthorizeHtml {
            lang: lang.as_str(),
            csrf_token,
            action: &action.to_string(),
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            i18n: I18nAuthorize::build(lang).as_json(),
            auth_providers: auth_providers_json.unwrap_or_default(),
            ..Default::default()
        };

        if client_name.is_some() {
            res.data = client_name.as_ref().unwrap();
        }

        res.render().unwrap()
    }
}

#[derive(Default, Template)]
#[template(path = "html/oidc/callback.html")]
pub struct CallbackHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: &'a str,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl CallbackHtml<'_> {
    pub fn build(colors: &Colors) -> String {
        let res = CallbackHtml {
            lang: "en",
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            ..Default::default()
        };

        res.render().unwrap()
    }
}

#[derive(Default, Template)]
#[template(path = "html/admin/providers.html")]
pub struct ProvidersHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: &'a str,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl crate::templates::ProvidersHtml<'_> {
    pub fn build(colors: &Colors) -> String {
        let res = crate::templates::ProvidersHtml {
            lang: "en",
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            ..Default::default()
        };

        res.render().unwrap()
    }
}

#[derive(Default, Template)]
#[template(path = "html/providers/callback.html")]
pub struct ProviderCallbackHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: &'a str,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl ProviderCallbackHtml<'_> {
    pub fn build(colors: &Colors, lang: &Language) -> String {
        let res = ProviderCallbackHtml {
            lang: lang.as_str(),
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            i18n: I18nAuthorize::build(lang).as_json(),
            ..Default::default()
        };

        res.render().unwrap()
    }
}

#[derive(Default, Template)]
#[template(path = "html/oidc/logout.html")]
pub struct LogoutHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: bool,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl LogoutHtml<'_> {
    pub fn build(csrf_token: &str, set_logout: bool, colors: &Colors, lang: &Language) -> String {
        let res = LogoutHtml {
            lang: lang.as_str(),
            csrf_token,
            action: set_logout,
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            i18n: I18nLogout::build(lang).as_json(),
            ..Default::default()
        };

        res.render().unwrap()
    }
}

#[derive(Default, Template)]
#[template(path = "html/users/{id}/reset/reset.html")]
pub struct PwdResetHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: bool,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl PwdResetHtml<'_> {
    // If the email is Some(_), this means that the user has webauthn enabled and does not need
    // to provide the email manually
    pub fn build(
        csrf_token: &str,
        password_rules: &PasswordPolicy,
        colors: &Colors,
        lang: &Language,
        needs_mfa: bool,
    ) -> String {
        let data = format!(
            "{},{},{},{},{},{},{},{}",
            password_rules.length_min,
            password_rules.length_max,
            password_rules.include_lower_case.unwrap_or(-1),
            password_rules.include_upper_case.unwrap_or(-1),
            password_rules.include_digits.unwrap_or(-1),
            password_rules.include_special.unwrap_or(-1),
            password_rules.not_recently_used.unwrap_or(-1),
            needs_mfa,
        );

        let res = PwdResetHtml {
            lang: lang.as_str(),
            csrf_token,
            data: &data,
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            i18n: I18nPasswordReset::build(lang).as_json(),
            ..Default::default()
        };

        res.render().unwrap()
    }
}

#[derive(Default, Template)]
#[template(path = "error/429.html")]
pub struct TooManyRequestsHtml {
    pub ip: String,
    pub exp: i64,
}

impl TooManyRequestsHtml {
    pub fn build(ip: String, exp: i64) -> String {
        TooManyRequestsHtml { ip, exp }.render().unwrap()
    }
}

#[derive(Default, Template)]
#[template(path = "html/users/{id}/email_confirm/email_confirm.html")]
pub struct UserEmailChangeConfirmHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: bool,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl UserEmailChangeConfirmHtml<'_> {
    pub fn build(colors: &Colors, lang: &Language, email_old: &str, email_new: &str) -> String {
        let data = format!("{},{}", email_old, email_new,);

        UserEmailChangeConfirmHtml {
            lang: lang.as_str(),
            data: &data,
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            i18n: I18nEmailConfirmChangeHtml::build(lang).as_json(),
            ..Default::default()
        }
        .render()
        .expect("rendering email_confirm.html")
    }
}

#[derive(Default, Template)]
#[template(path = "html/users/register.html")]
pub struct UserRegisterHtml<'a> {
    pub lang: &'a str,
    pub csrf_token: &'a str,
    pub data: &'a str,
    pub action: bool,
    pub col_act1: &'a str,
    pub col_act1a: &'a str,
    pub col_act2: &'a str,
    pub col_act2a: &'a str,
    pub col_acnt: &'a str,
    pub col_acnta: &'a str,
    pub col_ok: &'a str,
    pub col_err: &'a str,
    pub col_glow: &'a str,
    pub col_gmid: &'a str,
    pub col_ghigh: &'a str,
    pub col_text: &'a str,
    pub col_bg: &'a str,
    pub i18n: String,
    pub auth_providers: &'a str,
}

impl UserRegisterHtml<'_> {
    pub fn build(colors: &Colors, lang: &Language) -> String {
        UserRegisterHtml {
            lang: lang.as_str(),
            data: USER_REG_DOMAIN_RESTRICTION
                .as_ref()
                .map(|s| s.as_str())
                .unwrap_or(""),
            col_act1: &colors.act1,
            col_act1a: &colors.act1a,
            col_act2: &colors.act2,
            col_act2a: &colors.act2a,
            col_acnt: &colors.acnt,
            col_acnta: &colors.acnta,
            col_ok: &colors.ok,
            col_err: &colors.err,
            col_glow: &colors.glow,
            col_gmid: &colors.gmid,
            col_ghigh: &colors.ghigh,
            col_text: &colors.text,
            col_bg: &colors.bg,
            i18n: I18nRegister::build(lang).as_json(),
            ..Default::default()
        }
        .render()
        .expect("rendering register.html")
    }
}

pub mod atproto {
    use askama::Template;

    use crate::{
        entity::colors::Colors,
        i18n::{authorize::I18nAuthorize, SsrJson},
        language::Language,
    };

    use super::FrontendAction;

    #[derive(Default, Template)]
    #[template(path = "html/atproto/login.html")]
    pub struct AuthorizeHtml<'a> {
        pub lang: &'a str,
        pub csrf_token: &'a str,
        pub data: &'a str,
        pub action: &'a str,
        pub col_act1: &'a str,
        pub col_act1a: &'a str,
        pub col_act2: &'a str,
        pub col_act2a: &'a str,
        pub col_acnt: &'a str,
        pub col_acnta: &'a str,
        pub col_ok: &'a str,
        pub col_err: &'a str,
        pub col_glow: &'a str,
        pub col_gmid: &'a str,
        pub col_ghigh: &'a str,
        pub col_text: &'a str,
        pub col_bg: &'a str,
        pub i18n: String,
        pub auth_providers: String,
    }

    impl AuthorizeHtml<'_> {
        pub fn build(
            client_name: &Option<String>,
            csrf_token: &str,
            action: FrontendAction,
            colors: &Colors,
            lang: &Language,
            auth_providers_json: Option<String>,
        ) -> String {
            let mut res = AuthorizeHtml {
                lang: lang.as_str(),
                csrf_token,
                action: &action.to_string(),
                col_act1: &colors.act1,
                col_act1a: &colors.act1a,
                col_act2: &colors.act2,
                col_act2a: &colors.act2a,
                col_acnt: &colors.acnt,
                col_acnta: &colors.acnta,
                col_ok: &colors.ok,
                col_err: &colors.err,
                col_glow: &colors.glow,
                col_gmid: &colors.gmid,
                col_ghigh: &colors.ghigh,
                col_text: &colors.text,
                col_bg: &colors.bg,
                i18n: I18nAuthorize::build(lang).as_json(),
                auth_providers: auth_providers_json.unwrap_or_default(),
                ..Default::default()
            };

            if client_name.is_some() {
                res.data = client_name.as_ref().unwrap();
            }

            res.render().unwrap()
        }
    }
}
