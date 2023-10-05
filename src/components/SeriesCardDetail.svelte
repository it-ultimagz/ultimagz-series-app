<script lang="ts">
  import type { PostData } from "../types/interface";
  import { parseStringToHTML } from "../utils/helper";
  import Button from "./Button.svelte";

  export let data: PostData;
  const postTitle = parseStringToHTML(data.title.rendered);
</script>

<div class="flex flex-col w-[calc(50%-20px)] gap-2 rounded-xl shadow-xl overflow-hidden">
  <div class="pt-[56.25%] relative">
    <img
      loading="lazy"
      class="absolute top-0 left-0 object-cover h-full w-full"
      src={data.better_featured_image.source_url}
      alt={`image of ${postTitle}`}
    />
  </div>
  <div class="px-6 pt-4 pb-6">
    <h3 class="font-bold text-2xl">{postTitle}</h3>
    <p class="line-clamp-5">{parseStringToHTML(data.excerpt.rendered.replace(/\[&hellip;\]/g, ""))}</p>
  </div>
</div>
