<script lang="ts">
    import AccordionButton from "$ui-kit/icons/Plus.svelte"

    type Props = {
        isActive: boolean,
    }

    const {
        isActive
    }: Props = $props()
</script>

<div class="accordion__button" class:active={isActive}>
    <AccordionButton size="sm" variant="primary"/>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  $btn-active: #4341DF;

  :global {
    .accordion__button{
      background-color: map.get(env.$color, secondary);

      padding: 1rem;

      border-radius: 99px;

      transition-property: background, transform;
      transition-duration: 300ms;

      .svg-icon-container {
        --color: #{map.get(env.$color, primary)};
      }

      &.active {
        background-color: $btn-active;
        transform: rotate(45deg);

        .svg-icon-container {
          --color: #{map.get(env.$color, secondary)};
        }
      }
    }
  }
</style>