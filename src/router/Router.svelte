<script>
  import {Route, Router} from "svelte-navigator";
  import Home from "../pages/Home.svelte";
  import ButtonList from "../pages/ButtonList.svelte";
  import InputList from "../pages/InputList.svelte";
  import Store from "../pages/Store.svelte";
</script>

<Router class="router">
    <Route path="">
        <Home />
    </Route>
    <Route path="button">
        <ButtonList />
    </Route>
    <Route path="input">
        <InputList />
    </Route>
    <Route path="store">
        <Store />
    </Route>
</Router>
