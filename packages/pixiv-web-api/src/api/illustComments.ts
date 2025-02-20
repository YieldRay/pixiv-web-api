import { Query, requestJSONAPI } from "@/request"

/**
 * 查询评论
 *
 * 此接口逻辑为：第一次 offset=0 limit=3 之后 offset=3 limit=50
 *
 * @see https://www.pixiv.net/artworks/${id}
 */
export const illustsCommentsRoots = (
    query: Query<{ illust_id: number; limit: number; offset: number }>,
) => requestJSONAPI(`/ajax/illusts/comments/roots`, query)

/**
 * 查询评论（回复）
 *
 * @see https://www.pixiv.net/artworks/${id}
 */
export const illustsCommentsReplies = (query: {
    comment_id: number
    page: number
}) => requestJSONAPI(`/ajax/illusts/comments/replies`, query)

/**
 * 发表评论
 *
 * @see https://www.pixiv.net/artworks/${id}
 */
export const rpcPostComment = (data: {
    type: "comment" | "stamp"
    illust_id: number
    author_user_id: number
    comment: string
}) => requestJSONAPI(`/rpc/post_comment.php`, undefined, data, "form")

/**
 * 删除评论
 *
 * @see https://www.pixiv.net/artworks/${id}
 */
export const rpcDeleteComment = (data: {
    /**
     * 同 rpcPostComment 的 illust_id
     */
    i_id: number
    /**
     * 即 rpcPostComment 得到的 comment_id
     */
    del_id: number
}) => requestJSONAPI(`/rpc_delete_comment.php`, undefined, data, "form")
