<script>
  import { _ } from 'svelte-i18n'
  import { Link, Router } from "svelte-navigator";
  import ModalStore from "../store/modal";


  function openModal () {
    ModalStore.openModal({
      type: 'coucou',
      customClass: 'salut',
      title: 'titre'
    })
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
    </Router>
</header>
<style lang="scss">
  @import "./src/styles/_loader.scss";
</style>

