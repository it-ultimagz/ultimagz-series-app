<script lang="ts">
  import SeriesCardDetail from "../../components/SeriesCardDetail.svelte";
  import type { SeriesPageDTO } from "../../types/interface";

  export let data: SeriesPageDTO;
</script>

<svelte:head>
  <title>{data.currentSeries.title} | Artikel Series by ULTIMAGZ</title>
</svelte:head>

<div>
  <h1 class="font-bold text-4xl">{data.currentSeries.title}</h1>
  <div class="flex flex-wrap gap-8 mt-8">
    {#each data.currentSeriesPosts as post}
      <SeriesCardDetail data={post} />
    {/each}
  </div>
</div>
