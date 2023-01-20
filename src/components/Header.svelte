<script>
  import { _ } from 'svelte-i18n'
  import { Link, Router } from "svelte-navigator";
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

<header>
  <h1>{ $_('header.title') } </h1>
  <Router>
    <Link to="">{ $_('header.home') }</Link>
    <Link to="button">{ $_('header.button') }</Link>
    <Link to="input">{ $_('header.input') }</Link>
    <Link to="store">{ $_('header.store') }</Link>
    <a
      on:click={openModal}
    >
      { $_('header.modal') }
    </a>
    <Link to="service">{ $_('header.service') }</Link>
  </Router>
</header>
<style lang="scss">
  @import "./src/styles/_loader.scss";
</style>

