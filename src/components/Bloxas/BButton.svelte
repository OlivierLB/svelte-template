<script lang="ts">
    import BIcon from "./BIcon.svelte";
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();

    export let valid :Boolean = false;
    export let error :Boolean = false;
    export let cancel :Boolean = false;
    export let full :Boolean = false;
    export let text :String;
    export let icon :String = '';

    function click() {
        dispatch('click')
    }
</script>

<main class="full">
    <div
        class="button"
        class:valid
        class:error
        class:cancel
        class:full
        on:click={click}
    >
        {#if icon.length > 0}
            <BIcon
                name={icon}
            />
        {/if}
        {text}
    </div>
</main>
<style lang="scss">
  @import "../../styles/loader";
  .full {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-content: center;
      align-items: center;
      width: 100%;
  }
</style>
