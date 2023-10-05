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

<section class="space-y-8">
  <h1 class="font-bold text-3xl leading-normal">
    {series.title}
    {#if series.is_new}
      <Label variant="success">NEW</Label>
    {/if}
  </h1>
  <div class="flex flex-wrap gap-8">
    {#if posts}
      {#each posts as post}
        <SeriesCard data={post} />
      {/each}
    {/if}
  </div>
  <div class="flex justify-end">
    <Button
      type="link"
      href={`/series/${createSlug(series.title)}`}
      color="custom"
      class="w-full md:w-max px-10 bg-transparent text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white font-bold"
      >Baca Lainnya</Button
    >
  </div>
</section>
