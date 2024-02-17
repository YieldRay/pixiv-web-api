import { getOptions } from "./options"

export const isBrowser =
    typeof window !== "undefined" && typeof window.document !== "undefined"

export type RequestQuery = Record<
    string,
    string | number | undefined | Array<string | number>
>

export type Query<T extends RequestQuery = {}> = {
    /**
     * @example "f7ee0b7c341b92c568c6c901722efa1fc90dcaf8"
     */
    version?: string
    lang?: string | "zh"
} & T

type RequestType = "json" | "form" | "formdata"

/**
 * The basic request function, returns `Response` instance
 *
 * @param query an object to add to url search params
 * @param data if data is falsy value, send GET request, otherwise send POST request
 * @param type for adjusting request content-type, by default is json format
 */
export const request = (
    endpoint: string,
    query: RequestQuery = {},
    data?: any,
    type: RequestType = "json",
) => {
    const {
        fetch = globalThis.fetch,
        baseURL = "https://www.pixiv.net",
        cookie,
        xUserId,
        acceptLanguage,
    } = getOptions()

    const url = new URL(baseURL + endpoint)
    Object.entries(query).forEach(([k, v]) => {
        if (v == undefined) return
        if (Array.isArray(v)) {
            v.forEach((vv) => url.searchParams.append(k, vv.toString()))
        } else {
            url.searchParams.append(k, v.toString())
        }
    })

    const headers = new Headers()
    if (cookie) headers.set("Cookie", cookie)
    if (xUserId) headers.set("X-User-Id", xUserId.toString())

    if (isBrowser) {
        headers.set("Accept-Language", acceptLanguage ?? "zh-CN")
    } else {
        // 浏览器会自动设置此 Header，无需提供默认值
        if (acceptLanguage) headers.set("Accept-Language", acceptLanguage)
        // 以下 Headers 浏览器受限
        headers.set(
            "User-Agent",
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.0.0",
        )
        headers.set("Referer", "https://www.pixiv.net")
    }

    let body: RequestInit["body"] = undefined
    if (data) {
        switch (type) {
            case "json": {
                headers.set("Content-type", "application/json; charset=utf-8")
                body = JSON.stringify(data)
                break
            }
            case "form": {
                headers.set("Content-type", "application/x-www-form-urlencoded")
                body = new URLSearchParams(data)
                break
            }
            case "formdata": {
                const fd = new FormData()
                for (const [key, val] of Object.entries(data)) {
                    fd.append(
                        key,
                        val instanceof Blob
                            ? val
                            : typeof val === "object"
                              ? JSON.stringify(val)
                              : String(val),
                    )
                }
                body = fd
                break
            }
        }
    }

    return fetch(
        String(url), // 防止某些 fetch 的实现第一个参数只接受字符串
        {
            method: data ? "POST" : "GET",
            body,
            headers,
            referrerPolicy: isBrowser ? "no-referrer" : undefined,
        },
    )
}

/**
 * parse the Response to JSON
 */
export const requestJSON = async <T = any>(
    endpoint: string,
    query: RequestQuery = {},
    data?: any,
    type?: RequestType,
) => {
    const res = await request(endpoint, query, data, type)
    if (res.ok) {
        return (await res.json()) as T
    } else {
        throw new TypeError(
            `response is not ok (${res.status}) for url (${res.url})`,
        )
    }
}

/**
 * parse the JSON for pixiv ajax API
 */
export const requestJSONAPI = async <T = any, U = unknown>(
    endpoint: string,
    query: RequestQuery = {},
    data?: any,
    type?: RequestType,
) => {
    const json = await requestJSON<
        { error: false; body: T } | { error: true; message: string; body: U }
    >(endpoint, query, data, type)
    if (json.error) {
        throw new Error(json.message)
    } else {
        return json.body
    }
}
