<script lang="ts">
  let {
      active = false,
      ...props
  } = $props()
</script>

<input class="form-control" class:active={active} type="text" {...props} >

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  input {
    --border-opacity: .1;

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

  input:hover {
    --border-opacity: 1;
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