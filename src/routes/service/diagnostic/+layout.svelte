<script lang="ts">
  let {
      children
  } = $props()
</script>

<div class="diagnostic_page_wrapper">
  {@render children?.()}
</div>

<style lang="scss">
  :global {
    .diagnostic_page_wrapper * + p {
      margin-top: 16px;
    }

    .diagnostic_page_wrapper p + * {
      margin-top: 16px;
    }
  }
</style>