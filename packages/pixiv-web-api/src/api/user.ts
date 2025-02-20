import { Query, requestJSON, requestJSONAPI } from "@/request"

/**
 * 用户信息
 */
export const user = (
    id: number,
    query?: Query<{
        /**
         * 是否是完整信息
         */
        full?: 0 | 1
    }>,
) => requestJSONAPI(`/ajax/user/${id}`, query)

/**
 * TODO
 * 奇奇怪怪的接口
 */
export const userWorksLatest = (id: number, query?: Query) =>
    requestJSONAPI(`/ajax/user/${id}/works/latest`, query)

export const userFollowing = (
    id: number,
    query: {
        offset: number
        /** 建议值 24，最大值 100 */
        limit: number
        rest: "show" | "hide"
    },
) => requestJSONAPI(`/ajax/user/${id}/following`, query)

/**
 * 关注用户
 *
 * @returns 无返回值
 */
export const userBookmarkAdd = (data: {
    user_id: number
    tag: string
    restrict: "0" | "1"
}) =>
    requestJSON<[]>(
        `/bookmark_add.php?format=json&type=user&mode=add`,
        undefined,
        data,
        "form",
    )

/**
 * 推荐用户（关注当前用户之后的推荐）
 */
export const userRecommends = (
    id: number,
    query?: {
        /** @example 20 */
        userNum: number
        /** @example 3 */
        workNum: number
        isR18: "true" | "false"
    },
) => requestJSONAPI(`/ajax/user/${id}/recommends`, query)

/**
 * 取消关注用户
 */
export const rpcGroupSetting = (data: {
    mode: "del"
    type: "bookuser"
    id: number
}) =>
    requestJSON<{ type: string; user_id: string }>(
        `/rpc_group_setting.php`,
        undefined,
        data,
        "form",
    )

/**
 * 当前用户额外信息
 *
 * @see https://www.pixiv.net
 */
export const userExtra = (query?: Query) =>
    requestJSONAPI<{
        background: string | null
        followers: number
        following: number
        mypixivCount: number
    }>(`/ajax/user/extra`, query)

export const rpc = (
    data: Query<
        | {
              mode: "following_user_restrict_change"
              user_id: string
              restrict: 0 | 1
          }
        | {
              mode: "message_thread_unread_count"
          }
        | { mode: "latest_message_threads2"; num: number }
    >,
) => requestJSONAPI(`/rpc/index.php`, undefined, data)

/**
 * @param query 可选
 */
export const userProfile = (
    id: number,
    type: "all" | "top" | "illusts" | "novels",
    query?: Query<{ ids: number[] }>,
) => requestJSONAPI(`/ajax/user/${id}/profile/${type}`, query)
