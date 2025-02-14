<script>
  let props = $props()
</script>
<input type="text" {...props}>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  input {
    --border-opacity: .1;

    width: 100%;

    border: 1px solid rgba(map.get(env.$color, primary), var(--border-opacity));

    outline: none ;
    padding: .65em 1em;
    border-radius: .75em;

    font-family: "Helvetica", Gilroy, sans-serif;

    transition-property: border, box-shadow;
    transition-duration: 300ms;
  }

  input:hover {
    --border-opacity: 1;
  }

  input:focus {
    --border-opacity: 1;

    box-shadow: 0 4px 6px rgba(map.get(env.$color, primary), .06);
  }
</style>