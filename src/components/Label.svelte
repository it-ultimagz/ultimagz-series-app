<script lang="ts">
  export let variant: "success" | "danger" | "warning" = "success";
  const variants = {
    success: "bg-green-500 text-white",
    danger: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-white",
  };
</script>

<span class={`p-2 rounded ${variants[variant]}`}>
  <slot />
</span>
