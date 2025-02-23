<script lang="ts">
import ArrowUpRight from "$ui-kit/icons/ArrowUpRight.svelte"
import type {Snippet} from "svelte"

type Props = {
    children: Snippet,
    stretched?: boolean,
    primary?: boolean,
    href: string
}

const {
    children,
    primary = false,
    stretched = false,
    href
}: Props = $props()

</script>

<a {href} class="article-link" class:primary class:stretched>
  {@render children?.()}
  <div class="article-link__icon">
    <ArrowUpRight size="sm"/>
  </div>
</a>

<style lang="scss">
  @use 'sass:map';
  @use "$lib/ui/env";

  .article-link {
    -webkit-tap-highlight-color: transparent;
    --color: #000;

    width: fit-content;

    display: flex;
    font-weight: 600;
    gap: 10px;
    align-items: center;

    color: var(--color);

    transition-property: color;
    transition-duration: 300ms;

    &__icon {
      flex-shrink: 0;
      transition-property: transform;
      transition-duration: 300ms;
    }

    &.stretched::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }

    &.primary {
      --color: #{map.get(env.$color, primary)};
    }

    &[disabled],
    &.disabled {
      opacity: .3;
      user-select: none;
    }

    @media (min-width: (map.get(env.$screen-size, tablet) + 1)) {
      &.active,
      &:active {
        --color: #{map.get(env.$color, primary-active)};
      }

      &:hover {
        color: map.get(env.$color, primary);
      }
      &:hover &__icon {
        transform: rotate(45deg);
      }
    }
  }

  :global {
    .article-link.primary .svg-icon-container {
      --color: #{map.get(env.$color, primary)};
    }

    .article-link.primary:active .svg-icon-container {
      --color: #{map.get(env.$color, primary-active)};
    }

    .article-link.primary.active .svg-icon-container {
      --color: #{map.get(env.$color, primary-active)};
    }
  }
</style>