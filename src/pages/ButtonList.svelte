<script lang="ts">
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
            value="Primary"
        />
        <BButton
            valid
            value="Valide"
        />
        <BButton
            error
            value="Error"
            icon="ChessIcon"
        />
        <BButton
            cancel
            value="Cancel"
        />
    </div>
</main>

<style lang="scss">
  @import "./src/styles/_loader.scss";
  .btn-list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: $space-normal;
  }
</style>

