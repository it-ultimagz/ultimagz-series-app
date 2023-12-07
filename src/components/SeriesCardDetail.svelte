<script lang="ts">
    import './SeriesCardDetail.scss'
    import type { PostData } from '../types/interface'
    import { parseStringToHTML } from '../utils/helper'

    export let showDetail = true
    export let data: PostData

    const postTitle = parseStringToHTML(data.title.rendered)
    console.log(postTitle)
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<a
    href={data.link}
    class={`card flex flex-col w-full md:w-[calc(50%-20px)] gap-2 rounded-xl shadow-md overflow-hidden transition-all duration-1000`}
>
    <div class="img-wrapper pt-[56.25%] relative overflow-hidden">
        <img
            loading="lazy"
            class="absolute top-0 left-0 object-cover h-full w-full"
            src={data.better_featured_image.source_url}
            alt={`image of ${postTitle}`}
        />
    </div>
    <div class="post px-6 pt-4 pb-6 space-y-2">
        <h3 class="post-title font-bold text-2xl">{postTitle}</h3>
        {#if showDetail}
            <p class="post-desc line-clamp-5">
                {parseStringToHTML(data.excerpt.rendered.replace(/\[&hellip;\]/g, ''))}
            </p>
        {/if}
    </div>
    
</a>
