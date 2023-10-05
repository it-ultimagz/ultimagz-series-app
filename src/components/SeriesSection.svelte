<script lang="ts">
  import { onMount } from "svelte";
  import type { PostData, SeriesDataWithTagId } from "../types/interface";
  import { getPostsByTagId } from "../utils/service";
  import Label from "./Label.svelte";
  import SeriesCard from "./SeriesCard.svelte";
  import Button from "./Button.svelte";
  import { createSlug } from "../utils/helper";

  export let series: SeriesDataWithTagId;
  let posts: PostData[];

  const fetchPosts = async (tagId: number) => {
    try {
      const res = await getPostsByTagId(tagId, 4);
      posts = res;
    } catch (error) {
      console.log(error);
    }
  };

  fetchPosts(series.tag_id);
</script>

<section class="space-y-4">
  <h1 class="font-bold text-3xl">
    {series.title}
    {#if series.is_new}
      <Label variant="success">NEW</Label>
    {/if}
  </h1>
  <div class="mt-8 flex flex-wrap gap-8">
    {#if posts}
      {#each posts as post}
        <SeriesCard data={post} />
      {/each}
    {/if}
  </div>
  <div class="flex justify-end">
    <Button type="link" href={`/${createSlug(series.title)}`} class="w-max px-10">Baca Lainnya</Button>
  </div>
</section>
