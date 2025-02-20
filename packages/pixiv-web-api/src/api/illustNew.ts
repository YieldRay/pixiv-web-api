import { Query, requestJSONAPI } from "@/request"

/**
 *
 * 大家的新作 插画、漫画、小说
 *
 * @see https://www.pixiv.net/new_illust.php
 */
export const illustNew = (
    query: Query<{
        /** @example 0 */
        lastId: number
        /** @example 20 */
        limit: number
        type: "illust" | "manga" | "novel"
        r18: "true" | "false"
    }>,
) => requestJSONAPI(`/ajax/illust/new`, query)
