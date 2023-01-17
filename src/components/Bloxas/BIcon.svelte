<script lang="ts">
    import * as icons from 'svelte-uicons'
    export let name :String = '';
    export let size :String = '20';
</script>

<main>
    <svelte:component
        this={icons[name]}
        size={size}
    />
</main>
