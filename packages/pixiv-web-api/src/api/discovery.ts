import { Query, requestJSONAPI } from "@/request"

/**
 * # 发现 推荐作品 插画、漫画
 * @see https://www.pixiv.net/discovery
 * 注意：meta 接口已省略 /ajax/discovery/artworks/meta
 *
 * # 发现 推荐作品 小说
 * @see https://www.pixiv.net/novel/discovery
 * 注意：meta 接口已省略 /ajax/discovery/novels/meta
 *
 * # 发现 推荐用户
 * @see https://www.pixiv.net/discovery/users
 */
export const discovery = (
    type: "artworks" | "novels" | "users",
    query: Query<{
        mode: string | "all"
        /**
         * @example
         * 60 for artworks
         * 100 for novels
         * 20 for users
         */
        limit: number
    }>,
) => requestJSONAPI(`/ajax/discovery/${type}`, query)
