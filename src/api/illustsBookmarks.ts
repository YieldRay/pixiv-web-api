import { requestJSONAPI } from "@/request";

export const illustBookmarksAdd = (data: { illust_id: number; restrict?: 0 | 1; comment?: string; tags?: string[] }) =>
    requestJSONAPI(`/ajax/illusts/bookmarks/add`, undefined, data);

export const illustsBookmarksDelete = (data: { bookmark_id: number }) =>
    requestJSONAPI(`/ajax/illusts/bookmarks/delete`, undefined, data);

export const illustsBookmarksEditRestrict = (data: {
    bookmark_ids: number[];
    bookmark_restrict: "private" | "public";
}) => requestJSONAPI(`"/ajax/illusts/bookmarks/edit_restrict"`, undefined, data);

export const illustsBookmarksAddTags = (data: { bookmark_ids: number[]; tags?: string[] }) =>
    requestJSONAPI(`/ajax/illusts/bookmarks/add_tags`, undefined, data);

export const illustsBookmarksRemove = (data: { bookmark_ids: number[] }) =>
    requestJSONAPI(`/ajax/illusts/bookmarks/remove`, undefined, data);
