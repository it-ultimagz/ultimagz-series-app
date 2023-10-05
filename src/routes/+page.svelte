<script lang="ts">
  import { attachTagsId, getSeriesData } from "../utils/service";
  import type { SeriesDataWithTagId } from "../types/interface";
  import SeriesSection from "../components/SeriesSection.svelte";
  import { seriesStore } from "../store/series";

  let seriesData: SeriesDataWithTagId[];

  const fetchData = async () => {
    try {
      const res = await getSeriesData();
      seriesData = await attachTagsId(res.data);
      seriesStore.set(seriesData);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
</script>

<div class="space-y-8">
  <div class="flex items-center justify-center px-[20%] py-20 text-center">
    <h1 class="font-bold text-9xl">ARTIKEL SERIES</h1>
  </div>
  <div class="flex flex-col gap-6">
    {#if seriesData}
      {#each seriesData as series}
        <SeriesSection {series} />
      {/each}
    {/if}
  </div>
</div>

<style>
</style>
