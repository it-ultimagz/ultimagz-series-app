<script lang="ts">
  import SeriesCardDetail from "../../components/SeriesCardDetail.svelte";
  import type { SeriesPageDTO } from "../../types/interface";

  export let data: SeriesPageDTO;
  console.log(data);
</script>

<div>
  <h1 class="font-bold text-4xl">{data.currentSeries.title}</h1>
  <div class="flex flex-wrap gap-8 mt-8">
    {#each data.currentSeriesPosts as post}
      <SeriesCardDetail data={post} />
    {/each}
  </div>
</div>
