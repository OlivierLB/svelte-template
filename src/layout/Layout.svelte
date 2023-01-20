<script lang="ts">
  import Header from "../components/Header.svelte";
  import Modal from "../components/Modal.svelte";
  import Router from "../router/Router.svelte";
  import ModalStore from "../store/modal";
</script>

<main>
    <div>
        <Header />
        <Router />
        {#if $ModalStore.isOpen}
            <Modal />
        {/if}
    </div>
</main>


<style lang="scss">
@import "../styles/_loader.scss";
div {
  padding: $space-normal;
}
</style>
