import { requestJSONAPI } from "@/request";

export const userNovelsBookmarks = (
    id: number,
    query: { tag: string; offset: number; limit: number; rest: "hide" | "show" }
) => requestJSONAPI(`/ajax/user/${id}/novels/bookmarks`, query);

export const userNovelsBookMarkTags = (id: number, query?: { lang: "zh" | string }) =>
    requestJSONAPI(`/ajax/user/${id}/novels/bookmark/tags`, query);
