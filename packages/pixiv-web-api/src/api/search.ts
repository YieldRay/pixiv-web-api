import { Query, requestJSON, requestJSONAPI } from "@/request"

/**
 * 搜索框 （onInput 触发搜索联想）
 *
 */
export const rpcCps = (query: Query<{ keyword: string }>) =>
    requestJSON<{
        candidates: Array<{
            access_count: string
            tag_name: string
            tag_translation: string
            type: string
        }>
    }>(`/rpc/cps.php`, query)

/**
 * 搜索框 搜索建议 （点击搜索框触发）
 *
 */
export const searchSuggestion = () =>
    requestJSONAPI(`/ajax/search/suggestion?mode=all`)

/**
 * 搜索框 搜索
 *
 * @param type "artworks" 为搜索触发，其余为搜索页面选择得来
 * @returns 根据 type 的不同，返回值也不同
 *
 * @reference https://www.pixiv.net/tags/${keyword}
 *
 * @example /ajax/search/artworks/miku?word=miku&order=date_d&mode=all&p=1&s_mode=s_tag&type=all
 * @example /ajax/search/top/miku
 * @example /ajax/search/tags/miku
 * @example /ajax/search/illustrations/miku?word=miku&order=date_d&mode=all&p=1&s_mode=s_tag_full&type=illust_and_ugoira
 * @example /ajax/search/manga/miku?word=miku&order=date_d&mode=all&p=1&s_mode=s_tag_full&type=manga
 * @example /ajax/search/novels/miku?word=miku&order=date_d&mode=all&p=1&s_mode=s_tag_full&gs=0
 */
export const search = (
    type: "artworks" | "tags" | "top" | "illustrations" | "manga" | "novels",
    keyword: string,
    query?: QuerySearch,
) =>
    requestJSONAPI(`/ajax/search/${type}/${encodeURIComponent(keyword)}`, query)

type QuerySearch = {
    page: number
    mode: "all" | "safe" | "r18"
    /**
     * 按最新排序 date_d，按旧排序 date
     */
    order: string | "date_d" | "date"
    /**
     * 标签部分一致 s_tag，标签一致 s_all，标题说明文字：s_tc
     */
    s_mode?: "s_tag" | "s_tag_only" | "s_tag_full" | "s_tc"
    /**
     *  当 显示 AI 作品 开关开启时，是否隐藏 AI 作品
     */
    ai_type?: 1
    /**
     * Width less than
     */
    wlt?: string
    wgt?: string
    hlt?: string
    hgt?: string
    /**
     * 横图 0.5，纵图 -0.5，正方形 0
     */
    ratio: number | 0 | 0.5 | -0.5
    tool: string
    /**
     * @example 2011-11-11
     */
    scd: string
    ecd: string
    type?: string | "all" | "illust_and_ugoira" | "illust" | "manga" | "ugoira"
    /**
     * type="novels"
     */
    work_lang: string | "zh-cn" | "ja" | "en" | "zh-tw"
    /**
     * type="novels"
     */
    gs: 0 | 1
} & Record<string, any> // 其它为声明的参数
