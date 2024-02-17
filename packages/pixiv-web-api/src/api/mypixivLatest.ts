import { requestJSONAPI, Query } from "@/request"

/**
 * 好P友的作品 插画、漫画
 * 好P友的作品 小说
 *
 * @reference https://www.pixiv.net/mypixiv_new_illust.php
 */
export const mypixivLatest = (
    type: "manga" | "novel",
    query?: Query<{ p: number }>,
) => requestJSONAPI(`/ajax/mypixiv_latest/${type}`, query)
