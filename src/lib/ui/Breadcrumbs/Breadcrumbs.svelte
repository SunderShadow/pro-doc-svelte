<script lang="ts">
  import {page} from "$app/state"

  import ArrowRight from "$ui-kit/icons/ArrowRight.svelte"

  type Props = {
      list: Array<{
          title: string,
          href: string
      }>
  }
  const {
      list
  }: Props = $props()
</script>

<div class="breadcrumbs">
  {#each list as {href, title}, i}
    <a class:current={href === page.url.pathname} {href}>{title}</a>
    {#if list.length > i + 1}
      <ArrowRight />
    {/if}
  {/each}
</div>

<style lang="scss">
  :global {
    .breadcrumbs .svg-icon-container {
      --size: 16px;
      opacity: .5;
    }
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 4px;

    font-size: 14px;
    line-height: 23.8px;

    > a.current {
      border-bottom: 1px solid;
    }

    > * {
      opacity: .5;
    }
  }
</style>