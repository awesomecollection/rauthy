use crate::i18n::ui::password_policy::I18nPasswordPolicy;
use crate::i18n::ui::SsrJson;
use crate::language::Language;
use serde::Serialize;

#[derive(Debug, Default, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct I18nAccount {
    account: &'static str,
    acc_type: &'static str,
    acc_type_passkey_text_1: &'static str,
    acc_type_passkey_text_2: &'static str,
    acc_type_passkey_text_3: &'static str,
    access_exp: &'static str,
    access_renew: &'static str,
    access_renew_delete: &'static str,
    birthdate: &'static str,
    cancel: &'static str,
    city: &'static str,
    change_password: &'static str,
    convert_account: &'static str,
    convert_account_p_1: &'static str,
    country: &'static str,
    device_id: &'static str,
    device_name: &'static str,
    devices: &'static str,
    devices_desc: &'static str,
    email: &'static str,
    email_update_confirm: &'static str,
    email_verified: &'static str,
    family_name: &'static str,
    federated_convert_password_1: &'static str,
    federated_convert_password_2: &'static str,
    generate_random: &'static str,
    given_name: &'static str,
    groups: &'static str,
    invalid_input: &'static str,
    key: &'static str,
    key_unique: &'static str,
    last_login: &'static str,
    mfa: I18nAccountMfa,
    mfa_activated: &'static str,
    nav_info: &'static str,
    nav_edit: &'static str,
    nav_mfa: &'static str,
    nav_password: &'static str,
    nav_logout: &'static str,
    never: &'static str,
    optional_values: &'static str,
    password_confirm: &'static str,
    password_curr: &'static str,
    password_curr_req: &'static str,
    password_new: &'static str,
    password_new_req: &'static str,
    password_no_match: &'static str,
    password_expiry: &'static str,
    password_policy: I18nPasswordPolicy,
    password_policy_follow: &'static str,
    password_reset: &'static str,
    phone: &'static str,
    provider_link: &'static str,
    provider_link_desc: &'static str,
    provider_unlink: &'static str,
    provider_unlink_desc: &'static str,
    reg_date: &'static str,
    reg_ip: &'static str,
    roles: &'static str,
    save: &'static str,
    street: &'static str,
    user: &'static str,
    user_created: &'static str,
    user_enabled: &'static str,
    user_expiry: &'static str,
    user_verified_tooltip: &'static str,
    valid_email: &'static str,
    valid_given_name: &'static str,
    valid_family_name: &'static str,
    web_id_desc: &'static str,
    web_id_desc_data: &'static str,
    web_id_expert_mode: &'static str,
    zip: &'static str,
}

impl SsrJson for I18nAccount {
    fn build(lang: &Language) -> Self {
        match lang {
            Language::En => Self::build_en(),
            Language::De => Self::build_de(),
            Language::ZhHans => Self::build_zh_hans(),
            Language::Ko => Self::build_ko(),
        }
    }

    fn as_json(&self) -> String {
        serde_json::to_string(self).unwrap()
    }
}

impl I18nAccount {
    fn build_en() -> Self {
        Self {
            account: "User Account",
            acc_type: "Account Type",
            acc_type_passkey_text_1: r#"This account is currently a passkey only account.
This means, that you do not have any password, because you don't need one."#,
            acc_type_passkey_text_2: r#"You can convert your account and add a password. But keep
in mind, that this implies, that you need to verify each new device with the password additionally.
You then cannot just log in on any device, where you have not entered the password beforehand at
least once."#,
            acc_type_passkey_text_3: "Do you want to convert your account and add a password?",
            access_exp: "Access Expires",
            access_renew: "Access Renew Until",
            access_renew_delete: "Delete the possibility to renew",
            birthdate: "Birthdate",
            cancel: "Cancel",
            city: "City",
            change_password: "Change Password",
            convert_account: "Convert Account",
            convert_account_p_1: r#"You can convert your account to a Passkey-Only account.
This conversion deletes your password and you can and must only ever login with your registered
passkeys. Keep in mind, that only passkeys with the additional User Verification will be accepted.
If you passkeys support this, you will find a small symbol behind the name of the key on the 'MFA'
page."#,
            country: "Country",
            device_id: "ID",
            device_name: "Name",
            devices: "Devices",
            devices_desc: "Devices linked to this account",
            email: "E-Mail",
            email_update_confirm: r#"The E-Mail address has not been updated yet. A message has been
sent out to your new address. You need to click the confirmation link inside it. Once it has been
confirmed, your new address will be updated."#,
            email_verified: "E-Mail verified",
            family_name: "Family Name",
            federated_convert_password_1: r#"You have a federated account. This means you log in
by using an external authentication provider. Your current provider is:"#,
            federated_convert_password_2: r#"You can request a password reset via email. This will
add a local password to your account upon completion. You would then be able to log in via your
external provider or by local password. Do you want to request a reset?"#,
            generate_random: "Generate Randomly",
            given_name: "Given Name",
            groups: "Groups",
            invalid_input: "Invalid Input",
            key: "Key",
            key_unique: "Key must be unique",
            last_login: "Last Login",
            mfa: I18nAccountMfa::build_en(),
            mfa_activated: "MFA activated",
            nav_info: "Info",
            nav_edit: "Edit",
            nav_mfa: "MFA",
            nav_password: "Password",
            nav_logout: "Logout",
            never: "Never",
            optional_values: "Optional Values",
            password_confirm: "Confirm Password",
            password_curr: "Current Password",
            password_curr_req: "Current password is required",
            password_new: "New Password",
            password_new_req: "New password is required",
            password_no_match: "Password verification is required",
            password_expiry: "Password expiry",
            password_policy: I18nPasswordPolicy::build_en(),
            password_policy_follow: "You must follow the password policy",
            password_reset: "Password Reset",
            phone: "Phone",
            provider_link: "Federate Account",
            provider_link_desc: r#"You can link this account to one of the following login providers.
After activating this function, you will be redirected to the login page of the chosen one.
After a successful login and if the email matches, your account will be linked."#,
            provider_unlink: "Unlink Federation",
            provider_unlink_desc: r#"Only if you have set up at least a password or a passkey for this
account, you can unlink it from the upstream provider."#,
            reg_date: "Registration Date",
            reg_ip: "Registration from IP",
            roles: "Roles",
            save: "Save",
            street: "Street",
            user: "User",
            user_created: "User Created",
            user_enabled: "User Enabled",
            user_expiry: "User Expires",
            user_verified_tooltip: "Secured with fingerprint or PIN",
            valid_email: "Invalid E-Mail format",
            valid_given_name: "Your given name should have 1 - 32 non-special characters",
            valid_family_name: "Your family name should have 1 - 32 non-special characters",
            web_id_desc: r#"You can configure the fields that should be exposed with your WebID.
This is a feature used by some networks for decentralized logins. If you do not know what it is,
you most probably do not need it."#,
            web_id_desc_data:
                "You can add custom data fields to your WebID in valid FOAF Vocabulary",
            web_id_expert_mode: "Enable Expert Mode",
            zip: "ZIP",
        }
    }

    fn build_de() -> Self {
        Self {
            account: "Benutzer Account",
            acc_type: "Account Typ",
            acc_type_passkey_text_1: r#"Dies ist ein "Passkey-Only" Account. Das bedeutet, dass
dieser Account kein Passwort hat und auch keines benötigt."#,
            acc_type_passkey_text_2: r#"Der Account kann in einen Passwort-Account umgewandelt
werden. Das würde allerdings bedeuten, dass ein Login auf einem neuen Gerät ohne vorherige, zumindest
einmalige zusätzliche Verifizierung des Passwortes nicht mehr möglich sein wird."#,
            acc_type_passkey_text_3:
                "Soll dieser Account gewandelt und ein Passwort hinzugefügt werden?",
            access_exp: "Zugang erlischt",
            access_renew: "Zugang Erneuerung bis",
            access_renew_delete: "Möglichkeit zur Erneuerung löschen",
            birthdate: "Geburtsdatum",
            cancel: "Abbrechen",
            city: "Stadt",
            change_password: "Passwort wechseln",
            convert_account: "Account Umwandeln",
            convert_account_p_1: r#"Dieser Account kann in einen Passkey-Only Account umgewandelt
werden. Diese Umwandling löscht das Passwort und erlaubt den alleinigen Login mit den registrieren
Passkeys. Nur Passkeys mit zusätzlicher Benutzerverifizierung werden akzeptiert. Diese sind auf der
'MFA' Seite durch das zusätzliche Symbol hinter dem Passkey Namen gekennzeichnet."#,
            country: "Land",
            device_id: "ID",
            device_name: "Name",
            devices: "Geräte",
            devices_desc: "Mit diesem Account verknüpfte Geräte",
            email: "E-Mail",
            email_update_confirm: r#"Die E-Mail Adresse wurde noch nicht aktualisiert. Eine Nachricht
mit einem Bestätigungslink wurde an die neue Adresse geschickt. Das Update muss über den
enthaltenen Link bestätigt werden. Nach der Bestätigung wird die neue Adresse gesetzt."#,
            email_verified: "E-Mail verifiziert",
            family_name: "Nachname",
            federated_convert_password_1: r#"Dies ist ein verknüpfter Account. Das bedeutet, dass
der Login via externem Provider zur Authenzifizierung geschieht. Der derzeitige Provider ist:"#,
            federated_convert_password_2: r#"Es kann ein Passwort Reset via E-Mail angefordert
werden. Das würde nach Abschluss diesem Account ein lokales Passwort hinzufügen. Danach wäre der
Login entweder per externem Provider oder lokalem Password möglich. Passwort Reset anfordern?"#,
            generate_random: "Zufällig generiert",
            given_name: "Vorname",
            groups: "Gruppen",
            invalid_input: "Ungültige Eingaben",
            key: "Schlüssel",
            key_unique: "Schlüssel muss einzigartig sein",
            last_login: "Letzter Login",
            mfa: I18nAccountMfa::build_de(),
            mfa_activated: "MFA aktiviert",
            nav_info: "Info",
            nav_edit: "Editieren",
            nav_mfa: "MFA",
            nav_password: "Passwort",
            nav_logout: "Logout",
            never: "Niemals",
            optional_values: "Optionale Angaben",
            password_confirm: "Passwort bestätigen",
            password_curr: "Derzeitiges Passwort",
            password_curr_req: "Derzeitiges Passwort ist notwendig",
            password_new: "Neues Passwort",
            password_new_req: "Neues Passwort ist notwendig",
            password_no_match: "Passwörter stimmen nicht überein",
            password_expiry: "Passwort Ablauf",
            password_policy: I18nPasswordPolicy::build_de(),
            password_policy_follow: "Befolgen Sie die Passwort Regeln",
            password_reset: "Passwort Reset",
            phone: "Telefon",
            provider_link: "Account Verbinden",
            provider_link_desc: r#"Dieser Account kann mit einem der folgenden Login Provider
verbunden werden. Nach der Aktivierung des Prozesses wird eine Weiterleitung auf die Login Seite
des gewählten Providers ausgelöst. Nach erfolgreichem Login und bei Übereinstimmung der E-Mail
Adressen wird dieser Account verknüpft."#,
            provider_unlink: "Verbindung Trennen",
            provider_unlink_desc: r#"Nur wenn mindestens ein Passwort oder ein Passkey für diesen
Account gesetzt ist, kann die Verbindung zum Provider gelöst werden."#,
            reg_date: "Datum der Registrierung",
            reg_ip: "Registrierung von IP",
            roles: "Rollen",
            save: "Speichern",
            street: "Straße",
            user: "Benutzer",
            user_created: "Benutzer erstellt",
            user_enabled: "Benutzer Aktiviert",
            user_expiry: "Benutzer Ablauf",
            user_verified_tooltip: "Abgesichert durch Fingerabdruck oder PIN",
            valid_email: "Gültige E-Mail Adresse",
            valid_given_name: "Vorname, 1 - 32 Buchstaben, keine Sonderzeichen",
            valid_family_name: "Nachname, 1 - 32  Buchstaben, keine Sonderzeichen",
            web_id_desc: r#"Hier können Sie die Felder festlegen, die über Ihre WebID veröffentlicht
werden. Dies ist ein Feature, was von manchen Netzwerken für dezentrale Logins genutzt wird.
Sollten Sie nicht wissen, was die WebID ist, brauchen Sie sie höchstwahrscheinlich nicht."#,
            web_id_desc_data: r#"Sie können eigene Daten zu Ihrer WebID in gültigem FOAF Vokabular
hinzufügen:"#,
            web_id_expert_mode: "Expertenmodus aktivieren",
            zip: "PLZ",
        }
    }

    fn build_zh_hans() -> Self {
        Self {
            account: "用户账户",
            acc_type: "账户类型",
            acc_type_passkey_text_1: r#"此账户目前为仅密钥登录账户。
因此，此账户没有密码，也无需设置密码。"#,
            acc_type_passkey_text_2: r#"您可以转换此账户并添加密码。
但请注意，调整后在新设备上登录时需额外进行密码验证。
如果您没有事先输入过至少一次密码，您将无法在任何设备上登录。"#,
            acc_type_passkey_text_3: "您想要转换您的账户并添加一个密码吗？",
            access_exp: "过期",
            access_renew: "续期至",
            access_renew_delete: "禁止续期",
            birthdate: "生日",
            cancel: "取消",
            city: "城市",
            change_password: "更改密码",
            convert_account: "转换账户",
            convert_account_p_1: r#"您可以将您的账户转换为仅密钥登陆账户。
此转换将删除您的密码，您将仅能够通过注册的密钥进行登陆。
请注意，只有支持额外用户验证的密钥可被用于登陆。
如果您的密钥支持用户验证，您可以在“MFA”页面中，密钥名称的后面看到一个符号。"#,
            country: "国家",
            device_id: "ID",
            device_name: "名称",
            devices: "设备",
            devices_desc: "链接到此账户的设备",
            email: "电子邮箱",
            email_update_confirm: r#"电子邮件地址未被更新。我们已向您的新邮箱发送了一封消息。
您需要点击其中的确认链接，电子邮件地址将在被确认后更新。"#,
            email_verified: "已验证电子邮箱",
            family_name: "姓",
            federated_convert_password_1: r#"您有一个联合账户。
这意味着您是通过外部鉴权提供者登陆的。您当前的提供者是："#,
            federated_convert_password_2: r#"您可以通过电子邮件请求密码重置。这将向您的本地账户添加密码，
之后您可以通过本地密码或您的外部提供者进行登陆。您想要请求密码重置吗？"#,
            generate_random: "随机生成",
            given_name: "名",
            groups: "组",
            invalid_input: "无效输入",
            key: "密钥",
            key_unique: "密钥必须是唯一的",
            last_login: "最后登录",
            mfa: I18nAccountMfa::build_zh_hans(),
            mfa_activated: "多因子认证",
            nav_info: "信息",
            nav_edit: "编辑",
            nav_mfa: "多因子认证",
            nav_password: "密码",
            nav_logout: "退出登录",
            never: "从不",
            optional_values: "可选项",
            password_confirm: "确认密码",
            password_curr: "当前密码",
            password_curr_req: "当前密码必填。",
            password_new: "新密码",
            password_new_req: "新密码必填",
            password_no_match: "密码验证必填。",
            password_expiry: "密码过期",
            password_policy: I18nPasswordPolicy::build_zh_hans(),
            password_policy_follow: "密码不符合要求。",
            password_reset: "重置密码",
            phone: "手机",
            provider_link: "联合账户",
            provider_link_desc: r#"您可以将此账户连接到下列登陆提供者之一。
激活此功能后，您将被重定向至所选提供者的登陆页面。在成功登陆后，如果电子邮件匹配，您的账户将被连接。"#,
            provider_unlink: "取消联合",
            provider_unlink_desc: r#"仅当您已设置至少一个密码或登陆密钥后，您才能和登陆提供者取消连接。"#,
            reg_date: "注册日期",
            reg_ip: "注册IP地址",
            roles: "角色",
            save: "保存",
            street: "街道",
            user: "用户",
            user_created: "创建于",
            user_enabled: "启用",
            user_expiry: "过期",
            user_verified_tooltip: "指纹或PIN保护",
            valid_email: "无效电子邮箱格式",
            valid_given_name: "您的名字需要有2-32个非特殊字符",
            valid_family_name: "您的姓氏需要有2-32个非特殊字符",
            web_id_desc: r#"您可以选择哪些字段能够通过WebID发布。
WebID被一些网络用于去中心化登陆。如果您不知道这是什么，您通常不需要选择。"#,
            web_id_desc_data: "您可以以FOAF词汇格式向您的 WebID 添加自定义数据字段",
            web_id_expert_mode: "启用专家模式",
            zip: "邮政编码",
        }
    }

    fn build_ko() -> Self {
        Self {
            account: "사용자 계정",
            acc_type: "계정 종류",
            acc_type_passkey_text_1: r#"이 계정은 현재 패스키 전용 계정입니다.
즉, 비밀번호가 필요하지 않으므로, 비밀번호가 전혀 없다는 뜻입니다."#,
            acc_type_passkey_text_2: r#"계정을 전환하고 비밀번호를 추가할 수 있습니다.
다만, 이렇게 하면 새 기기를 인증할 때마다 추가적으로 비밀번호 인증을 해야 한다는 것을 명심해 주세요.
한 번도 비밀번호를 입력한 적이 없는 기기에서는 바로 로그인할 수 없습니다."#,
            acc_type_passkey_text_3: "계정을 전환하고 비밀번호를 추가하겠습니까?",
            access_exp: "접근 만료",
            access_renew: "접근 갱신 기한",
            access_renew_delete: "갱신할 가능성을 제거",
            birthdate: "생년월일",
            cancel: "취소",
            city: "도시",
            change_password: "비밀번호 변경",
            convert_account: "계정 전환",
            convert_account_p_1: r#"계정을 패스키 전용 계정으로 전환할 수 있습니다.
이 전환은 비밀번호를 삭제하며, 등록된 패스키를 사용해서만 로그인할 수 있습니다.
추가적인 사용자 인증이 가능한 패스키만 허용된다는 점을 명심해 주세요.
패스키가 지원한다면, 'MFA' 페이지에서 키 이름 뒤에 작은 표시가 있는 것을 찾을 수 있을 겁니다."#,
            country: "국가",
            device_id: "아이디",
            device_name: "이름",
            devices: "기기",
            devices_desc: "이 계정에 연결된 기기",
            email: "이메일",
            email_update_confirm: r#"아직 이메일 주소가 변경되지 않았습니다. 새 주소로 메시지가 전송되었습니다.
내부에 있는 승인 링크를 클릭해야 합니다. 승인되면 이메일 주소가 새 주소로 변경될 겁니다."#,
            email_verified: "이메일 인증 여부",
            family_name: "성",
            federated_convert_password_1: r#"페더레이션 계정을 가지고 있습니다. 즉, 외부 인증 제공자를 사용하여
로그인한다는 것을 의미합니다. 현재 제공자는 다음과 같습니다:"#,
            federated_convert_password_2: r#"이메일을 통해 비밀번호 초기화를 요청할 수 있습니다. 완료하면 내부적인
비밀번호가 계정에 추가될 겁니다. 그러면 외부 제공자 또는 내부적인 비밀번호를 통하여 로그인할 수 있습니다. 초기화를 요청하겠습니까?"#,
            generate_random: "무작위로 생성",
            given_name: "이름",
            groups: "그룹",
            invalid_input: "유효하지 않은 입력입니다.",
            key: "키",
            key_unique: "키는 고유해야 합니다.",
            last_login: "마지막 로그인 일",
            mfa: I18nAccountMfa::build_ko(),
            mfa_activated: "MFA 활성화 여부",
            nav_info: "정보",
            nav_edit: "수정",
            nav_mfa: "MFA",
            nav_password: "비밀번호",
            nav_logout: "로그아웃",
            never: "무기한",
            optional_values: "선택 항목",
            password_confirm: "비밀번호 확인",
            password_curr: "현재 비밀번호",
            password_curr_req: "현재 비밀번호가 필요합니다.",
            password_new: "새 비밀번호",
            password_new_req: "새 비밀번호가 필요합니다.",
            password_no_match: "비밀번호 확인이 필요합니다.",
            password_expiry: "비밀번호 만료일",
            password_policy: I18nPasswordPolicy::build_ko(),
            password_policy_follow: "비밀번호 정책을 준수해야 합니다.",
            password_reset: "비밀번호 초기화",
            phone: "전화번호",
            provider_link: "페더레이션 계정",
            provider_link_desc: r#"이 계정은 다음 중 하나의 로그인 제공자에 연결할 수 있습니다.
이 기능을 활성화하면, 선택한 것의 로그인 페이지로 리다이렉트될 겁니다. 성공적으로 로그인하고 이메일이 일치하면, 계정이 연결될 겁니다."#,
            provider_unlink: "페더레이션 해제",
            provider_unlink_desc: r#"이 계정에 최소 하나의 비밀번호 또는 패스키를 설정하면, 상위 제공자로부터 연결을 해제할 수 있습니다."#,
            reg_date: "가입일",
            reg_ip: "IP에서 가입",
            roles: "역할",
            save: "저장",
            street: "주소",
            user: "사용자",
            user_created: "사용자 생성일",
            user_enabled: "사용자 활성화 여부",
            user_expiry: "사용자 만료",
            user_verified_tooltip: "지문 또는 PIN을 통해 보호",
            valid_email: "유효하지 않은 이메일 형식입니다.",
            valid_given_name: "이름은 특수문자를 제외한 1자에서 32자이어야 합니다.",
            valid_family_name: "성은 특수문자를 제외한 1자에서 32자이어야 합니다.",
            web_id_desc: r#"WebID와 함께 노출할 항목을 설정할 수 있습니다.
이 기능은 몇몇 탈중앙화된 로그인 네트워크에서 사용됩니다. 이것이 무엇인지 모르면, 대체로 필요하지 않을 것입니다."#,
            web_id_desc_data:
                "WebID에서 유효한 FOAF 어휘를 사용자 지정 데이터 항목에 추가할 수 있습니다",
            web_id_expert_mode: "전문가 모드 활성화",
            zip: "우편번호",
        }
    }
}

#[derive(Debug, Default, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct I18nAccountMfa {
    p_1: &'static str,
    p_2: &'static str,

    delete: &'static str,
    error_reg: &'static str,
    invalid_key_used: &'static str,
    last_used: &'static str,
    no_key: &'static str,
    register: &'static str,
    register_new: &'static str,
    registerd: &'static str,
    registerd_keys: &'static str,
    passkey_name: &'static str,
    passkey_name_err: &'static str,
    test: &'static str,
    test_error: &'static str,
    test_success: &'static str,
}

impl SsrJson for I18nAccountMfa {
    fn build(lang: &Language) -> Self {
        match lang {
            Language::En => Self::build_en(),
            Language::De => Self::build_de(),
            Language::ZhHans => Self::build_zh_hans(),
            Language::Ko => Self::build_ko(),
        }
    }

    fn as_json(&self) -> String {
        serde_json::to_string(self).unwrap()
    }
}

impl I18nAccountMfa {
    pub(crate) fn build_en() -> Self {
        Self {
            p_1: "If you plan on using your MFA key with multiple systems like Windows and \
            Android, you should do the registration with Android.",
            p_2: "Android is the platform with the least supported features for the passwordless \
            technology. Keys you register with Android work elsewhere too. However, this does not \
            apply the other way around.",

            delete: "Delete",
            error_reg: "Error starting the Registration process",
            invalid_key_used: "Invalid Key used",
            last_used: "Last used",
            no_key: "No Security key registered on this slot",
            register: "Register",
            register_new: "Register New Key",
            registerd: "Registered",
            registerd_keys: "Registered Keys",
            passkey_name: "Passkey Name",
            passkey_name_err: "2 - 32 non-special characters",
            test: "Test",
            test_error: "Error starting the Test",
            test_success: "Test successful",
        }
    }

    pub(crate) fn build_de() -> Self {
        Self {
            p_1: "Wenn Sie mehrere Systeme parallel nutzen möchten, wie z.B. Windows und Android, \
            sollten Sie die Registrierung mit Android durchführen.",
            p_2: "Android ist diejenige Plattform, die derzeit die wenigsten Features der \
            passwortlosen Technologie unterstützt. Schlüssel, die dort registriert werden, \
            funktionieren auf anderen Geräten gleichermaßen. Dies gilt jedoch nicht andersherum.",

            delete: "Löschen",
            error_reg: "Fehler beim Starten der Registrierung",
            invalid_key_used: "Ungültiger Sicherheitsschlüssel benutzt",
            last_used: "Zuletzt genutzt",
            no_key: "Es wurde in diesem Speicher noch kein Sicherheitsschlüssel registriert",
            register: "Registrieren",
            register_new: "Neuen Key Registrieren",
            registerd: "Registriert",
            registerd_keys: "Registrierte Keys",
            passkey_name: "Passkey Name",
            passkey_name_err: "2 - 32 Buchstaben, keine Sonderzeichen",
            test: "Test",
            test_error: "Fehler beim Starten des Tests",
            test_success: "Test erfolgreich",
        }
    }

    pub(crate) fn build_zh_hans() -> Self {
        Self {
            p_1: "如果您计划在多个系统上使用您的MFA密钥，例如Windows和Android，您应该在Android上进行注册。",
            p_2: "Android是支持无密码登陆特性最少的平台。能够在Android上进行注册的密钥也应能在其他平台上使用。",

            delete: "删除",
            error_reg: "开始注册过程时出现错误。",
            invalid_key_used: "使用的密钥无效",
            last_used: "最后使用",
            no_key: "此槽位没有已注册的安全密钥",
            register: "注册",
            register_new: "注册新的密钥",
            registerd: "注册时间",
            registerd_keys: "已注册的密钥",
            passkey_name: "密钥名称",
            passkey_name_err: "需要名称需要有2-32个非特殊字符",
            test: "测试",
            test_error: "开始测试时出现错误",
            test_success: "测试成功！",
        }
    }

    pub(crate) fn build_ko() -> Self {
        Self {
            p_1: "윈도우와 안드로이드와 같은 여러 시스템에서 MFA 키를 사용하려면, 안드로이드에서 등록해야 합니다.",
            p_2: "안드로이드는 비밀번호 없이 인증하는 기술을 가장 적게 지원하는 플랫폼 중 하나입니다. \
            안드로이드에서 등록한 키는 다른 곳에서도 작동합니다. 그러나, 그 반대로는 적용되지 않습니다.",

            delete: "삭제",
            error_reg: "가입 절차 시작 중 오류가 발생했습니다.",
            invalid_key_used: "유효하지 않은 키가 사용되었습니다.",
            last_used: "마지막 사용",
            no_key: "이 슬롯에 등록된 보안 키가 없습니다.",
            register: "등록",
            register_new: "새 키 등록",
            registerd: "등록되었습니다.",
            registerd_keys: "등록된 키",
            passkey_name: "패스키 이름",
            passkey_name_err: "특수문자를 제외한 2자에서 32자이어야 합니다.",
            test: "테스트",
            test_error: "테스트 시작 중에 오류가 발생했습니다.",
            test_success: "테스트 성공",
        }
    }
}
