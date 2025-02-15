<script lang="ts">
    import Button from "$ui-kit/Accordion/parts/Button.svelte";
    import { slide } from 'svelte/transition';

    type Props = {
        title: string,
        content: string,
    }

    const {
        title,
        content
    }: Props = $props()

    let isActive = $state(false)
    const handleActiveAccordion = () => {
        isActive = !isActive
    }

</script>

<div class="accordion">
    <button class="title-1" onclick={handleActiveAccordion}>
        {title}
        <Button isActive={isActive}/>
    </button>
    {#if isActive}
        <p class="body-text-2" transition:slide>{content}</p>
    {/if}
</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

    .accordion {
      border: 1px solid rgba(map.get(env.$color, primary), 0.1);
      border-radius: 20px;

      font-family: "Gilroy", sans-serif;
      font-weight: 600;
      line-height: 36px;

      > button {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;

        padding: 1.5rem;

        border: none;
        border-radius: 20px;
        outline: none;

        background-color: map.get(env.$bg-color, primary);

        cursor: pointer;
      }

      > p {
        padding: 1rem 1.5rem;

        font-weight: 400;
        line-height: 25.6px;
        opacity: 0.5;
      }
    }

  :global {
    .accordion {
      &:hover &__button {
        background-color: map.get(env.$color, primary);
      }

      &:hover &__button .svg-icon-container {
        --color: #{map.get(env.$color, secondary)};
      }
    }
  }
</style>