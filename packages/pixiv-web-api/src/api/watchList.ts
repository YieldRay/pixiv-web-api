import { Query, requestJSONAPI } from "@/request"

/**
 * @title 追更列表中的作品 漫画
 * @reference https://www.pixiv.net/following/watchlist/manga
 *
 * @title 追更列表中的作品 小说
 * @reference https://www.pixiv.net/following/watchlist/novel
 */
export const watchList = (
    type: "manga" | "novel",
    query?: Query<{ p: number }>,
) => requestJSONAPI(`/ajax/watch_list/${type}`, query)
