<script lang="ts">
  import Header from "./components/Header.svelte";
  import Router from "./router/Router.svelte";
</script>

<main>
  <div>
    <Header />
    <Router />
  </div>
</main>


<style lang="scss">
  @import "./styles/_loader.scss";
  main {
    margin: unset;
    width: 100vw;
    height: 100vh;
    background-color: $light;
    color: $dark;
    div {
      padding: $space-normal;
    }
  }
</style>
