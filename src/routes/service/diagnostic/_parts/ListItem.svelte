<script lang="ts">
  import type {Snippet} from "svelte"

  type Props = {
      children: Snippet,
      number?: number,
      title?: string
  }

  let {
      children,
      number,
      title
  } = $props()
</script>
<div>
  {#if number}
    <div class="number">{number}</div>
  {/if}
  {#if title}
    <div class="title-1">{title}</div>
  {/if}
  <div class="body-text-2">{@render children?.()}</div>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .number {
    margin-bottom: 8px;

    color: map.get(env.$color, primary);
    font-weight: 600;
    font-size: 2em;
  }

  .body-text-2 {
    margin-top: 16px;
  }
</style>