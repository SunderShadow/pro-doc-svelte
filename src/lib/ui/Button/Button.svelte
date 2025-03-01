<script lang="ts">
  import type {Snippet} from "svelte";

  type Props = any & {
      children: Snippet,
      fullWidth?: boolean,
      outline?: boolean,
      type?: "default" | "icon",
      _class?: string,
      _type?: "button" | "submit" | "reset"
  }

  const {
      children,
      outline = false,
      fullWidth = false,
      type = "default",
      _class = '',
      _type = 'button',
      ...props
  }: Props = $props()
</script>

<button
    class:outline
    class:fullWidth
    class:icon={type === 'icon'}
    type={_type}
    class={_class}
    {...props}
>
  {@render children?.()}
</button>

<style lang="scss">
  @use "sass:map";
  @use "env";
  @use "$ui-kit/env" as env-global;

  button {
    display: block;
    -webkit-tap-highlight-color: transparent;

    background-color: env.$bg-default;
    padding: .875em 2em;

    font: inherit;
    font-weight: 600;

    color: #fff;

    line-height: 27.2px;

    outline: none;
    cursor: pointer;
    border: none;
    border-radius: .75em;

    transition-property: box-shadow, background-color;
    transition-duration: 300ms;

    &.fullWidth {
      width: 100%;
    }

    &.outline {
      background-color: transparent;
      border: 1px solid env.$bg-default;
      color: env.$bg-default;

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

    @media (min-width: (map.get(env-global.$screen-size, tablet) + 1px)) {
      &:hover {
        background-color: env.$bg-hover;
        box-shadow: 0 12px 24px rgba(env.$bg-pressing, .15);
      }

      &:active {
        background-color: env.$bg-pressing;
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
    opacity: .1;
  }
</style>