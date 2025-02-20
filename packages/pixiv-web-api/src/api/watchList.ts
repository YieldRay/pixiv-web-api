import { Query, requestJSONAPI } from "@/request"

/**
 * # 追更列表中的作品 漫画
 * @see https://www.pixiv.net/following/watchlist/manga
 *
 * # 追更列表中的作品 小说
 * @see https://www.pixiv.net/following/watchlist/novel
 */
export const watchList = (
    type: "manga" | "novel",
    query?: Query<{ p: number }>,
) => requestJSONAPI(`/ajax/watch_list/${type}`, query)
