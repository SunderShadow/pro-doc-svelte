<script lang="ts">
  import PageSwitcher from "./_parts/PageSwitcher.svelte"
  import Search from "$ui-kit/Form/Search/Search.svelte";

  let {
      children
  } = $props()
</script>

<Search placeholder="Название услуги"/>
<div class="switcher"><PageSwitcher /></div>

<div class="wrapper">
  {@render children?.()}
</div>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .switcher {
    margin-top: 16px;
  }

  .wrapper {
    border: 1px solid rgba(map.get(env.$color, primary), .1);
    border-radius: 12px;

    padding: 32px;

    margin-top: 16px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      padding: 16px;
    }
  }
</style>