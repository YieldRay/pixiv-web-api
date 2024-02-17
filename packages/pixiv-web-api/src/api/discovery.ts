import { Query, requestJSONAPI } from "@/request"

/**
 * @title 发现 推荐作品 插画、漫画
 * @reference https://www.pixiv.net/discovery
 * @notice meta 接口已省略 /ajax/discovery/artworks/meta
 *
 * @title 发现 推荐作品 小说
 * @reference https://www.pixiv.net/novel/discovery
 * @notice meta 接口已省略 /ajax/discovery/novels/meta
 *
 * @title 发现 推荐用户
 * @reference https://www.pixiv.net/discovery/users
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
