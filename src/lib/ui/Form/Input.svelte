<script lang="ts">
  import type {FactoryArg} from "imask"
  import { imask as imaskUsable} from "@imask/svelte"

  import {scale} from "svelte/transition"
  import {type Snippet} from "svelte"

  import Plus from "$ui-kit/icons/Plus.svelte"

  type Props = any & {
      el: HTMLInputElement,
      preIcon?: Snippet,
      postIcon?: Snippet,
      label?: string,
      value?: any,
      active: boolean,
      withErase: boolean,
      onErase: Function,
      error: boolean,
      imask?: FactoryArg,
      onimaskAccept?: (value: string) => void,
      onimaskComplete?: (value: string) => void,
  }


  let {
      preIcon,
      postIcon,
      label,
      active = false,
      value = $bindable(''),
      withErase = true,
      onErase = () => {},
      el = $bindable(),
      error,
      imask = null,
      onimaskAccept = () => {},
      onimaskComplete = () => {},
      ...props
  }: Props = $props()


  function imaskAccept({ detail: maskRef }) {
      value = maskRef.unmaskedValue;
      onimaskAccept(maskRef)
  }

  function imaskComplete({ detail: maskRef }) {
      value = maskRef.unmaskedValue;
      onimaskComplete(maskRef)
  }

  function erase() {
      value = ''
      onErase()
  }

</script>

<div class="form-control-wrapper" class:error onclick={() => {el.focus()}}>
  {#if preIcon}
    <div class="pre_icon">
      {@render preIcon()}
    </div>
  {/if}

  {#if imask}
    <input
        {...props}
        oncomplete={imaskComplete}
        onaccept={imaskAccept}
        use:imaskUsable={imask}
        class:withErase
        class="form-control"
        class:active={active}
        bind:this={el}
    >
  {:else}
    <input
        {...props}
        class:withErase
        class="form-control"
        class:active={active}
        bind:value
        bind:this={el}
    >
  {/if}

  {#if withErase && value.length}
    <div class="erase" transition:scale onclick={erase}>
      <Plus size="sm" type="primary"/>
    </div>
  {/if}

  {#if postIcon}
    <div class="post_icon">
      {@render postIcon()}
    </div>
  {/if}
</div>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .form-control-wrapper {
    width: 100% ;

    --border-opacity: .1;
    --wrapper-icon-padding: 0px;
    --erase-icon-right: calc(20px + var(--wrapper-icon-padding));

    border: 1px solid rgba(map.get(env.$color, primary), var(--border-opacity));
    border-radius: .75em;

    display: flex;
    align-items: center;
    gap: 4px;
    position: relative;
    padding: .65em 1em;

    transition-property: border, box-shadow, border-color;
    transition-duration: 300ms;

    &.error {
      border-color: map.get(env.$color, error);
    }
  }

  input {
    width: 100%;

    border: none;

    background: none;

    line-height: 25.6px;
    outline: none;

    font-family: "Helvetica", Gilroy, sans-serif;
    font-size: 1rem;
  }

  .erase {
    -webkit-tap-highlight-color: transparent;

    transform: rotate(45deg);
    cursor: pointer;
  }

  .pre_icon,
  .post_icon {
    display: block;
    flex-shrink: 0;
  }

  @media (min-width: map.get(env.$screen-size, tablet)) {
    .form-control-wrapper:hover {
      --border-opacity: 1;
    }
  }

  .form-control-wrapper.active,
  .form-control-wrapper:focus-within {
    --border-opacity: 1;

    box-shadow: 0 4px 6px rgba(map.get(env.$color, primary), .06);
  }

  :global {
    label + .form-control {
      margin-top: 6px;
    }
  }
</style>