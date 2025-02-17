<script lang="ts">
  import type {Snippet} from "svelte";

  type Props = {
      children: Snippet,
      type?: "default" | "icon",
      _class?: string,
      _type?: "button" | "submit" | "reset"
  }

  const {
      children,
      type = "default",
      _class = '',
      _type = 'button'
  }: Props = $props()
</script>

<button type={_type} class={_class} class:icon={type === 'icon'}>
  {@render children?.()}
</button>

<style lang="scss">
  @use "sass:map";
  @use "env";
  @use "$ui-kit/env" as env-global;

  button {
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

    @media (min-width: (map.get(env-global.$screen-size, tablet) + 1px)) {
      &:focus,
      &:hover {
        background-color: env.$bg-hover;
        box-shadow: 0 12px 24px rgba(#6B5AF926, .15);
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