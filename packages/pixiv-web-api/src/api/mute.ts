import { requestJSONAPI } from "@/request"

export const muteItemsAdd = (data: {
    context: "user"
    type: "user"
    value: number
}) => requestJSONAPI(`/ajax/mute/items/add`, undefined, data, "form")

export const muteItemsDelete = (data: {
    context: "user"
    type: "user"
    value: number
}) => requestJSONAPI(`/ajax/mute/items/delete`, undefined, data, "form")
