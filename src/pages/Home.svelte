<script lang="ts">
    import { _ } from 'svelte-i18n'
</script>

<main>
    <h1>
        {$_('text.home.name')}
    </h1>
    <h2>
        {$_('text.home.tagline')}
    </h2>
    <h3>
        {$_('text.home.secret')}
    </h3>
    <p>
        {$_('text.home.good')}
    </p>
</main>

<style lang="scss">
  @import "./src/styles/_loader.scss";
</style>
