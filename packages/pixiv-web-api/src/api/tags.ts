import { Query, requestJSONAPI } from "@/request"

/**
 * 鼠标移入Tag时触发，返回一张预览图片
 *
 * @reference https://www.pixiv.net/artworks/${id}
 */
export const tagInfo = (query: Query<{ tag: string }>) =>
    requestJSONAPI<{
        tag: string
        abstract: string
        thumbnail: string
        en: any
        en_new: any
        ja: any
        ja_new: any
        is_view_lead_wire: boolean
    }>(`/ajax/tag/info`, query)

export const tagsIllustAdd = (id: number, data: { tag: string }) =>
    requestJSONAPI(`/ajax/tags/illust/${id}/add`, undefined, data)

export const tagsSuggestByWord = (query: Query<{ word: string }>) =>
    requestJSONAPI<
        Array<{ illust_count: number; tag_name: string; total_count: number }>
    >(`/ajax/tags/suggest_by_word`, query)
