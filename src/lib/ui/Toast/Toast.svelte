<script lang="ts">
  import {fade} from "svelte/transition"
  import type {Snippet} from "svelte"
  import type {Toast} from "$lib/types"

  import CheckIcon from "$ui-kit/icons/Check.svelte"
  import PlusIcon from "$ui-kit/icons/Plus.svelte"

  type Props = {
      children: Snippet,
      type: Toast['type']
  }

  let {
      children,
      type
  }: Props = $props()
</script>

<div class={'toast ' + type} transition:fade>
  {#if type === 'success'}
    <CheckIcon />
  {:else if type === 'error'}
    <PlusIcon />
  {/if}

  {@render children?.()}
</div>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .toast {
    display: flex;
    gap: 16px;
    align-items: center;


    text-align: center;
    padding: 16px;
    border-radius: 12px;
    background-color: map.get(env.$bg-color, 'primary');

    --color: #{map.get(env.$color, 'secondary')};

    :global(.svg-icon-container) {
      --color: #{map.get(env.$color, 'secondary')};
    }

    color: var(--color);
    border: 1px solid var(--color);

    &.success {
      --color: #{map.get(env.$color, 'success')};

      :global(.svg-icon-container) {
        --color: #{map.get(env.$color, 'success')};
      }
    }

    &.error {
      --color: #{map.get(env.$color, 'error')};

      :global(.svg-icon-container) {
        --color: #{map.get(env.$color, 'error')};

        transform: rotate(45deg);
      }
    }

    &.info {
      --color: #{map.get(env.$color, 'primary')};

      :global(.svg-icon-container) {
        --color: #{map.get(env.$color, 'primary')};
      }
    }
  }
</style>
