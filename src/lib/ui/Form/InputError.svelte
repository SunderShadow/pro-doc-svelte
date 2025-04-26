<script lang="ts">
  let {
      message
  } = $props()

  let visibleMessage = $state('_')
  let visible = $state(false)

  $effect(() => {
      if (message) {
          visible = true
          visibleMessage = message
      } else {
          visible = false
      }
  })
</script>

<div class="error" class:visible>
  {visibleMessage}
</div>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .error {
    color: map.get(env.$color, 'error');

    transition: opacity 300ms;

    &:not(.visible) {
      opacity: 0;
    }
  }
</style>