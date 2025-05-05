<script lang="ts">
  import {page} from "$app/state"

  function getHref(category: string): string {
      return '/clinics/' + page.params.slug + '/reviews/' + category
  }

  function isActive(category: string) {
      return page.url.pathname === getHref(category)
  }
</script>

<div class="switcher">
  <a class:active={isActive('clinic')} href={getHref('clinic')} data-sveltekit-noscroll>О клинике (13)</a>
  <hr>
  <a class:active={isActive('doctors')} href={getHref('doctors')} data-sveltekit-noscroll>О врачах (34)</a>
  <hr>
  <a class:active={isActive('amazing')} href={getHref('amazing')} data-sveltekit-noscroll>Отлично (12)</a>
  <hr>
  <a class:active={isActive('good')} href={getHref('good')} data-sveltekit-noscroll>Хорошо (13)</a>
  <hr>
  <a class:active={isActive('normal')} href={getHref('normal')} data-sveltekit-noscroll>Нормально (4)</a>
  <hr>
  <a class:active={isActive('bad')} href={getHref('bad')} data-sveltekit-noscroll>Плохо (2)</a>
  <hr>
  <a class:active={isActive('worst')} href={getHref('worst')} data-sveltekit-noscroll>Ужастно (1)</a>
</div>


<style lang="scss">
  .switcher {
    display: flex;
    align-items: center;
    gap: 8px;

    font-weight: 600;

    a {
      display: block;
      width: max-content;

      text-wrap: nowrap;
      font-size: 14px;

      transition-property: opacity, border-color, color;
      transition-duration: 300ms;

      &:not(.active) {
        opacity: .5;
      }
    }

    a:not(.active):hover {
      opacity: .75;
    }

    hr {
      opacity: .1;
      height: 1.5em;
    }
  }
</style>