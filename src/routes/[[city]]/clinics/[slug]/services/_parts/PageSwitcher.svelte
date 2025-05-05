<script lang="ts">
  import {page} from "$app/state"

  function isCurrentPage(name: string) {
    return page.url.pathname === pageHref(name)
  }

  function pageHref(name: string): string {
      return '/clinics/' + page.params.slug + '/services/' + name
  }
</script>
<div class="switcher">
  <a class:active={isCurrentPage('consulting')} href={pageHref('consulting')} data-sveltekit-noscroll>Консультации</a>
  <hr>
  <a class:active={isCurrentPage('healing')} href={pageHref('healing')} data-sveltekit-noscroll>Лечение</a>
  <hr>
  <a class:active={isCurrentPage('diagnostic')} href={pageHref('diagnostic')} data-sveltekit-noscroll>Диагностика</a>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .switcher {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;

    @media (max-width: map.get(env.$screen-size, mobile)) {
      justify-content: space-between;
    }
  }

  hr {
    opacity: .25;
  }

  a {
    opacity: .5;
  }

  a.active {
    opacity: 1;
  }
</style>