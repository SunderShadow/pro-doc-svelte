<script lang="ts">
  import {page} from "$app/state"
  import {getContext} from "svelte"

  let setPageTitle = getContext('setPageTitle')
  setPageTitle('Избранное')

  let {
      children
  } = $props()
</script>

<div class="switcher">
  <a class:active={page.url.pathname === '/account/favorite/doctors'} href="/account/favorite/doctors" data-sveltekit-noscroll>Врачи</a>
  <a class:active={page.url.pathname === '/account/favorite/clinics'} href="/account/favorite/clinics" data-sveltekit-noscroll>Клиники</a>
</div>

<div class="wrapper">
  {@render children?.()}
</div>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .switcher {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;

    margin-top: 32px;

    font-weight: 600;

    a {
      transition-property: opacity, border-color, color;
      transition-duration: 300ms;
      padding-bottom: 4px;

      border-bottom: 1px solid transparent;
    }

    a:hover {
      border-bottom: 1px solid;
    }

    a.active {
      border-bottom: 2px solid;
    }
  }

  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    padding: 32px;

    border-radius: 12px;

    @media (min-width: (map.get(env.$screen-size, mobile) + 1px)) {
      border: 1px solid rgba(map.get(env.$color, primary), .1);
    }

    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      padding: 16px;
    }

    @media (max-width: map.get(env.$screen-size, mobile)) {
      padding: 0;
    }
  }
</style>