<script lang="ts">
  type Props = any & {
      checked: boolean,
      label: string
  }

  let {
      checked = $bindable(false),
      disabled = false,
      label
  }: Props = $props()

  function toggle(e) {
      e.preventDefault()
      checked = !checked && !disabled
  }
</script>

<div class="checkbox" class:disabled class:checked>
  <button class="box" aria-label={label} onclick={toggle}>
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.09352 10.4843L4.00831 8.25764C3.95379 8.1987 3.88885 8.15191 3.81726 8.11997C3.74567 8.08803 3.66885 8.07159 3.59127 8.07159C3.51369 8.07159 3.43687 8.08803 3.36528 8.11997C3.29369 8.15191 3.22875 8.1987 3.17423 8.25764C3.11904 8.31586 3.07522 8.38521 3.04531 8.46165C3.0154 8.53809 3 8.62012 3 8.70297C3 8.78581 3.0154 8.86784 3.04531 8.94428C3.07522 9.02073 3.11904 9.09007 3.17423 9.1483L5.67052 11.8139C5.90287 12.062 6.27821 12.062 6.51056 11.8139L12.8258 5.07671C12.881 5.01848 12.9248 4.94914 12.9547 4.87269C12.9846 4.79625 13 4.71422 13 4.63138C13 4.54853 12.9846 4.46651 12.9547 4.39006C12.9248 4.31362 12.881 4.24427 12.8258 4.18605C12.7712 4.12711 12.7063 4.08032 12.6347 4.04838C12.5631 4.01644 12.4863 4 12.4087 4C12.3311 4 12.2543 4.01644 12.1827 4.04838C12.1112 4.08032 12.0462 4.12711 11.9917 4.18605L6.09352 10.4843Z"  />
    </svg>

  </button>

  <label>
    <input type="checkbox" bind:checked {disabled}>
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
    font-family: Gilroy;
  }

  .checkbox {
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
    border-radius: 4px;
    border: env.$border-width solid env.$color-default;
    background-color: transparent;

    outline: none;
    opacity: .1;

    transition-property: opacity, background-color;
    transition-duration: 100ms;

    svg {
      opacity: 0;

      width: 100%;
      height: 100%;
      fill: #fff;

      transition-property: fill, opacity;
      transition-duration: inherit;
    }
  }

  @media (min-width: map.get(global-env.$screen-size, tablet)) {
    .checkbox:not(.disabled):not(.checked):hover {
      label {
        opacity: 1;
      }

      .box:not(.checked) {
        svg {
          opacity: 1;

          fill: env.$color-default;
        }
      }
    }
  }

</style>