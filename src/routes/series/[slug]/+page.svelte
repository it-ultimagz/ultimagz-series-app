<script lang="ts">
    import Fa from 'svelte-fa'
    import SeriesCardDetail from '../../../components/SeriesCardDetail.svelte'
    import Spinner from '../../../components/Spinner.svelte'
    import type { SeriesPageDTO } from '../../../types/interface'
    import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
    import { goto } from '$app/navigation'

    export let data: SeriesPageDTO
    const viewsPerLoad = 6

    if (data?.error) {
        // goto("/404", {
        //   replaceState: true,
        // });
    }

    $: dataDisplayed = data.currentSeriesPosts.slice(0, viewsPerLoad)
    $: isLoading = false

    const loadMoreData = () => {
        dataDisplayed = data.currentSeriesPosts.slice(0, dataDisplayed.length + viewsPerLoad)
    }

    window.addEventListener('scroll', () => {
        if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight - 160 &&
            !isLoading &&
            dataDisplayed.length < data.currentSeriesPosts.length
        ) {
            isLoading = true
            setTimeout(() => {
                loadMoreData()
                isLoading = false
            }, 1000)
        }
    })

    const handleBackButton = () => {
        goto('/', {
            replaceState: true,
        })
    }
</script>

<svelte:head>
    <title>{data.currentSeries.title} | Artikel Series by ULTIMAGZ</title>
</svelte:head>

<div class="space-y-4">
    <button on:click={handleBackButton} class="flex items-center gap-3 text-red-600 text-lg">
        <Fa icon={faArrowLeft} />
        <span>kembali</span>
    </button>
    <div class="py-8 text-center space-y-4">
        <h3 class="text-4xl">Artikel Series Edisi</h3>
        <h1 class="font-bold text-6xl">{data.currentSeries.title}</h1>
        <hr class="border-t-2 border-slate-300" />
    </div>
    <div class="flex flex-wrap gap-8 mt-8">
        {#each dataDisplayed as post}
            <SeriesCardDetail data={post} />
        {/each}
    </div>
    {#if isLoading}
        <div class="mt-12 w-full flex justify-center">
            <Spinner />
        </div>
    {/if}
</div>
