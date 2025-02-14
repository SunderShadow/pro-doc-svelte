<script lang="ts">
  import type {Snippet} from "svelte"
  import type {IconType, IconSize} from "$ui-kit/types"

  type Props = {
      children: Snippet,
      type: IconType,
      size: IconSize
  }

  let {
      children,
      type = 'default',
      size = 'md'
  }: Props = $props()
</script>

<div
    class="svg-icon-container"
    class:primary={type === 'primary'}
    class:secondary={type === 'secondary'}
    class:sm={size === 'sm'}
    class:md={size === 'md'}
    class:lg={size === 'lg'}
>
  {@render children?.()}
</div>

<style lang="scss">
@use "./env";
  :global {
    .svg-icon-container {
      display: flex;

      width: var(--size);
      height: var(--size);

      --size: #{env.$size-md};
      --color: #{env.$color-default};

      fill:   var(--color);
      stroke: var(--color);

      svg {
        flex-grow: 1;
        transition-property: stroke, fill;
        transition-duration: 200ms;
      }

      // Size
      &.sm { --size:  #{env.$size-sm}; }
      &.md { --size:  #{env.$size-md}; }
      &.lg { --size:  #{env.$size-lg}; }

      // Color
      &.primary {
        --color: #{env.$color-primary};
      }

      &.secondary {
        --color: #{env.$color-secondary};
      }

      .fill-only {
        stroke: none;
      }

      .stroke-only {
        fill: none;
      }
    }
  }
</style>