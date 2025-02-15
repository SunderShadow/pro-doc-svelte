<script lang="ts">
  import type {Snippet} from "svelte"

  import ArrowDown from "$ui-kit/icons/ArrowDown.svelte"
  import Input from "$ui-kit/Form/Input.svelte"

  type Props = any & {
      dropdown: Snippet,
      placeholder: string,
      close: Function,
      open: Function,
      preventClose: boolean,
      preventOpen: boolean
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

<div class="select-input">
  <Input {...props} {placeholder} onfocus={preventOpen ? () => {} : open} onfocusout={preventClose ? () => {} : close}/>

  <div class="select-input__chevron">
    <ArrowDown size="sm" />
  </div>

  <div class="select-input__dropdown" class:closed>
    {@render dropdown?.()}
  </div>
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
        left: 0;
        top: 100%;
        width: 100%;
        height: 300px;
        max-height: 50vh;
        background-color: #fff;

        overflow-y: auto;
        border: 1px solid rgba(map.get(env.$color, primary), .1);
        border-radius: 12px;
        z-index: 2;

        transition: height 300ms;
        &.closed {
          height: 0;
        }
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