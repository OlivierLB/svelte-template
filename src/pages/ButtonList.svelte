<script lang="ts">
    import { _ } from 'svelte-i18n'
    import BButton from "../components/Bloxas/BButton.svelte";
    import {onMount} from "svelte";
    let firstFocus :object;

    onMount(() => {
        firstFocus.focus()
    })
</script>

<main>
    <h1 bind:this={firstFocus} >Liste des BTN disponibles</h1>
    <div class="btn-list">
        <BButton
            text={$_('button.primary')}
        />
        <BButton
            valid
            text={$_('button.validate')}
        />
        <BButton
            error
            text={$_('button.error')}
            icon="ChessIcon"
        />
        <BButton
            cancel
            text={$_('button.cancel')}
        />
    </div>
</main>

<style lang="scss">
  @import "./src/styles/_loader.scss";
  .btn-list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: $space-normal;
  }
</style>

