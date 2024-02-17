import { Query, requestJSONAPI } from "@/request"

export const novelsCommentsRoots = (
    query: Query<{ novel_id: number; limit: number; offset: number }>,
) => requestJSONAPI(`/ajax/novels/comments/roots`, query)

export const novelsCommentsReplies = (query: {
    comment_id: number
    page: number
}) => requestJSONAPI(`/ajax/novels/comments/replies`, query)

export const novelRpcPostComment = (data: {
    novel_id: number
    author_user_id: number
    comment: string
    type: "comment" | "stamp"
}) => requestJSONAPI(`/novel/rpc/post_comment.php`, undefined, data, "form")

export const novelRpcDeleteComment = (data: { i_id: number; del_id: number }) =>
    requestJSONAPI(`/novel/rpc_delete_comment.php`, undefined, data, "form")
