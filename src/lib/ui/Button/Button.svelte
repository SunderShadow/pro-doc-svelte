<script lang="ts">
  import type {Snippet} from "svelte";

  type Props = any & {
      children: Snippet,
      active?: boolean,
      fullWidth?: boolean,
      outline?: boolean,
      type?: "default" | "icon",
      _class?: string,
      _type?: "button" | "submit" | "reset"
  }

  const {
      children,
      active = false,
      outline = false,
      fullWidth = false,
      type = "default",
      _class = '',
      _type = 'button',
      ...props
  }: Props = $props()
</script>

<button
    class:active
    class:outline
    class:fullWidth
    class:icon={type === 'icon'}
    type={_type}
    class={'ui_button ' + _class}
    {...props}
>
  {@render children?.()}
</button>

<style lang="scss">
  @use "sass:map";
  @use "env";
  @use "$ui-kit/env" as env-global;

  :global {
    .ui_button .svg-icon-container {
      --color: #fff;
    }
  }

  button {
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    -webkit-tap-highlight-color: transparent;

    background-color: env.$bg-default;
    padding: .875em 2em;

    line-height: 170%;

    font: inherit;
    font-weight: 600;

    color: #fff;

    line-height: 27.2px;

    outline: none;

    border: 1px solid env.$bg-default;
    border-radius: .75em;

    transition-property: box-shadow, background-color;
    transition-duration: 300ms;

    &:not([disabled]) {
      cursor: pointer;
    }

    &.fullWidth {
      width: 100%;
    }

    &.outline {
      background-color: transparent;
      border: 1px solid env.$bg-default;
      color: env.$bg-default;

      &.active {
        background-color: env.$bg-pressing;
        color: #fff;
      }

      &:not([disabled]):not(.active) {
        @media (min-width: (map.get(env-global.$screen-size, tablet) + 1px)) {
          &:focus,
          &:hover {
            background-color: rgba(env.$bg-hover, .1);
            box-shadow: none;
          }

          &:active {
            background-color: env.$bg-pressing;
            color: #fff;
          }
        }
      }
    }


    &.active {
      background-color: env.$bg-pressing;
    }

    @media (min-width: (map.get(env-global.$screen-size, tablet) + 1px)) {
      &:not([disabled]):not(.active) {
        &:hover {
          background-color: env.$bg-hover;
          box-shadow: 0 12px 24px rgba(env.$bg-pressing, .15);
        }

        &:active {
          background-color: env.$bg-pressing;
        }
      }
    }

    &.icon {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 32px;
      height: 32px;

      padding: 0;
      border-radius: 100em;

      svg {
        flex-grow: 1;
      }
    }
  }

  button.disabled,
  button[disabled] {
    opacity: .4;
  }
</style>