<script lang="ts">
    export let title :string
    export let animate :boolean = false
</script>

<main>
  <div
    id="card"
    class:animate
  >
    {#if title}
      <div class="title">
        <h2 class="no-margin">{title}</h2>
      </div>
    {/if}
    <div class="content">
      <slot name="content" />
    </div>
    <div class="actions">
      <slot name="actions" />
    </div>
  </div>
</main>

<style lang="scss">
  @import "./src/styles/_loader.scss";
  #card {
    background-color: $light;
    border-radius: $radius;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: center;
    overflow: hidden;
    &.animate {
      animation: gelatine $durationSmall $repeatSmall;
    }
    .title {
      padding: $space-small;
      width: calc(100% - 20px);
    }
    .content {
      padding: $space-normal;
    }
    .actions {
      width: 100%;
    }
  }
</style>
