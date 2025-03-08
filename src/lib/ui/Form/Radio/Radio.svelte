<script lang="ts">
  type Props = any & {
      checked: boolean,
      label: string,
      name: string,
      value: string,
      group: string
  }

  let {
      checked = $bindable(false),
      group = $bindable(),
      disabled = false,
      label,
      name,
      value,
  }: Props = $props()

  let input: HTMLInputElement = $state()

  function select() {
      if (!disabled) {
          input.click()
          group = value
      }
  }
</script>

<div class="radio" class:disabled class:checked={value === group} onclick={select}>
  <button class="box" aria-label={label}>
    <div class="box-inner"></div>
  </button>

  <label>
    <input {name} {value} type="radio" {disabled} {checked} bind:this={input} onchange={select} hidden>
    {label}
  </label>
</div>

<style lang="scss">
  @use "sass:map";
  @use "env";
  @use "$ui-kit/env" as global-env;

  input {
    display: none;
  }

  .checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .checkbox * {
    cursor: pointer;
  }

  label {
    position: relative;
    top: .5px;
    opacity: .5;
    user-select: none;

    transition-property: opacity;
    transition-duration: 100ms;

    font-weight: 600;
    font-family: Gilroy, sans-serif;
  }

  .radio {
    display: flex;
    align-items: center;
    gap: 8px;
    width: fit-content;

    &.disabled {
      opacity: 0.5;

      .box {
        opacity: 1;
      }
    }

    &.checked {
      opacity: 1;

      label {
        opacity: 1;
      }

      .box {
        opacity: 1;
        background-color: env.$color-default;

        &-inner {
          background-color: #fff;
        }

        svg {
          opacity: 1;
          fill: #fff;
        }
      }
    }
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    width: 16px;
    height: 16px;
    padding: 2px;

    border-radius: 100%;
    border: env.$border-width solid env.$color-default;
    background-color: transparent;

    outline: none;
    opacity: .1;

    transition-property: opacity, background-color;
    transition-duration: 100ms;

    &-inner {
      width: 100%;
      height: 100%;

      border-radius: inherit;
      transition: inherit;
    }
  }

  @media (min-width: map.get(global-env.$screen-size, tablet)) {
    .radio:not(.disabled):not(.checked):hover {
      cursor: pointer;

      label {
        opacity: 1;
        cursor: pointer;
      }

      .box:not(.checked) .box-inner {
        background-color: env.$color-default;
      }

      .box:not(.checked) {

        cursor: pointer;
        svg {
          opacity: 1;

          fill: env.$color-default;
        }
      }
    }
  }

</style>