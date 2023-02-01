<script>
  import SettingsStore from "../store/settings";
  import HeaderItem from "./HeaderItem.svelte";
  import BImage from "./Bloxas/BImage.svelte";
  import logo from "../assets/unicorn.png"
  import { useNavigate } from "svelte-navigator";
  const navigate = useNavigate();
  import {mobilWidth} from '../utils/const'
</script>

<header>
  {#if $SettingsStore.width > mobilWidth}
    <div class="links">
      <div class="logo">
        <BImage
          width={40}
          src={logo}
          alt="logo"
          on:click={() => navigate('/')}
        />
      </div>
      <div class="side start">
        <HeaderItem
          to="button"
          text="header.button"
          icon="BaseballAltIcon"
        />
        <HeaderItem
          to="input"
          text="header.input"
          icon="PumpkinIcon"
        />
        <HeaderItem
          to="store"
          text="header.store"
          icon="RedoAltIcon"
        />
      </div>
      <div class="side end">
        <HeaderItem
          to="service"
          text="header.service"
          icon="ReceiptIcon"
        />
      </div>
    </div>
  {:else}
    <div class="links">
      <div class="side center">
        <HeaderItem
          to="button"
          icon="BaseballAltIcon"
        />
        <HeaderItem
          to="input"
          icon="PumpkinIcon"
        />
        <HeaderItem
          to="store"
          icon="RedoAltIcon"
        />
      </div>
      <div class="logo">
        <BImage
          width={40}
          src={logo}
          alt="logo"
          on:click={() => navigate('/')}
        />
      </div>
      <div class="side end">
        <HeaderItem
          to="service"
          icon="ReceiptIcon"
        />
      </div>
    </div>
  {/if}
</header>

<style lang="scss">
  @import "./src/styles/_loader.scss";
  header {
    height: 50px;
    .links {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      align-content: center;
      div {
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;
      }
      .side {
        width: 47%;
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
        gap: $space-small;
        padding-left: $space-small;
        padding-right: $space-small;
        &.start {
          justify-content: flex-start;
        }
        &.end {
          justify-content: flex-end;
        }
        &.center {
          justify-content: space-around;
        }
      }
      .logo {
        width: 6%;
      }
    }
  }
</style>

