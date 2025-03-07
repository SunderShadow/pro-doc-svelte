<script lang="ts">
    import type {Snippet} from "svelte"

    type Props = {
      children: Snippet,
      isActive?: boolean,
      isDisabled?: boolean,
      onclick?: Function,
    }

    const {
      children,
      isActive,
      isDisabled,
      onclick,
    }: Props = $props()
</script>

<button class="tag" class:active={isActive} class:disabled={isDisabled}
        {onclick}>{@render children?.()}
</button>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  .tag {
    -webkit-tap-highlight-color: transparent;
    padding: 0.3rem .55rem;

    font-weight: 600;
    font-size: .875rem;

    color: map.get(env.$color, primary);

    border: 1px solid rgba(map.get(env.$color, primary), .1);
    border-radius: .5rem;

    background: none;
    cursor: pointer;

    transition: background-color 200ms;
    user-select: none;

    &:hover {
      background-color: rgba(map.get(env.$color, primary), .1);
    }

    &.active {
      background-color: map.get(env.$color, primary);

      color: map.get(env.$bg-color, primary);
    }

    &.disabled {
      color: rgba(map.get(env.$color, primary), 0.3);
      cursor: default;
      background-color: unset;
    }
  }
</style>