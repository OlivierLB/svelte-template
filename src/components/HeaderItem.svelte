<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { Link } from "svelte-navigator";
  import BIcon from "./Bloxas/BIcon.svelte";
  export let to :String
  export let text :String = ''
  export let icon :String = ''
</script>
<section class="headerItem">
  <BIcon
    name={icon}
  />
  <Link to={to}>{ $_(text) }</Link>
</section>

<style lang="scss">
  @import "./src/styles/_loader.scss";
  .headerItem {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: $space-small;
  }
</style>