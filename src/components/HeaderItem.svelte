<script lang="ts">
  import { _ } from 'svelte-i18n'
  import BIcon from "./Bloxas/BIcon.svelte";
  import {getColor} from "../utils/fonctions.js";
  import { useNavigate } from "svelte-navigator";
  const navigate = useNavigate();
  export let to :String
  export let text :String = ''
  export let icon :String = ''
</script>
<section
  class="headerItem"
  style="color: {getColor('primary')}"
  on:click={() => navigate(to)}
>
  <BIcon
    name={icon}
    primary
    color={getColor('primary')}
  />
  { $_(text) }
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
    cursor: pointer;
  }
</style>