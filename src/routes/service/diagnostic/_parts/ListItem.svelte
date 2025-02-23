<script lang="ts">
  import type {Snippet} from "svelte"

  type Props = {
      children: Snippet,
      number: number
  }

  let {
      children,
      number
  } = $props()
</script>
<div>
  <div class="number">{number}</div>
  <div class="body-text-2">{@render children?.()}</div>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .number {
    margin-bottom: 4px;

    color: map.get(env.$color, primary);
    font-weight: 600;
    font-size: 2em;
  }
</style>