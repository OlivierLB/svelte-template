<script lang="ts">
import Layout from "./layout/Layout.svelte";

import {
  register,
  t,
  init,
  getLocaleFromNavigator,
  isLoading,
} from "svelte-i18n";

register("fr", () => import("./lang/fr.json"));

init({ initialLocale: getLocaleFromNavigator(), fallbackLocale: "fr" });
</script>

<main>
  {#if $isLoading}
    Please wait...
  {:else}
    <Layout />
  {/if}
</main>


<style lang="scss">
  @import "./styles/_loader.scss";
  main {
    margin: unset;
    width: 100vw;
    height: 100vh;
    background-color: $light;
    color: $dark;
  }
</style>
