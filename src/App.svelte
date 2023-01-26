<script lang="ts">
import Layout from "./layout/Layout.svelte";
import { Router } from "svelte-navigator";

import {
  register,
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
    <Router>
      <Layout />
    </Router>
  {/if}
</main>


<style lang="scss">
</style>
