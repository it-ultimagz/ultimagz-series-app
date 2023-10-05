<script lang="ts">
  import "../app.scss";
  let header: HTMLElement;

  document.addEventListener("scroll", () => {
    const classList = ["bg-white", "shadow-md", "border-b-2", "border-red-600"];
    if (window.scrollY > 0) {
      header.classList.add(...classList);
    } else {
      header.classList.remove(...classList);
    }
  });
</script>

<header class="fixed top-0 left-0 w-full z-50 transition-all duration-100" bind:this={header}>
  <nav class="mx-auto container flex justify-between py-5">
    <a href="/">
      <h1 class="font-bold text-2xl">ULTIMAGZ</h1>
    </a>
    <ul class="decoration-none flex gap-4">
      <li><a class="nav-item" href="https://ultimagz.com" target="_blank">MAGZ</a></li>
      <li><a class="nav-item" href="https://fokus.ultimagz.com" target="_blank">FOKUS</a></li>
      <li><a class="nav-item" href="https://pdf.ultimagz.com" target="_blank">PDF</a></li>
    </ul>
  </nav>
</header>

<main class="mx-auto container pt-[80px] pb-12">
  <slot />
</main>

<footer class="bg-slate-800">
  <div class="mx-auto container py-10 text-white">
    <div>
      <h1 class="text-3xl font-bold">ULTIMAGZ</h1>
      <p class="text-md">&copy; 2023 ULTIMAGZ. All rights reserved.</p>
    </div>
  </div>
</footer>
