<script lang="ts">
    import BIcon from "./BIcon.svelte";
    export let valid :Boolean = false;
    export let error :Boolean = false;
    export let cancel :Boolean = false;
    export let value :String;
    export let icon :String = '';

</script>

<main>
    <div
        class="button"
        class:valid
        class:error
        class:cancel
    >
        {#if icon.length > 0}
            <BIcon
                name={icon}
            />
        {/if}
        {value}
    </div>
</main>
<style lang="scss">
  @import "../../styles/loader";
</style>
