<script lang="ts">
  import Plus from "$ui-kit/icons/Plus.svelte"
  import {scale} from "svelte/transition"

  type Props = any & {
      preIcon?: Snippet,
      label?: string,
      value?: any,
      active: boolean,
      withErase: boolean,
      onErase: Function,
  }
  let {
      preIcon,
      label,
      active = false,
      value = $bindable(''),
      withErase = true,
      onErase = () => {},
      ...props
  }: Props = $props()

  function erase() {
      value = ''
      onErase()
  }
</script>

<div class="form-control-wrapper">
  {#if preIcon}
    <div class="">
      {@render preIcon()}
    </div>
  {/if}

  <input class:withErase class="form-control" class:active={active} type="text" {...props} bind:value>

  {#if withErase && value.length}
    <div class="erase" transition:scale onclick={erase}>
      <Plus size="sm" type="primary"/>
    </div>
  {/if}
</div>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .form-control-wrapper {
    --border-opacity: .1;
    --wrapper-icon-padding: 0px;
    --erase-icon-right: calc(20px + var(--wrapper-icon-padding));

    border: 1px solid rgba(map.get(env.$color, primary), var(--border-opacity));
    border-radius: .75em;

    display: flex;
    align-items: center;
    gap: 16px;
    position: relative;
    padding: .65em 1em;

    transition-property: border, box-shadow;
    transition-duration: 300ms;
  }

  input {
    --erase-icon-offset: calc(24px + var(--erase-icon-right));

    width: 100%;

    border: none;

    background: none;

    line-height: 25.6px;
    outline: none;

    &.withErase:not(:placeholder-shown) {
        padding-right: calc(8px + var(--erase-icon-right));
    }

    font-family: "Helvetica", Gilroy, sans-serif;
    font-size: 1rem;
  }

  .erase {
    -webkit-tap-highlight-color: transparent;

    position: absolute;
    right: var(--erase-icon-right);

    top: 50%;

    transform: translateY(-50%) rotate(45deg);
    cursor: pointer;
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