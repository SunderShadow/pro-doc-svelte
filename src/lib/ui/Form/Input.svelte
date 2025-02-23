<script lang="ts">
  import Plus from "$ui-kit/icons/Plus.svelte"
  import {scale} from "svelte/transition"

  type Props = any & {
      value?: any,
      active: boolean,
      onErase: Function,
  }
  let {
      active = false,
      value = $bindable(''),
      onErase = () => {},
      ...props
  }: Props = $props()

  function erase() {
      value = ''
      onErase()
  }
</script>

<div class="form-control-wrapper">
  <input class="form-control" class:active={active} type="text" {...props} bind:value>

  {#if value.length}
    <div class="erase" transition:scale onclick={erase}>
      <Plus size="sm" type="primary"/>
    </div>
  {/if}
</div>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  input {
    --border-opacity: .1;
    --erase-icon-offset: 24px + var(--erase-icon-right);

    width: 100%;

    border: 1px solid rgba(map.get(env.$color, primary), var(--border-opacity));

    line-height: 25.6px;
    outline: none;
    padding: .65em 1em;
    border-radius: .75em;

    font-family: "Helvetica", Gilroy, sans-serif;
    font-size: 1rem;

    transition-property: border, box-shadow;
    transition-duration: 300ms;
  }

  input:not(:placeholder-shown) {
    padding-right: calc(var(--erase-icon-offset) + var(--wrapper-icon-padding));
  }

  .erase {
    position: absolute;
    right: var(--erase-icon-right);

    top: 50%;

    transform: translateY(-50%) rotate(45deg);
    cursor: pointer;
  }

  .form-control-wrapper {
    --wrapper-icon-padding: 0px;
    --erase-icon-right: calc(20px + var(--wrapper-icon-padding));

    display: flex;
    position: relative;
  }


  @media (min-width: map.get(env.$screen-size, tablet)) {
    input:hover {
      --border-opacity: 1;
    }
  }

  input.active,
  input:focus {
    --border-opacity: 1;

    box-shadow: 0 4px 6px rgba(map.get(env.$color, primary), .06);
  }

  :global {
    label + .form-control {
      margin-top: 6px;
    }
  }
</style>