import { requestJSONAPI } from "@/request"

export const favoriteTagsSave = (data: { tags: string[] }) =>
    requestJSONAPI(`/ajax/favorite_tags/save`, undefined, data)
