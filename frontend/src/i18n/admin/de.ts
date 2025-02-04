import type {I18nAdmin} from "./interface.ts";

export let I18nAdminDe: I18nAdmin = {
    common: {
        account: 'Account',
        back: 'Zurück',
        search: 'Suchen',
        searchOptions: 'Suchoptionen',
    },
    error: {
        needsAdminRole: 'Um Zugriff zu erhalten ist die Rolle <b>rauthy_admin</b> notwendig.',
        noAdmin: `Für Rauthy Admin Accounts ist <b>MFA Pflicht.</b><br>
            Im <b>Account</b> kann ein Passkey hinterlegt und MFA aktiviert werden.<br>
            Danach muss ein Logout und neuer Login folgen`,
    },
    nav: {
        apiKeys: 'API Keys',
        attributes: 'Attribute',
        blacklist: 'Blacklist',
        clients: 'Clients',
        config: 'Konfiguration',
        docs: 'Dokumentation',
        events: 'Events',
        groups: 'Gruppen',
        providers: 'Provider',
        roles: 'Rollen',
        scopes: 'Scopes',
        sessions: 'Sessions',
        users: 'Benutzer',
    }
};