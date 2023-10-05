<script>
  import { goto } from "$app/navigation";
  import Button from "../components/Button.svelte";

  const handleBackToHome = () => {
    goto("/", {
      replaceState: true,
    });
  };
</script>

<div
  class="flex flex-col justify-center items-center space-y-4 h-[calc(100vh-492px)] md:h-[calc(100vh-376px)] text-center"
>
  <div class="w-full md:w-[90%] xl:w-[70%]">
    <div class="pt-[56.25%] relative overflow-hidden rounded-xl">
      <img
        class="absolute top-0 left-0 object-cover h-full w-full"
        loading="lazy"
        src="https://media.tenor.com/PPOe9MawAvsAAAAC/404-not-found.gif"
        alt="404 Not Found GIF"
      />
    </div>
  </div>
  <h3 class="text-xl">Oops... Halaman yang kamu cari tidak ditemukan.</h3>
  <Button color="custom" class="w-max px-5 bg-slate-600 hover:bg-slate-700 text-white" on:click={handleBackToHome}
    >Kembali ke halaman utama</Button
  >
</div>
