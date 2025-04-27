<script lang="ts">
  let {
      children
  } = $props()
</script>

<div class="toast_list">
  {@render children?.()}
</div>

<style lang="scss">
  .toast_list {
    display: flex;
    flex-direction: column;
    gap: 8px;

    position: fixed;
    top: 20px;
    left: 50%;
    transform: translate(-50%);
    z-index: 1000;

    min-width: min(300px, 100%);
  }
</style>