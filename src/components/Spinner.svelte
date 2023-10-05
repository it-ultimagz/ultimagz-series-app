<script lang="ts">
    export let size: 'sm' | 'md' | 'lg' = 'md'
    const sizeTable = {
        sm: 'w-5 h-5 border',
        md: 'w-10 h-10 border-4',
        lg: 'w-20 h-20 border-4',
    }
</script>

<div class={`spinner border-red-500 ${sizeTable[size]}`} />

<style>
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .spinner {
        border-top: 4px solid transparent;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
</style>
