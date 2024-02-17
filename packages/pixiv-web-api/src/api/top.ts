import { Query, requestJSONAPI } from "@/request"

/**
 * @title 首页 插画/漫画/小说
 * @reference https://www.pixiv.net/illust
 * @reference https://www.pixiv.net/manga
 * @reference https://www.pixiv.net/novel
 */
export const top = (
    type: "illust" | "manga" | "novel",
    query?: Query<{ mode?: "all" | string }>,
) => requestJSONAPI(`/ajax/top/${type}`, query)
