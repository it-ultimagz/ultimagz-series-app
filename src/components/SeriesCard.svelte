<script lang="ts">
  import type { PostData } from "../types/interface";
  import { parseStringToHTML } from "../utils/helper";

  export let data: PostData;
</script>

<a
  href={data.link}
  class="card flex flex-col w-full md:w-[45%] lg:w-[20%] rounded-xl overflow-hidden shadow-lg grow transition-all duration-200 hover:bg-red-500 hover:text-white"
>
  <div class="card-header w-full pt-[75%] relative overflow-hidden">
    <img
      loading="lazy"
      class="absolute object-cover top-0 left-0 h-full"
      src={data.better_featured_image.source_url}
      alt={`gambar ${data.title}`}
    />
  </div>
  <div class="card-content px-6 pt-4 pb-6 flex flex-col justify-between">
    <h3 class="text-xl font-bold line-clamp-4">{parseStringToHTML(data.title.rendered)}</h3>
  </div>
</a>
