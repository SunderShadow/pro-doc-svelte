<script lang="ts">
    import {setContext} from "svelte"
    import {page} from "$app/state"

    import Breadcrumbs from "$ui-kit/Breadcrumbs/Breadcrumbs.svelte"
    import Preview     from "$ui-kit/Preview/Preview.svelte"

    import PreviewImg       from "./_assets/img/preview.jpeg?enhanced&format=webp"
    import PreviewImgMobile from "./_assets/img/preview-mobile.jpg?enhanced&format=webp"
    import AccountIcon      from "$ui-kit/icons/Account.svelte"

    import AppoinmentsIcon    from "$ui-kit/icons/Appoinments.svelte"
    import FavoriteDoctorIcon from "$ui-kit/icons/FavoriteDoctor.svelte"
    import ArrowRightIcon from "$ui-kit/icons/ArrowRight.svelte"

    let pageTitle = $state('Аккаунт')
    let breadcrumbs = $derived([
        {
            title: 'Главная',
            href: '/',
        },
        {
            title: 'Личный кабинет',
            href: '/account',
        },
        {
            title: pageTitle,
            href: '',
        }
    ])

    let {
        children
    } = $props()

    setContext('setPageTitle', (title) => {pageTitle = title})
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <link rel="preload" as="image" href={PreviewImg.img.src} />
</svelte:head>

<section class="page-container">
  <div class="breadcrumbs">
    <Breadcrumbs list={breadcrumbs}/>
  </div>

  <Preview title="Личный кабинет" image={PreviewImg.img.src} imageMobile={PreviewImgMobile.img.src} contentWidth={90} />
</section>

<div class="main-wrapper page-container page-section">
  <aside class="navigation">
    <a class:active={page.url.pathname === '/account/profile'} href="/account/profile">
      <AccountIcon />
      Профиль
    </a>
    <a class:active={page.url.pathname === '/account/favorite'} href="/account/favorite">
      <FavoriteDoctorIcon />
      Избранное
    </a>
    <a class:active={page.url.pathname === '/account/appointments'} href="/account/appointments">
      <AppoinmentsIcon />
      Мои записи
    </a>
    <a class:active={page.url.pathname === '/account/reviews'} href="/account/reviews">
      <AccountIcon />
      Мои отзывы
    </a>
  </aside>
  <div>
    <div class="header">
      <div class="back"><ArrowRightIcon size="sm"/></div>
      <h2>Профиль</h2>
    </div>
    <main>
      {@render children?.()}
    </main>
  </div>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

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
    @media (min-width: (map.get(env.$screen-size, tablet) + 1px)) {
      position: sticky;
      top: 20%;
    }

    width: 240px;
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
    border: 1px solid rgba(map.get(env.$color, primary), .1);
    border-radius: 12px;
    padding: 32px;
    margin-top: 32px;
  }
</style>