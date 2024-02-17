import { requestJSONAPI } from "@/request"

export const illustSeriesWatch = (id: number) =>
    requestJSONAPI(`/ajax/illust/series/${id}/watch`)

export const illustSeriesUnwatch = (id: number) =>
    requestJSONAPI(`/ajax/illust/series/${id}/unwatch`)

export const illustSeriesWatchlistNotificationTurnOn = (id: number) =>
    requestJSONAPI(
        `/ajax/illust/series/${id}/watchlist/notification/turn_on`,
        undefined,
        {},
    )

export const illustSeriesWatchlistNotificationTurnOff = (id: number) =>
    requestJSONAPI(
        `/ajax/illust/series/${id}/watchlist/notification/turn_off`,
        undefined,
        {},
    )
