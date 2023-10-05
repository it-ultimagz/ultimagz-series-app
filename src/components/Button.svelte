<script lang="ts">
    type Type = 'button' | 'link'
    type Color = 'primary' | 'danger' | 'warning' | 'success' | 'custom'
    type Variant = 'solid' | 'outline' | 'ghost'

    export let type: Type = 'button'
    export let color: Color = 'primary'
    export let variant: Variant = 'solid'
    const { class: classProps, ...props } = $$restProps

    const colors = {
        primary: 'bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400',
        danger: 'bg-red-500 hover:bg-red-600 disabled:bg-red-400',
        warning: 'bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-400',
        success: 'bg-green-500 hover:bg-green-600 disabled:bg-green-400',
        custom: '',
    }

    const variants = {
        solid: '',
        outline: '',
        ghost: '',
    }
</script>

{#if type === 'link'}
    <a
        href={props.href || '/'}
        class={`rounded-lg p-3 w-full transition duration-100 text-center ${colors[color]} ${variants[variant]} ${classProps}`}
        {...props}
    >
        <slot />
    </a>
{:else}
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <button
        on:click
        on:mouseover
        on:mouseenter
        on:mouseleave
        class={`rounded-lg p-3 w-full transition duration-100 ${colors[color]} ${variants[variant]} ${classProps}`}
        {...props}
    >
        <slot />
    </button>
{/if}
