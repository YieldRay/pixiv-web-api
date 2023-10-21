import { requestJSONAPI } from "@/request";

export const novelsBookmarksAdd = (data: {}) => requestJSONAPI(`/ajax/illusts/bookmarks/add`, undefined, data);

export const novelsBookmarksDelete = (data: {}) => requestJSONAPI(`/ajax/novels/bookmarks/delete`, undefined, data);

export const novelsBookmarksEditRestrict = (data: {}) =>
    requestJSONAPI(`"/ajax/novels/bookmarks/edit_restrict"`, undefined, data);

export const novelsBookmarkAddTags = (data: {}) => requestJSONAPI(`/ajax/novels/bookmarks/add_tags`, undefined, data);

export const novelsBookmarksRemove = (data: {}) => requestJSONAPI(`/ajax/novels/bookmarks/remove`, undefined, data);
