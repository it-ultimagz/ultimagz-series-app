import axios from "axios";
import type { PostData, SeriesData, SeriesDataWithTagId, TagData } from "../types/interface";

const API_URL = "https://ultimagz.com/wp-json/wp/v2";

export const getSeriesData = async () => {
    const res = await axios.get("/data.json");
    return res.data;
};

export const attachTagsId = async (seriesData: SeriesData[]) => {
    const seriesTagParam = seriesData.map((series) => series.tag).join(",");

    // get tags data from API
    const res = await axios.get(`${API_URL}/tags?slug=${seriesTagParam}`);
    const tagsData: TagData[] = res.data;
    const newSeriesData = seriesData.map((series) => {
        const tag = tagsData.find((tag) => tag.slug === series.tag);
        return {
            ...series,
            tag_id: tag?.id,
        };
    });
    return newSeriesData as SeriesDataWithTagId[];
};

export const getPostsByTagId = async (id: number, amount: number = 10) => {
    if (amount > 50) throw new Error("Maximum amount is 50");
    const res = await axios.get(`${API_URL}/posts?tags=${id}&per_page=${amount}`);
    return res.data as PostData[];
};