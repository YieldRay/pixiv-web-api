import { Query, requestJSONAPI } from "@/request"

export const userIllustsBookmarks = (
    id: number,
    query: {
        tag: string
        offset: number
        limit: number
        rest: "hide" | "show"
    },
) => requestJSONAPI(`/ajax/user/${id}/illusts/bookmarks`, query)

export const userIllustsBookMarkTags = (id: number, query?: Query) =>
    requestJSONAPI(`/ajax/user/${id}/illusts/bookmark/tags`, query)
