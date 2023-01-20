<script lang="ts">
    import { fade } from 'svelte/transition';
    import ModalStore from "../store/modal";
    import BCard from "./Bloxas/BCard.svelte";
    import BButton from "./Bloxas/BButton.svelte";
    import {btnType} from "../utils/enums";
    import { _ } from 'svelte-i18n'

    const close = e => {
        if (e.target.id === 'modal-loader') {
            ModalStore.closeModal()
        }
    }

    import ModalExample from "./Modal/ModalExample.svelte";
    const modalList = [
        {name: 'example', component: ModalExample}
    ]
</script>

<main>
    <section
        id="modal-loader"
        on:click={close}
        in:fade
        out:fade
    >
        {#if $ModalStore.isOpen}
            <BCard
              title={$ModalStore.title}
              animate
            >
                <div
                  class={$ModalStore.customClass}
                  slot="content"
                >
                    <svelte:component
                      this={modalList.find(e => e.name === $ModalStore.type).component}
                    />
                </div>
                <div class="actions" slot="actions">
                    {#each $ModalStore.actions as action}
                        <BButton
                          full
                          valid={action.type === btnType.valid}
                          error={action.type === btnType.error}
                          cancel={action.type === btnType.cancel}
                          text={$_(`button.${action.label}`)}
                          on:click={action.action}
                        />
                    {/each}
                </div>
            </BCard>
        {/if}
    </section>

</main>

<style lang="scss">
    @import "./src/styles/_loader.scss";
    #modal-loader {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
    }
    .actions {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        align-items: center;
    }

    .small {
        width: 20%;
        min-width: 380px;
    }
    .medium {
        width: 50%;
        min-width: 950px;
        @media (max-width: 480px) {
            width: calc(100vw - 40px);
            min-width: unset;
            position: absolute;
            top: 20px;
            left: 20px;
        }
    }
    .big {
        width: 80%;
        @media (max-width: 480px) {
            width: calc(100vw - 40px);
            min-width: unset;
            position: absolute;
            top: 20px;
            left: 20px;
        }
    }
    .invisible {
        width: min-content;
        height: min-content;
        background-color: unset;
        border: unset;
        box-shadow: unset;
    }

</style>
