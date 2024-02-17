import { requestJSONAPI } from "@/request"

export const novelSeries = (id: number) =>
    requestJSONAPI(`/ajax/novel/series/${id}`)

export const novelSeriesContent = (
    id: number,
    query?: {
        limit?: number
        last_order?: number
        order_by?: "asc" | "dsc" | string
        page?: number
        size?: number
    },
) => requestJSONAPI(`/ajax/novel/series_content/${id}`, query)

export const novelSeriesContentTitles = (id: number) =>
    requestJSONAPI<Array<{ available: Boolean; id: string; title: string }>>(
        `/ajax/novel/series/${id}/content_titles`,
    )

export const novelSeriesWatch = (id: number) =>
    requestJSONAPI(`/ajax/novel/series/${id}/watch`, undefined, {})

export const novelSeriesUnatch = (id: number) =>
    requestJSONAPI(`/ajax/novel/series/${id}/unwatch`, undefined, {})

export const novelSeriesWatchlistNotificationTurnOn = (id: number) =>
    requestJSONAPI(
        `/ajax/novel/series/${id}/watchlist/notification/turn_on`,
        undefined,
        {},
    )

export const novelSeriesWatchlistNotificationTurnOff = (id: number) =>
    requestJSONAPI(
        `/ajax/novel/series/${id}/watchlist/notification/turn_off`,
        undefined,
        {},
    )
