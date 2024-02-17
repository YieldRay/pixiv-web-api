import { requestJSONAPI } from "@/request"

/**
 * 漫画系列
 */
export const series = (
    id: number,
    query?: {
        /**
         * 倒序，一页12个
         */
        p: number
    },
) => requestJSONAPI(`/ajax/series/${id}`, query)
