import { get } from 'svelte/store'
import { seriesStore } from '../../../store/series.js'
import type { SeriesDataWithTagId, SeriesPageDTO } from '../../../types/interface.js'
import { createSlug } from '../../../utils/helper.js'
import { getSeriesData, attachTagsId, getPostsByTagId } from '../../../utils/service.js'
import { error } from '@sveltejs/kit'

export const load = async ({ params }) => {
    const currSeriesPromise = new Promise(async (res, rej) => {
        const seriesArr = get(seriesStore)
        let tempData = [...seriesArr]
        if (seriesArr.length == 0) {
            try {
                tempData = await _fetchSeriesData()
                seriesStore.set(tempData)
            } catch (err) {
                console.log(err)
            }
        }
        const currSeries = tempData.find((series) => createSlug(series.title) === params.slug)
        if (currSeries) {
            res(currSeries)
        }
        rej('Series not found')
    })

    try {
        const currSeries = (await currSeriesPromise) as SeriesDataWithTagId
        const currSeriesPosts = await getPostsByTagId(currSeries.tag_id, 50)
        const data: SeriesPageDTO = { currentSeries: currSeries, currentSeriesPosts: currSeriesPosts }

        return data
    } catch (err: any) {
        throw error(404, err.message)
    }
}

export const _fetchSeriesData = async () => {
    const res = await getSeriesData()
    const seriesData = await attachTagsId(res.data)
    return seriesData
}
