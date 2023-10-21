import { Query, requestJSONAPI } from "@/request";

/**
 * 用户所有作品id
 */
export const userProfileAll = (id: number, query?: Query) => requestJSONAPI(`/ajax/user/${id}/profile/all`, query);

/**
 * 用户最新的部分作品
 */
export const userProfileTop = (id: number, query?: Query) => requestJSONAPI(`/ajax/user/${id}/profile/top`, query);

/**
 * 获取当前用户的指定 id
 */
export const userProfileIllusts = (id: number, query?: Query<{ ids: number[] }>) =>
    requestJSONAPI(`/ajax/user/${id}/profile/illusts`, query);
