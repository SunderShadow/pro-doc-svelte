<script>
import {page} from "$app/state"

let {
    slug
} = $props()

</script>

<div class="switcher">
  <a class:active={page.url.pathname.includes(slug + '/about')}      href={"/clinics/" + slug + '/about'} data-sveltekit-noscroll>О клинике</a>
  <a class:active={page.url.pathname.includes(slug + '/doctors')}    href={"/clinics/" + slug + '/doctors'} data-sveltekit-noscroll>Врачи</a>
  <a class:active={page.url.pathname.includes(slug + '/services')}   href={"/clinics/" + slug + '/services/consulting'} data-sveltekit-noscroll>Услуги и цены</a>
  <a class:active={page.url.pathname.includes(slug + '/promotions')} href={"/clinics/" + slug + '/promotions'} data-sveltekit-noscroll>Акции (10)</a>
  <a class:active={page.url.pathname.includes(slug + '/reviews')}    href={"/clinics/" + slug + '/reviews/clinic'} data-sveltekit-noscroll>Отзывы</a>
</div>

<style lang="scss">
  .switcher {
    width: max-content;
    display: flex;
    gap: 16px;

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