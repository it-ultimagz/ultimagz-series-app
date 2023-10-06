<script lang="ts">
    import "../app.scss";
    import Fa from "svelte-fa";
    import { faBars, faBook, faBookmark, faEarthAmericas, faGlobe } from "@fortawesome/free-solid-svg-icons";
    import { faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

    let header: HTMLElement;
    let isListenerAdded = false;

    $: if (!isListenerAdded) {
        document.addEventListener("scroll", () => {
            const classList = ["bg-white", "shadow-md", "border-b-2", "border-red-600"];
            if (window.scrollY > 0 && header) {
                header.classList.add(...classList);
            } else if (header) {
                header.classList.remove(...classList);
            }
        });
        isListenerAdded = true;
    }
</script>

<svelte:head>
    <meta name="description" content="Lets read the series of special article from ULTIMAGZ" />
    <meta
        name="keywords"
        content="ultimagz, series, artikel, artikel series, ultimagz series, ultimagz artikel series"
    />
    <meta name="og:title" content="Artikel Series by ULTIMAGZ" />
    <meta name="og:description" content="Lets read the series of special article from ULTIMAGZ" />
    <meta name="og:image" content="https://ultimagz.com/wp-content/uploads/cropped-favico-180x180.jpg" />
    <meta name="og:url" content="https://series.ultimagz.com" />
    <meta name="og:site_name" content="Artikel Series by ULTIMAGZ" />
    <meta name="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Artikel Series by ULTIMAGZ" />
    <meta name="twitter:description" content="Lets read the series of special article from ULTIMAGZ" />
    <meta name="twitter:image" content="https://series.ultimagz.com/ultimagz-series-og.png" />
    <meta name="twitter:url" content="https://ultimagz.com/series" />
    <meta name="twitter:site" content="@ultimagz" />
    <meta name="twitter:creator" content="@ultimagz" />
</svelte:head>

<header class="fixed top-0 left-0 w-full z-50 transition-all duration-100" bind:this={header}>
    <nav class="desktop mx-auto container flex justify-center md:justify-between py-5 items-center">
        <a href="/">
            <h1
                class="brand font-black text-3xl bg-gradient-to-br from-red-500 to-red-800 bg-clip-text text-transparent"
            >
                ULTIMAGZ
            </h1>
        </a>
        <ul class="hidden md:flex list-none gap-4">
            <li><a href="https://ultimagz.com" target="_blank">MAGZ</a></li>
            <li><a href="https://fokus.ultimagz.com" target="_blank">FOKUS</a></li>
            <li><a href="https://pdf.ultimagz.com" target="_blank">PDF</a></li>
        </ul>
    </nav>
    <nav class="mobile mx-auto w-screen container fixed bottom-[20px] left-0 block md:hidden">
        <ul class="bg-white w-full h-full py-3 border-2 border-slate-400 rounded-xl flex justify-evenly">
            <li>
                <a href="https://ultimagz.com" target="_blank">
                    <Fa icon={faEarthAmericas} class="text-red-600 text-xl" />
                    <span class="text-xs">MAGZ</span>
                </a>
            </li>
            <li>
                <a href="https://fokus.ultimagz.com" target="_blank">
                    <Fa icon={faBookmark} class="text-red-600 text-xl" />
                    <span class="text-xs">FOKUS</span>
                </a>
            </li>
            <li>
                <a href="https://pdf.ultimagz.com" target="_blank">
                    <Fa icon={faBook} class="text-red-600 text-xl" />
                    <span class="text-xs">PDF</span>
                </a>
            </li>
        </ul>
    </nav>
</header>

<main class="mx-auto container pt-[80px] pb-12">
    <slot />
</main>

<footer class="bg-slate-800">
    <div
        class="mx-auto container pt-20 pb-36 md:py-20 text-white flex justify-between items-center flex-col md:flex-row text-center md:text-left"
    >
        <div class="space-y-2">
            <a href="https://ultimagz.com">
                <h1
                    class="text-4xl font-black bg-gradient-to-br from-red-500 to-red-800 bg-clip-text hover:text-transparent transition-all duration-100"
                >
                    ULTIMAGZ
                </h1>
            </a>
            <p class="text-md">&copy; 2023 ULTIMAGZ. All rights reserved.</p>
        </div>
        <div class="space-y-2">
            <h3>Contact Us On</h3>
            <ul class="flex gap-4">
                <li>
                    <a href="https://ultimagz.com">
                        <Fa icon={faGlobe} class="text-white text-xl" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/ultimagz">
                        <Fa icon={faInstagram} class="text-white text-xl" />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCu-eKnze0d6gbX9cRMp9SRA">
                        <Fa icon={faYoutube} class="text-white text-xl" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/ultimagz">
                        <Fa icon={faTwitter} class="text-white text-xl" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</footer>
