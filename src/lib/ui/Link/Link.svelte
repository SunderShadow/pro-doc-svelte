<script lang="ts">
import ArrowUpRight from "$ui-kit/icons/ArrowUpRight.svelte"
import type {Snippet} from "svelte"

type Props = {
    children: Snippet,
    href: string
}

const {
    children,
    href
}: Props = $props()

</script>

<a {href} class="article-link">
  {@render children?.()}
  <div class="article-link__icon">
    <ArrowUpRight />
  </div>
</a>

<style lang="scss">
  @use 'sass:map';
  @use "$lib/ui/env";

  .article-link {
    --color: #{map.get(env.$color, primary)};

    display: flex;
    font-weight: 600;
    gap: 10px;
    align-items: center;

    color: var(--color);

    transition-property: color;
    transition-duration: 300ms;

    &[disabled],
    &.disabled {
      opacity: .3;
      user-select: none;
    }

    &.active,
    &:active {
      --color: #{map.get(env.$color, primary-active)};
    }

    &__icon {
      transition-property: transform;
      transition-duration: 300ms;
    }

    &:hover &__icon {
      transform: rotate(45deg);
    }
  }

  :global {
    .article-link .svg-icon-container {
      --color: #{map.get(env.$color, primary)};
    }

    .article-link:active .svg-icon-container {
      --color: #{map.get(env.$color, primary-active)};
    }

    .article-link.active .svg-icon-container {
      --color: #{map.get(env.$color, primary-active)};
    }
  }
</style>