import { requestJSONAPI } from "@/request"

export const userTag = (id: number, type: "illusts" | "manga" | "novels") =>
    requestJSONAPI(`/ajax/user/${id}/${type}/tag`)

export const userTags = (
    id: number,
    type: "illusts" | "manga" | "novels",
    query: {
        tag: string
        offset: number
        limit: number
    },
) => requestJSONAPI(`/ajax/user/${id}/${type}/tag`, query)
