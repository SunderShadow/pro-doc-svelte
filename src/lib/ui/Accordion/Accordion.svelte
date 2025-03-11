<script lang="ts">
    import type {Snippet} from "svelte";
    import { slide } from 'svelte/transition';
    import Button from "$ui-kit/Accordion/parts/Button.svelte";

    type Props = {
        children: Snippet,
        title: string,
    }

    const {
        children,
        title,
    }: Props = $props()

    let isActive = $state(false)
    const handleActiveAccordion = () => {
        isActive = !isActive
    }

</script>

<div class="accordion">
    <button class="title-1" onclick={handleActiveAccordion}>
        {title}
        <div class="round_btn"><Button isActive={isActive}/></div>
    </button>
    {#if isActive}
        <div class="accordion-dropdown" transition:slide>
            {@render children?.()}
        </div>
    {/if}
</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";


  .accordion {
    --padding: 24px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      --padding: 16px;
    }

    border: 1px solid rgba(map.get(env.$color, primary), 0.1);
    border-radius: 20px;

    font-family: "Gilroy", sans-serif;
    line-height: 36px;

    &-dropdown {
      padding: 0 var(--padding) var(--padding);
    }

    > button {
      -webkit-tap-highlight-color: transparent;

      display: flex;
      justify-content: space-between;
      align-items: center;

      font-weight: 600;

      gap: 16px;

      text-align: left;
      width: 100%;

      padding: var(--padding);
      font-family: inherit;

      border: none;
      border-radius: 20px;
      outline: none;

      background-color: map.get(env.$bg-color, primary);

      @media (min-width: (map.get(env.$screen-size, tablet) + 1px)) {
        cursor: pointer;
      }

      @media (max-width: map.get(env.$screen-size, mobile)) {
        font-size: 1.2rem;
      }
    }
  }

  :global {
    @media (min-width: (map.get(env.$screen-size, tablet) + 1px)) {
      .accordion {
        &:hover &__button {
          background-color: map.get(env.$color, primary);
        }

        &:hover &__button .svg-icon-container {
          --color: #{map.get(env.$color, secondary)};
        }
      }
    }
  }
</style>