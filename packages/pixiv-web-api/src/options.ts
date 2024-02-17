/**
 * We make the option to be a shared options object.
 * This allow our other function do not depend on the context,
 * but the shared variable, so we can separate api into files.
 */

export interface Options {
    fetch?: typeof globalThis.fetch
    /**
     * @default "https://www.pixiv.net"
     */
    baseURL?: string
    /**
     * This will affect pixiv translation related fields,
     * no need if run in browser
     * @example "zh-CN"
     */
    acceptLanguage?: string
    /**
     * The cookie header
     */
    cookie?: string
    xUserId?: number | string
}

const options: Options = {
    fetch: globalThis.fetch,
    baseURL: "https://www.pixiv.net",
}

/**
 * Set the global options
 */
export const setOptions = (partialOptions: Partial<Options>) => {
    Object.assign(options, partialOptions)
}

/**
 * Get the global options
 */
export const getOptions: () => Readonly<Options> = () => options
