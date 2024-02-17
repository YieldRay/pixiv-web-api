import { Query, requestJSONAPI } from "@/request"
/**
 * @title 已关注用户的新作 插画、漫画
 * @reference https://www.pixiv.net/bookmark_new_illust.php
 *
 * @title 已关注用户的作品 小说
 * @reference https://www.pixiv.net/novel/bookmark_new.php
 */
export const followLatest = (
    type: "illust" | "novels",
    query?: Query<{ p: number; mode?: "all" | "r18" }>,
) => requestJSONAPI(`/ajax/follow_latest/${type}`, query)
