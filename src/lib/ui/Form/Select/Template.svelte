<script lang="ts">
  import type {Snippet} from "svelte"

  import {slide} from "svelte/transition"

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
</script>

<svelte:window onclick={preventClose ? () => {} : close}></svelte:window>

<div class="select-input" onclick={(e) => {e.stopPropagation()}}>
  <Input active={!closed} {...props} {placeholder} onfocus={preventOpen ? () => {} : open} />

  <div class="select-input__chevron">
    <ArrowDown size="sm" />
  </div>

  {#if !closed}
    <div class="select-input__dropdown" transition:slide>
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

      &__dropdown {
        position: absolute;

        left: 50%;
        transform: translateX(-50%);

        top: 100%;
        min-width: 100%;
        max-height: min(75vh, 500px);
        background-color: #fff;

        overflow-y: auto;
        border: 1px solid rgba(map.get(env.$color, primary), .1);
        border-radius: 12px;
        z-index: 5;

        transition: height 300ms;

      }

      input {
        height: 100%;
        padding-right: calc(1em + 24px);
      }

      &__chevron {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);

        opacity: .5;
      }
    }
  }
</style>