<script lang="ts">
  import Header from "../components/Header.svelte";
  import Modal from "../components/Modal.svelte";
  import Router from "../router/Router.svelte";
  import ModalStore from "../store/modal";
  import SettingsStore from "../store/settings";
  import {onMount} from "svelte";
  import {mobilWidth} from '../utils/const'
  
  let width :number = 0;
  let oldWidth :number = 0;
  let height :number = 0;
  let oldHeight :number = 0;

  onMount(() => {
    let box = document.getElementById('layout')
    SettingsStore.setWidth(box.offsetWidth)
    SettingsStore.setHeight(box.offsetHeight)
  })
  
  $: if (width !== oldWidth) {
    SettingsStore.setWidth(width)
    oldWidth = width
  }
  $: if (height !== oldHeight) {
    SettingsStore.setHeight(height)
    oldHeight = height
  }
</script>

<section
  id="layout"
  bind:clientWidth={width}
  bind:clientHeight={height}
  class="{($SettingsStore.width <= mobilWidth ? 'mobil' : 'normal')}"
>
  
  <Header />
  <div id="full-page">
    <div id="content">
      <Router />
    </div>
  </div>
  {#if $ModalStore.isOpen}
    <Modal />
  {/if}
</section>


<style lang="scss">
  @import "../styles/_loader.scss";
  #layout {
    position: absolute;
    top: 0;
    left: 0;
    margin: unset;
    padding: unset;
    width: 100vw;
    height: 100vh;
    background-color: $light;
    color: $dark;
    display: flex;
    #full-page {
      width: 100vw;
      height: calc(100vh - 50px);
      overflow: auto;
      #content {
        padding: $space-small;
      }
    }
  }

  .mobil {
    flex-direction: column-reverse;
  }
  .normal {
    flex-direction: column;
  }
</style>
