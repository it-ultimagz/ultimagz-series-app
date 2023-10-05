import { seriesStore } from "../store/series";
import type { HomePageDTO, SeriesDataWithTagId } from "../types/interface";
import { getSeriesData, attachTagsId } from "../utils/service";

export const load = async (): Promise<HomePageDTO> => {
    try {
        const seriesData = await fetchSeriesData();
        seriesStore.set(seriesData);
        const data: HomePageDTO = { seriesData };
        return data;
    } catch (err) {
        console.log(err);
    }
    const data: HomePageDTO = { seriesData: [] };
    return data;
};

const fetchSeriesData = async (): Promise<SeriesDataWithTagId[]> => {
    const res = await getSeriesData();
    const seriesData = await attachTagsId(res.data);
    return seriesData;
};
