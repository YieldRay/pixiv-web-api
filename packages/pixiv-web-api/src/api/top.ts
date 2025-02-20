import { Query, requestJSONAPI } from "@/request"

/**
 * # 首页 插画/漫画/小说
 * @see https://www.pixiv.net/illust
 * @see https://www.pixiv.net/manga
 * @see https://www.pixiv.net/novel
 */
export const top = (
    type: "illust" | "manga" | "novel",
    query?: Query<{ mode?: "all" | string }>,
) => requestJSONAPI(`/ajax/top/${type}`, query)
