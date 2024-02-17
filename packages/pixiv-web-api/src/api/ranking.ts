import { requestJSON } from "@/request"

/**
 * 排行榜
 *
 * @reference https://pixiv.net/ranking.php
 */
export const ranking = (query?: {
    mode?:
        | "all"
        | "daily"
        | "weekly"
        | "monthly"
        | "rookie"
        | "original"
        | "daily_ai"
        | "male"
        | "female"
        | "daily_r18"
        | "weekly_r18"
        | "male_r18"
        | "female_r18"
        | "r18g"
    content?: "all" | "illust" | "manga" | "ugoira"
    date?: string
    ref?: string
    p?: number
}) => requestJSON("/ranking.php?format=json", query)
