<script lang="ts">
  import type {Snippet} from "svelte"

  import {fade, fly, crossfade, slide, scale, blur} from "svelte/transition"

  import ArrowDown from "$ui-kit/icons/ArrowDown.svelte"
  import Input from "$ui-kit/Form/Input.svelte"

  type Props = any & {
      dropdown: Snippet,
      placeholder: string,
      close: Function,
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
      ...props
  }: Props = $props()

  let closed = $state(true)

  open = () => {
      closed = false
  }

  close = () => {
      closed = true
  }

  let active = $derived(!closed)
  let inputEl = $state()

  function toggle(e) {
      e.stopPropagation()

      if (closed) {
          open()
      } else {
          close()
      }
  }
</script>

<svelte:window onclick={preventClose ? (e) => {console.log(e)} : close}></svelte:window>

{#snippet chevronIcon()}
  <div class:active class="select-input__chevron" onclick={toggle}>
    <ArrowDown size="sm" />
  </div>
{/snippet}

<div class="select-input" onclick={(e) => {e.stopPropagation()}}>
  <Input
      {...props}
      postIcon={chevronIcon}
      {active}
      {placeholder}
      onfocus={preventOpen ? () => {} : open}
      bind:el={inputEl}
  />

  {#if active}
    <div class="select-input__dropdown" transition:slide={{duration: 300}}>
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

      &__chevron {
        opacity: .5;

        transition-property: transform, opacity;
        transition-duration: 300ms;
        transform-origin: center center;

        cursor: pointer;

        &.active {
          opacity: 1;
          transform: rotateX(180deg);

          .svg-icon-container {
            --color: #{map.get(env.$color, primary)};
          }
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

    }
  }
</style>