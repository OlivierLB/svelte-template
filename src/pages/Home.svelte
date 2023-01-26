<script lang="ts">
  import { _ } from 'svelte-i18n'
  import ModalStore from "../store/modal";
  import {btnType, modalClasses} from "../utils/enums";

  function openModal () {
    ModalStore.openModal({
      type: 'example',
      customClass: modalClasses.small,
      title: 'titre',
      actions: [
        {
          label: 'cancel',
          type: btnType.cancel,
          action: cancel
        },
        {
          label: 'validate',
          type: btnType.valid,
          action: valid
        }
      ]
    })
  }

  function valid () {
    alert('VALID')
    cancel()
  }
  function cancel () {
    ModalStore.closeModal()
  }
</script>

<main>
  <h1>
    {$_('text.home.name')}
  </h1>
  <h2>
    {$_('text.home.tagline')}
  </h2>
  <h3>
    {$_('text.home.secret')}
  </h3>
  <p>
    {$_('text.home.good')}
    
    <a
      on:click={openModal}
    >
      { $_('header.modal') }
    </a>
  </p>
</main>

<style lang="scss">
  @import "./src/styles/_loader.scss";
</style>
