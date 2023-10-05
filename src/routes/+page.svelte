<script lang="ts">
    import { attachTagsId, getSeriesData } from '../utils/service'
    import type { HomePageDTO, SeriesDataWithTagId } from '../types/interface'
    import SeriesSection from '../components/SeriesSection.svelte'
    import { seriesStore } from '../store/series'
    import Typewriter from 'svelte-typewriter'

    export let data: HomePageDTO
</script>

<svelte:head>
    <title>Artikel Series by ULTIMAGZ</title>
</svelte:head>

<div class="space-y-8">
    <div class="relative pt-[40%]">
        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center px-[20%] text-center">
            <Typewriter interval={200} mode="loopRandom" cursor={false}>
                <h1
                    class="font-black text-5xl md:text-8xl xl:text-9xl text-red-600 bg-gradient-to-br from-red-500 to-red-800 bg-clip-text text-transparent"
                >
                    ARTIKEL SERIES
                </h1>
            </Typewriter>
        </div>
    </div>
    <div class="flex flex-col gap-6">
        {#each data.seriesData as series}
            <SeriesSection {series} />
        {/each}
    </div>
</div>
