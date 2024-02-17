import { Query, requestJSON, requestJSONAPI } from "@/request"

export const myProfile = () => requestJSONAPI(`/ajax/my_profile`)

export const myProfileUpdate = (data: FormData) =>
    requestJSONAPI(`/ajax/my_profile/update`, undefined, data)

export const notification = (query?: Query<{ darkTheme: 0 | 1 }>) =>
    requestJSONAPI(`/ajax/notification`, query)

export const rpcNotifyCount = (
    query?: Query<{ op: string | "count_unread" }>,
) => requestJSON<{ popboard: number }>(`/rpc/notify_count.php`, query)
