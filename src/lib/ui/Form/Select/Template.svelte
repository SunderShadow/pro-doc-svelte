<script lang="ts">
  import type {Snippet} from "svelte"

  import {scale,  slide} from "svelte/transition"

  import ArrowDown from "$ui-kit/icons/ArrowDown.svelte"
  import Input from "$ui-kit/Form/Input.svelte"

  type Props = any & {
      dropdown: Snippet,
      placeholder: string,
      close: Function,
      useScaleTransition: boolean,
      open: Function,
      preventClose: boolean,
      preventOpen: boolean,
  }

  let {
      dropdown,
      placeholder,
      open = $bindable(),
      close = $bindable(),
      preventClose = false,
      preventOpen = false,
      useScaleTransition = false,
      ...props
  }: Props = $props()

  let closed = $state(true)

  open = () => {
      closed = false
  }

  close = () => {
      closed = true
  }

  let trs = useScaleTransition ? scale : slide
</script>

<svelte:window onclick={preventClose ? () => {} : close}></svelte:window>

<div class="select-input" onclick={(e) => {e.stopPropagation()}}>
  <div class="select-input__wrapper">
    <Input active={!closed} {...props} {placeholder} onfocus={preventOpen ? () => {} : open} />
    <div class="select-input__chevron" class:active={!closed}>
      <ArrowDown size="sm" />
    </div>
  </div>

  {#if !closed}
    <div class="select-input__dropdown" transition:trs>
      {@render dropdown?.()}
    </div>
  {/if}
</div>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  :global {
    .select-input {
      position: relative;

      cursor: text;

      &__wrapper {
        position: relative;
        width: 100%;

        @media (min-width: map.get(env.$screen-size, tablet) + 1px) {
          height: 100%;
        }

        .form-control-wrapper {
          --wrapper-icon-padding: 20px;
        }
      }

      &__dropdown {
        --z-index: 1;

        @media (min-width: map.get(env.$screen-size, tablet) + 1px) {
          position: absolute;

          max-height: min(75vh, 500px);
          transform: translateX(-50%);
        }

        left: 50%;

        top: 100%;
        min-width: 100%;
        background-color: #fff;

        overflow-y: auto;
        border: 1px solid rgba(map.get(env.$color, primary), .1);
        border-radius: 12px;
        z-index: calc(5 + var(--z-index));

        transition-property: height;
        transition-duration: 300ms;
      }

      @media (min-width: map.get(env.$screen-size, tablet) + 1px) {
        input {
          height: 100%;
        }
      }

      &__chevron {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);

        opacity: .5;
        transition-property: transform, opacity;
        transition-duration: 300ms;
        transform-origin: center center;

        &.active {
          opacity: 1;
          transform: rotateX(180deg) translateY(60%);

          .svg-icon-container {
            --color: #{map.get(env.$color, primary)};
          }
        }
      }
    }
  }
</style>