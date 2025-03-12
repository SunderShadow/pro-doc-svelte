<script lang="ts">
    import {setContext} from "svelte"
    import {page} from "$app/state"

    import Breadcrumbs from "$ui-kit/Breadcrumbs/Breadcrumbs.svelte"
    import Preview     from "$ui-kit/Preview/Preview.svelte"

    import PreviewImg       from "./_assets/img/preview.jpeg?enhanced&format=webp"
    import PreviewImgMobile from "./_assets/img/preview-mobile.jpg?enhanced&format=webp"
    import AccountIcon      from "$ui-kit/icons/Account.svelte"

    import AppointmentsIcon    from "$ui-kit/icons/Appointments.svelte"
    import FavoriteDoctorIcon from "$ui-kit/icons/FavoriteDoctor.svelte"
    import ArrowRightIcon from "$ui-kit/icons/ArrowRight.svelte"

    let pageTitle = $state('')
    let breadcrumbs = $derived.by(() => {
        let breadcrumbs = [
            {
                title: 'Главная',
                href: '/',
            },
            {
                title: 'Личный кабинет',
                href: '/account',
            },
        ]

        if (pageTitle !== 'Личный кабинет') {
            breadcrumbs.push({
                title: pageTitle,
                href: '',
            })
        }

        return breadcrumbs
    })

    let {
        children
    } = $props()

    setContext('setPageTitle', (title) => {pageTitle = title})
</script>

<svelte:head>
  <title>{pageTitle}</title>
  {#if page.url.pathname === '/account'}
    <link rel="preload" as="image" href={PreviewImg.img.src} />
  {/if}
</svelte:head>

<section class="page-container">
  <div class="breadcrumbs">
    <Breadcrumbs list={breadcrumbs}/>
  </div>
  {#if page.url.pathname === '/account'}
    <div class="preview">
      <Preview title="Личный кабинет" image={PreviewImg.img.src} imageMobile={PreviewImgMobile.img.src} contentWidth={90} />
    </div>
  {/if}
</section>

<div class="main-wrapper page-container ">
  <aside class="navigation">
    <a class:active={page.url.pathname === '/account/profile'} href="/account/profile" data-sveltekit-noscroll>
      <AccountIcon />
      Профиль
    </a>
    <a class:active={['/account/favorite/doctors', '/account/favorite/clinics'].includes(page.url.pathname)} href="/account/favorite/doctors" data-sveltekit-noscroll>
      <FavoriteDoctorIcon />
      Избранное
    </a>
    <a class:active={page.url.pathname === '/account/appointments'} href="/account/appointments" data-sveltekit-noscroll>
      <AppointmentsIcon />
      Мои записи
    </a>
    <a class:active={page.url.pathname === '/account/reviews'} href="/account/reviews" data-sveltekit-noscroll>
      <AccountIcon />
      Мои отзывы
    </a>
  </aside>
  <div>
    <div class="header">
      {#if pageTitle !== 'Личный кабинет'}
        <a href="/account" class="back" data-sveltekit-noscroll><ArrowRightIcon size="sm"/></a>
      {/if}
      <h2>{pageTitle}</h2>
    </div>
    <main>
      {@render children?.()}
    </main>
  </div>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .preview{
    margin-bottom: 64px;
  }

  .breadcrumbs {
    margin-bottom: 40px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      margin: 16px 0;
    }
  }

  .main-wrapper {
    display: flex;
    gap: 32px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      flex-direction: column;
    }

    > *:last-child {
      width: 100%;
    }
  }

  .navigation {
    height: fit-content;
    @media (min-width: (map.get(env.$screen-size, tablet) + 1px)) {
      position: sticky;
      top: 32px;
    }

    width: 240px;
    flex-shrink: 0;
    padding: 16px 0;

    border: 1px solid rgba(map.get(env.$color, primary), .1);
    border-radius: 12px;

    a {
      display: flex;
      align-items: center;
      font-weight: 600;
      stroke-width: 1.4px;
      gap: 16px;

      padding: 8px 16px;
    }
  }

  .header {
    display: flex;
    align-items: center;
    gap: 16px;

    .back {
      transform: rotateY(180deg);
      opacity: .5;
    }
  }

  main {
    margin-top: 32px;
  }

</style>