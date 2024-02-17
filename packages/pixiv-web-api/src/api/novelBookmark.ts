import { requestJSONAPI } from "@/request"

export const novelsBookmarksAdd = (data: {
    illust_id: `${number}`
    restrict: 0 | 1
    /**
     * @example ""
     */
    comment: string
    /**
     * @example []
     */
    tags: string[]
}) => requestJSONAPI(`/ajax/novels/bookmarks/add`, undefined, data)

export const novelsBookmarksDelete = (data: {
    book_id: `${number}`
    del: "1"
}) => requestJSONAPI(`/ajax/novels/bookmarks/delete`, undefined, data)

export const novelsBookmarksRemove = (data: { bookmark_ids: number[] }) =>
    requestJSONAPI(`/ajax/novels/bookmarks/remove`, undefined, data)

export const novelsBookmarksEditRestrict = (data: {
    bookmark_ids: number[]
    bookmark_restrict: "private" | "public"
}) => requestJSONAPI(`"/ajax/novels/bookmarks/edit_restrict"`, undefined, data)

export const novelsBookmarkAddTags = (data: {
    bookmark_ids: number[]
    tags: string[]
}) => requestJSONAPI(`/ajax/novels/bookmarks/add_tags`, undefined, data)
