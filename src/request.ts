import { getOptions } from "./options";

export const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";

export type RequestQuery = Record<string, string | number | undefined | Array<string | number>>;

export type Query<T extends RequestQuery = {}> = {
    /**
     * @example "f7ee0b7c341b92c568c6c901722efa1fc90dcaf8"
     */
    version?: string;
    lang?: string | "zh";
} & T;

/**
 * The basic request function, returns Response
 */
export const request = async (endpoint: string, query: RequestQuery = {}, data?: any, isForm = false) => {
    const { baseURL, cookie, xUserId, acceptLanguage } = getOptions();

    const url = new URL(baseURL + endpoint);
    Object.entries(query).forEach(([k, v]) => {
        if (v == undefined) return;
        if (Array.isArray(v)) {
            v.forEach((vv) => url.searchParams.append(k, vv.toString()));
        } else {
            url.searchParams.append(k, v.toString());
        }
    });

    const headers = new Headers();
    if (cookie) headers.set("Cookie", cookie);
    if (xUserId) headers.set("X-User-Id", xUserId.toString());

    if (isBrowser) {
        if (acceptLanguage) headers.set("Accept-Language", acceptLanguage);
    } else {
        headers.set(
            "User-Agent",
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.0.0"
        );
        headers.set("Referer", "https://www.pixiv.net");
        if (acceptLanguage) headers.set("Accept-Language", acceptLanguage);
    }

    let body: RequestInit["body"] = undefined;
    if (data) {
        if (isForm) {
            headers.set("Content-type", "application/x-www-form-urlencoded");
            body = new URLSearchParams(data);
        } else {
            headers.set("Content-type", "application/json; charset=utf-8");
            body = JSON.stringify(data);
        }
    }

    const req = new Request(url, {
        method: data ? "POST" : "GET",
        body,
        headers,
        referrerPolicy: isBrowser ? "no-referrer" : undefined,
    });

    const res = await fetch(req);
    console.log(res.url);
    return res;
};

/**
 * parse the Response to JSON
 */
export const requestJSON = async <T = any>(
    endpoint: string,
    query: RequestQuery = {},
    data?: any,
    isForm?: boolean
) => {
    const res = await request(endpoint, query, data, isForm);
    if (res.ok) {
        return (await res.json()) as T;
    } else {
        throw new TypeError(`response is not ok (${res.status}) for url (${res.url})`);
    }
};

/**
 * parse the JSON for pixiv ajax API
 */
export const requestJSONAPI = async <T = any, U = unknown>(
    endpoint: string,
    query: RequestQuery = {},
    data?: any,
    isForm?: boolean
) => {
    const json = await requestJSON<{ error: false; body: T } | { error: true; message: string; body: U }>(
        endpoint,
        query,
        data,
        isForm
    );
    if (json.error) {
        throw new Error(json.message);
    } else {
        return json.body;
    }
};
