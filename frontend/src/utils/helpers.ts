import getPkce from 'oauth-pkce';
import {
    ACCESS_TOKEN,
    AUTH_ENDPOINT,
    CLIENT_ID,
    CSRF_TOKEN,
    ID_TOKEN,
    LOGOUT_URL,
    PKCE_VERIFIER, PKCE_VERIFIER_UPSTREAM,
    POST_LOGOUT_REDIRECT_URI, PROVIDER_TOKEN,
    REDIRECT_URI
} from "./constants.js";
import {decode, encode} from "base64-arraybuffer";
import {getProvidersTemplate} from "./dataFetching.js";

export function buildWebIdUri(userId: string) {
    return `${window.location.origin}/auth/${userId}/profile#me`
}

export function extractFormErrors(err: any): any {
    return err.inner.reduce((acc: any, err: any) => {
        return {...acc, [err.path]: err.message};
    }, {});
}

export function isBrowser() {
    return typeof window !== 'undefined';
}

export function isDefaultScope(name: string) {
    return name === 'openid' || name === 'profile' || name === 'email' || name === 'groups'
        || name === 'address' || name === 'phone';
}

/*
 Returns the auth providers minimal template.
 When in dev mode, fetches the providers via additional GET,
 when in prod mode, extracts the value from the SSR template element.
 */
export async function getAuthProvidersTemplate() {
    if ('production' === import.meta.env.MODE) {
        const providerTpl = document?.getElementsByTagName('template')?.namedItem('auth_providers')?.innerHTML;
        if (providerTpl) {
            return JSON.parse(providerTpl);
        }
        return undefined;
    } else {
        const res = await getProvidersTemplate();
        if (res.ok) {
            return await res.json();
        }
        return undefined;
    }
}

export const redirectToLogin = (state: string) => {
    getPkce(64, (error, {challenge, verifier}) => {
        if (!error) {
            localStorage.setItem(PKCE_VERIFIER, verifier);
            const nonce = getKey(24);
            const s = state || 'admin';
            const redirect_uri = `${window.location.origin}${REDIRECT_URI}`.replaceAll(':', '%3A').replaceAll('/', '%2F');
            window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${redirect_uri}&response_type=code&code_challenge=${challenge}&code_challenge_method=S256&scope=openid+profile+email&nonce=${nonce}&state=${s}`;
        }
    });
};

export const redirectToLogout = () => {
    const url = `${LOGOUT_URL}?post_logout_redirect_uri=${window.location.origin}${POST_LOGOUT_REDIRECT_URI}`;
    // const url = `${LOGOUT_URL}?id_token_hint=${getIdToken()}&post_logout_redirect_uri=${window.location.origin}${POST_LOGOUT_REDIRECT_URI}`;
    window.location.href = url;
};

export const saveCsrfToken = (csrf: string) => {
    localStorage.setItem(CSRF_TOKEN, csrf);
}

export const getCsrfToken = () => {
    return localStorage.getItem(CSRF_TOKEN) || '';
}

export const saveIdToken = (token: string) => {
    localStorage.setItem(ID_TOKEN, token);
}

export const saveAccessToken = (token: string) => {
    localStorage.setItem(ACCESS_TOKEN, token);
}

export const saveProviderToken = (token: string) => {
    localStorage.setItem(PROVIDER_TOKEN, token);
}
export const getProviderToken = () => {
    return localStorage.getItem(PROVIDER_TOKEN) || '';
}
export const deleteProviderToken = () => {
    localStorage.removeItem(PROVIDER_TOKEN);
}

export const getVerifierFromStorage = () => {
    return localStorage.getItem(PKCE_VERIFIER) || '';
};

export const getVerifierUpstreamFromStorage = () => {
    return localStorage.getItem(PKCE_VERIFIER_UPSTREAM) || '';
};

export const deleteVerifierFromStorage = () => {
    localStorage.removeItem(PKCE_VERIFIER);
};

export const purgeStorage = () => {
    localStorage.removeItem(CSRF_TOKEN);
    localStorage.removeItem(ID_TOKEN);
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(PKCE_VERIFIER);
    localStorage.removeItem(PKCE_VERIFIER_UPSTREAM);
    localStorage.removeItem(PROVIDER_TOKEN);
}

export function arrBufToBase64UrlSafe(buffer: ArrayBuffer) {
    let base64 = encode(buffer);
    const enc = {
        '+': '-',
        '/': '_',
        '=': ''
    }
    return base64.replace(/[+/=]/g, m => enc[m as '+' | '/' | '='])
}

export function base64UrlSafeToArrBuf(base64url: string) {
    const dec = {
        '-': '+',
        '_': '/',
        '.': '='
    }
    const base64 = base64url.replace(/[-_.]/g, (m) => dec[m as '-' | '_' | '.'])
    return decode(base64);
}

export function eventColor(level: string) {
    switch (level) {
        case 'test':
            return '#b2b2b2';
        case 'info':
            return '#388c51';
        case 'notice':
            return '#3d5d99';
        case 'warning':
            return '#c29a4f';
        case 'critical':
            return '#993d49';
    }
}


export const formatDateToDateInput = (date: Date) => {
    return date.toISOString().slice(0, 16);
    // return date.toISOString().split('.')[0];
}

export const formatUtcTsFromDateInput = (inputDate: string) => {
    let d = Date.parse(inputDate);
    if (isNaN(d)) {
        return;
    }
    return d / 1000;
}

export const formatDateFromTs = (ts: number, fmtIso: boolean) => {
    const utcOffsetMinutes = -new Date().getTimezoneOffset();
    const d = new Date((ts + utcOffsetMinutes * 60) * 1000);

    let dd: number | string = d.getUTCDate();
    if (dd < 10) {
        dd = '0' + dd;
    }
    let mm: number | string = d.getUTCMonth() + 1;
    if (mm < 10) {
        mm = '0' + mm;
    }
    const yyyy = d.getUTCFullYear();

    let hr: number | string = d.getUTCHours();
    if (hr < 10) {
        hr = '0' + hr;
    }
    let mn: number | string = d.getUTCMinutes();
    if (mn < 10) {
        mn = '0' + mn;
    }
    let sc: number | string = d.getUTCSeconds();
    if (sc < 10) {
        sc = '0' + sc;
    }

    if (fmtIso) {
        return `${yyyy}-${mm}-${dd}T${hr}:${mn}:${sc}`;
    }
    return `${yyyy}/${mm}/${dd} ${hr}:${mn}:${sc}`;
}

export const generatePassword = (
    length: number,
    minLowerCase: number,
    minUpperCase: number,
    minDigit: number,
    minSpecial: number,
) => {
    const lowerCaseNeeded = minLowerCase || 1;
    const upperCaseNeeded = minUpperCase || 1;
    const digitNeeded = minDigit || 1;
    const specialNeeded = minSpecial || 1;

    while (true) {
        let pwdLength = length || 16;
        let lowerCaseIncluded = 0;
        let upperCaseIncluded = 0;
        let digitIncluded = 0;
        let specialIncluded = 0;
        let pwdArr = [];

        for (let i = 0; i < pwdLength; i += 1) {
            let nextNumber = 60;
            while ((nextNumber > 57 && nextNumber < 65) || (nextNumber > 90 && nextNumber < 97)) {
                nextNumber = Math.floor(Math.random() * 74) + 33;
            }

            // check if a lower case char was already included
            if (nextNumber >= 91 && nextNumber <= 122) {
                lowerCaseIncluded += 1;
            }

            // check if a upper case char was already included
            if (nextNumber >= 65 && nextNumber <= 90) {
                upperCaseIncluded += 1;
            }

            // check if a digit was already included
            if (nextNumber >= 48 && nextNumber <= 57) {
                digitIncluded += 1;
            }

            // check if a special char was already included
            if (nextNumber >= 33 && nextNumber <= 47) {
                specialIncluded += 1;
            }

            pwdArr.push(String.fromCharCode(nextNumber));
        }

        // If not all types are included, start fresh and try again -> most random approach
        if (lowerCaseIncluded < lowerCaseNeeded
            || upperCaseIncluded < upperCaseNeeded
            || specialIncluded < specialNeeded
            || digitIncluded < digitNeeded) {
            continue;
        }

        return pwdArr.join('');
    }
};

// Returns a short random key, which can be used in components to identify them uniquely.
export const getKey = (i: number) => {
    let res = '';

    const target = i || 8;
    for (let i = 0; i < target; i += 1) {
        let nextNumber = 60;
        while ((nextNumber > 57 && nextNumber < 65) || (nextNumber > 90 && nextNumber < 97)) {
            nextNumber = Math.floor(Math.random() * 74) + 48;
        }
        res = res.concat(String.fromCharCode(nextNumber));
    }

    return res;
}

export const getQueryParams = () => {
    return new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop.toString()),
    });
}

// races a promise against a given timeout and throws an exception if exceeded
export const promiseTimeout = (prom: Promise<any>, time: number) => {
    let timer: any;
    return Promise.race([
        prom,
        new Promise(
            (_r, rej) => timer = setTimeout(rej, time, 'timeout')
        )
    ]).finally(() => clearTimeout(timer));
}

// async sleep in ms
export const sleepAwait = async (ms: number) => await new Promise(x => setTimeout(x, ms));
