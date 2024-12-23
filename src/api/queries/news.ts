import Quranara from "../clients/Quranara";

import { news } from "../cache/tags";

import { PaginationQuerySchemaType } from "@/validators/pagination";

import { convertToQueryString } from "@/libs/funcs";

import { Response, Pagination } from "@/types/response.types";
import { News } from "@/types/news.types";

type NewsQueriesWithIdParams = { newsId: string };

export function getAllShownNews(): Promise<Response<{ news: News[] }>> {
    return Quranara.get("/news", {
        cache: "force-cache",
        next: {
            tags: [news.default],
        },
    });
}

export function getAllNews(query: PaginationQuerySchemaType): Promise<Response<{ news: News[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/news/all?${queryString}`;

    return Quranara.get(url);
}

export function getNews(params: NewsQueriesWithIdParams): Promise<Response<{ news: News }>> {
    const url = `/news/${params.newsId}`;

    return Quranara.get(url);
}
