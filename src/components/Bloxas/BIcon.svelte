<script lang="ts">
    import * as icons from 'svelte-uicons'
    export let name :String = '';
    export let size :String = '20';
    export let color :string
</script>

<main>
    <div style="color: {color}">
      <svelte:component
        this={icons[name]}
        size={size}
      />
    </div>
    
</main>
