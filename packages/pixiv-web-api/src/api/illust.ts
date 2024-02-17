import { requestJSONAPI, Query } from "@/request"

/**
 * artwork 详情
 *
 * @reference https://www.pixiv.net/artworks/${id}
 */
export const illust = (id: number, query?: Query) =>
    requestJSONAPI(`/ajax/illust/${id}`, query)

/**
 * 加载更多页
 *
 * @reference https://www.pixiv.net/artworks/${id}
 */
export const illustPages = (id: number) =>
    requestJSONAPI<
        Array<{
            urls: {
                thumb_mini: string
                small: string
                regular: string
                original: string
            }
            width: number
            height: number
        }>
    >(`/ajax/illust/${id}/pages`)

/**
 * 推荐初始化
 *
 * @reference https://www.pixiv.net/artworks/${id}
 */
export const illustRecommendInit = (
    id: number,
    query: Query<{
        /** @example 18 */
        limit: number
    }>,
) =>
    requestJSONAPI<{ illusts: any[]; nextIds: any[]; details: any[] }>(
        `/ajax/illust/${id}/recommend/init`,
        query,
    )

/**
 * 推荐更多
 *
 * 此接口的逻辑为：先调用 illustRecommendInit() 获取返回的 nextIds 数组
 * 取该数组的前 18 个作为本接口的查询字符串
 *
 * @reference https://www.pixiv.net/artworks/${id}
 */
export const illustRecommendIllusts = (
    query: Query<{ illust_ids: number[] }>,
) => requestJSONAPI(`/ajax/illust/recommend/illusts`, query)

/**
 * @reference https://www.pixiv.net/artworks/${id}
 */
export const illustDiscovery = (query: {
    mode?: "all" | "safe" | "r18"
    max: number
}) => requestJSONAPI(`/ajax/illust/discovery`, query)

/**
 * （需要登录）动图数据
 *
 * @reference https://www.pixiv.net/artworks/${id}
 */
export const illustUgoiraMeta = (id: number) =>
    requestJSONAPI(`/ajax/illust/${id}/ugoira_meta`)

/**
 * 喜欢
 */
export const illustsLike = (data: { illust_id: number }) =>
    requestJSONAPI(`/ajax/illusts/like`, undefined, data)
