import { requestJSON, requestJSONAPI } from "@/request"

export const novel = (id: number) => requestJSONAPI(`/ajax/novel/${id}`)

export const novelsLike = (data: { novel_id: string }) =>
    requestJSONAPI(`/ajax/novels/like`, undefined, data)

export const novelRpcMarker = (data: {
    mode: "save"
    i_id: string
    u_id: string
    page: string
}) => requestJSON(`/novel/rpc_marker.php`, undefined, data)

export const novelRecommendInit = (
    id: number,
    query: {
        limit?: number
    },
) => requestJSONAPI(`/ajax/novel/${id}/recommend/init`, query)

export const novelRecommendIllusts = (query: { novel_ids: number[] }) =>
    requestJSONAPI(`/ajax/novel/recommend/illusts`, query)
