import { seriesStore } from "../store/series";
import { getSeriesData, attachTagsId } from "../utils/service";

export const load = async () => {
    try {
        const seriesData = await fetchSeriesData();
        seriesStore.set(seriesData);
        const data = { seriesData };

        return data;
    } catch (err) {
        console.log(err);
    }
};

const fetchSeriesData = async () => {
    const res = await getSeriesData();
    const seriesData = await attachTagsId(res.data);
    return seriesData;
};
