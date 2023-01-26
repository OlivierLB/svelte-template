<script lang="ts">
  import { onMount } from 'svelte'
  import { _ } from 'svelte-i18n'
  import {createEventDispatcher} from "svelte";

  const dispatch = createEventDispatcher();
  export let src :String;
  export let width :Number;
  export let alt :String = 'default'
  
  let loaded :Boolean = false;
  let failed  :Boolean = false;
  let loading :Boolean = false;
  
  onMount(() => {
    const img = new Image();
    img.src = src;
    loading = true;
    
    img.onload = () => {
      loading = false;
      loaded = true;
    };
    img.onerror = () => {
      loading = false;
      failed = true;
    };
  })

  function click() {
    dispatch('click')
  }
</script>

{#if loaded}
  <img
    {src}
    width={width}
    height={width}
    alt={$_(`image.${alt}`)}
    on:click={click}
  />
{:else if failed}
  <img
    width={width}
    height={width}
    src="https://icon-library.com/images/not-found-icon/not-found-icon-20.jpg"
    alt={$_('image.not-found')}
  />
{:else if loading}
  <img
    width={width}
    height={width}
    src="https://c.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif"
    alt={$_('image.loading')}
  />
{/if}
