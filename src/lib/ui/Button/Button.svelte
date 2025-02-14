<script lang="ts">
  const props = $props()
</script>

<button {...props}>
  {@render props.children?.()}
</button>

<style lang="scss">
  @use "sass:map";
  @use "env";

  button {
    width: 100%;

    background-color: env.$bg-default;
    padding: .875em 2em;

    font: inherit;
    font-weight: 600;

    color: #fff;

    outline: none;
    cursor: pointer;
    border: none;

    transition-property: box-shadow, background-color;
    transition-duration: 300ms;

    &:focus,
    &:hover {
      background-color: env.$bg-hover;
      box-shadow: 0 12px 24px rgba(#6B5AF926, .15);
    }

    &:active {
      background-color: env.$bg-pressing;
    }
  }
</style>