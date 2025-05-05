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
    margin-bottom: 4px;

    color: map.get(env.$color, primary);
    font-weight: 600;
    font-size: 2em;

    line-height: 1em;
  }

  .title-1 {
    margin-top: 8px;
    margin-bottom: 16px;
  }

  @media (max-width: map.get(env.$screen-size, tablet)) {
    .title-1 {
      font-size: 18px;
    }
  }
</style>