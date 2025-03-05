<script>
import {page} from "$app/state"

let {
    slug
} = $props()
</script>

<div class="switcher">
  <a class:active={page.url.pathname.includes('/about')}      href={"/clinics/" + slug + '/about'} data-sveltekit-noscroll>О клинике</a>
  <a class:active={page.url.pathname.includes('/doctors')}    href={"/clinics/" + slug + '/doctors'} data-sveltekit-noscroll>Врачи</a>
  <a class:active={page.url.pathname.includes('/services')}   href={"/clinics/" + slug + '/services'} data-sveltekit-noscroll>Услуги и цены</a>
  <a class:active={page.url.pathname.includes('/promotions')} href={"/clinics/" + slug + '/promotions'} data-sveltekit-noscroll>Акции (10)</a>
  <a class:active={page.url.pathname.includes('/reviews')}    href={"/clinics/" + slug + '/reviews'} data-sveltekit-noscroll>Отзывы</a>
</div>

<style lang="scss">
  .switcher {
    width: max-content;
    display: flex;
    gap: 16px;
    margin-bottom: 16px;

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
</style>