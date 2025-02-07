import type {I18nAdmin} from "./interface.ts";

export let I18nAdminDe: I18nAdmin = {
    common: {
        account: "Account",
        back: "Zurück",
        copiedToClip: "Wert wurde in die Zwischenablage kopiert",
        copyToClip: "Wert in Zwischenablage kopieren",
        filter: "Filter",
        from: "Von",
        note: "Notiz",
        search: "Suchen",
        searchOptions: "Suchoptionen",
        until: "Bis",
    },
    docs: {
        book: "Für generelle Dokumentation für Rauthy existiert das",
        openapi: "Zur Integration einer externen Applikation via Rauthy's API gibt es das",
        openapiNote: `In Abhängigkeit von der Konfiguration ist das Swagger  UI nicht öffentlich zugänglich übber den
            oben genannten Link. Es ist allerdings (standardmäßig) über den internen metrics server verfügbar zur
            Reduzierung der Angriffsfläche.`,
        source: "Der source code kann hier gefunden werden",
    },
    error: {
        needsAdminRole: 'Um Zugriff zu erhalten ist die Rolle <b>rauthy_admin</b> notwendig.',
        noAdmin: `Für Rauthy Admin Accounts ist <b>MFA Pflicht.</b><br>
            Im <b>Account</b> kann ein Passkey hinterlegt und MFA aktiviert werden.<br>
            Danach muss ein Logout und neuer Login folgen`,
    },
    events: {
        eventLevel: "Event Level",
        eventType: "Event Typ",
    },
    jwks: {
        alg: "Algorithmus",
        p1: "Dies sind die Json Web Keys (JWKs) die für das Signieren der Tokens genutzt werden.",
        p2: `JWKs werden standardmäßig automatisch an jedem 1. des Monats rotiert. Für alle neuen Tokens wird 
        immer die aktuellste Version eines Keys für den jeweiligen Algorithmus verwerndet. Alte Keys werden für 
        eine Weile behalten um bestehende Tokens validieren zu können und nach einer gewissen Zeit automatisch gelöscht.`,
        p3: `Die Keys können manuell rotiert werden. Abhängig von der Hardware auf der diese Rauthy Instanz läuft,
        kann dies einige Sekunden in Anspruch nehmen.`,
        type: "Typ",
        rotateKeys: "Keys Rotieren",
    },
    nav: {
        apiKeys: "API Keys",
        attributes: "Attribute",
        blacklist: "Blacklist",
        clients: "Clients",
        config: "Konfiguration",
        docs: "Dokumentation",
        events: "Events",
        groups: "Gruppen",
        providers: "Provider",
        roles: "Rollen",
        scopes: "Scopes",
        sessions: "Sessions",
        users: "Benutzer",
    },
    passwordPolicy: {
        configDesc: "Regeln für neue Passwörter.",
        resetSet0: "Der Wert 0 deaktiviert die Bedingung.",
        validForDays: "Gültigkeit Tage",
        validityNew: "Gültigkeit für neue Passwörter.",
    },
    search: {
        orderBy: "Sortieren nach ...",
        orderChangeToAsc: "Zu aufsteigender Sortierung wechseln",
        orderChangeToDesc: "Zu absteigende Sortierung wechseln",
    }
};