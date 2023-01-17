<script>
  import { Link, Router } from "svelte-navigator";
</script>

<header>
    <h1>Header</h1>
    <Router>
        <Link to="">Home</Link>
        <Link to="button">Button</Link>
        <Link to="input">Input</Link>
    </Router>
</header>
<style lang="scss">
  @import "./src/styles/_loader.scss";
</style>

