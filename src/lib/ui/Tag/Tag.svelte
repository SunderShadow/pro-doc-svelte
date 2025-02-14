<script lang="ts">
    import type {Snippet} from "svelte"

    type Props = {
        children: Snippet,
        active?: boolean
    }

    const {children, active}: Props = $props()
</script>

<div class="tag" class:active>
  {@render children?.()}
</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  .tag {
    padding: 0.3rem .55rem;

    font-weight: 600;
    font-size: .875rem;

    color: map.get(env.$color, primary);

    border: 1px solid rgba(map.get(env.$color, primary), .1);
    border-radius: .5rem;

    cursor: pointer;

    transition: background-color 200ms;
    user-select: none;

    &.active,
    &:hover {
      background-color: rgba(map.get(env.$color, primary), .1);
    }
  }
</style>