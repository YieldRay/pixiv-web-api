import { requestJSONAPI } from "@/request"

/**
 * 添加爱心
 */
export const illustBookmarksAdd = (data: {
    illust_id: `${number}`
    restrict?: 0 | 1
    /**
     * @example ""
     */
    comment: string
    /**
     * @example []
     */
    tags: string[]
}) =>
    requestJSONAPI<{
        last_bookmark_id: `${number}`
        stacc_status_id: `${number}`
    }>(`/ajax/illusts/bookmarks/add`, undefined, data)

/**
 * 取消爱心
 */
export const illustsBookmarksDelete = (data: {
    /**
     * 即 illustBookmarksAdd 返回的 last_bookmark_id
     */
    bookmark_id: `${number}`
}) => requestJSONAPI(`/ajax/illusts/bookmarks/delete`, undefined, data, "form")

export const illustsBookmarksRemove = (data: { bookmark_ids: number[] }) =>
    requestJSONAPI(`/ajax/illusts/bookmarks/remove`, undefined, data)

export const illustsBookmarksEditRestrict = (data: {
    bookmark_ids: number[]
    bookmark_restrict: "private" | "public"
}) => requestJSONAPI(`"/ajax/illusts/bookmarks/edit_restrict"`, undefined, data)

export const illustsBookmarksAddTags = (data: {
    bookmark_ids: number[]
    tags: string[]
}) => requestJSONAPI(`/ajax/illusts/bookmarks/add_tags`, undefined, data)
