<script lang="ts">
    import type { Breadcrumbs as BreadcrumbsType } from "$lib/types"

    import Breadcrumbs from "$ui-kit/Breadcrumbs/Breadcrumbs.svelte"

    import ClinicCard  from "./_parts/ClinicCard.svelte"
    import Filters     from "./_parts/Filters.svelte"
    import FiltersIcon from "$ui-kit/icons/Filters.svelte"

    import Button     from "$ui-kit/Button/Button.svelte"
    import Pagination from "$ui-kit/Pagination/Pagination.svelte"
    import Preview    from "$ui-kit/Preview/Preview.svelte"

    import PreviewImg from "./_assets/preview.png?enhanced&format=webp"
    import PreviewImgMobile from "./_assets/preview-mobile.png?enhanced&format=webp"

    const breadcrumbs: BreadcrumbsType = [
        {
            title: 'Главная',
            href: '/'
        },
        {
            title: 'Клиники',
            href: ''
        },
    ]

    let openFilters = $state()
    let screenSize = $state(0)

    let page = $state(1)
</script>

<svelte:window bind:innerWidth={screenSize}/>
<svelte:head>
  <title>Клиники</title>
</svelte:head>

<section class="breadcrumbs page-container">
  <Breadcrumbs list={breadcrumbs} />
</section>
<section class="page-container">
  <Preview
      title="Лечебные учреждения Москвы"
      image={PreviewImg.img.src}
      imageMobile={PreviewImgMobile.img.src}
      gradientWidth={45}
      contentWidth={screenSize < 980   ? 80 : 60}
      withGradient
  >
    <ul class="body-text-2">
      <li>20767 клиник в Москве с адресами и телефонами</li>
      <li>Сделайте выбор из списка лучших клиник в Москве и запишитесь на приём к врачу в два клика.</li>
      <li>315774 проверенных отзыва пациентов, цены на услуги, номера телефонов, сайты, адреса и схемы проезда</li>
    </ul>
  </Preview>
</section>

<main class="page-container page-section">
  <section class="stats">
    <h1>Адреса <span>20767</span> лечебных учереждений</h1>
  </section>

  <div class="main-content">
    <div class="filters">
      <Filters bind:open={openFilters}/>
    </div>
    <div>
      {#if screenSize <= 768}
        <div class="filters_actions">
          <button class="filters-open_btn" onclick={openFilters}>
            <FiltersIcon size="sm"/>
            Фильтры
          </button>
        </div>
      {/if}

      <div class="cards">
        <ClinicCard />
        <ClinicCard />

        <Button outline fullWidth>Показать ещё</Button>
        <Pagination total={145} bind:value={page} />
      </div>
    </div>
  </div>
</main>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .stats {
    margin-bottom: 32px;

    span {
      color: map.get(env.$color, primary);
    }
  }

  .cards {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .breadcrumbs {
    margin-bottom: 32px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }

  h2 {
    font-size: 32px;
    margin-bottom: 16px;

    @media (max-width: map.get(env.$screen-size, netbook)) {
      font-size: 24px;
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      font-size: 18px;
    }
  }

  .main-content {
    display: flex;
    gap: 32px;

    > div:last-child {
      flex-grow: 1;
      min-width: 0;

    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      flex-direction: column;
      gap: 0;
    }
  }


  .filters_actions {
    margin-bottom: 16px;
  }

  .filters_actions {
    display: flex;
    justify-content: space-between;
  }

  .clinic_icon {
    width: 70px;
    height: 70px;
  }

  .title_wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 64px;

    flex-wrap: wrap;
  }

  h1 {
    font-size: 48px;

    @media (max-width: map.get(env.$screen-size, netbook)) {
      font-size: 32px;
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      font-size: 24px;
    }
  }

  .filters {
    width: 240px;
    flex-shrink: 0;

    @media (max-width: map.get(env.$screen-size, netbook)) {
      width: 207px;
    }
  }


  @media (max-width: 1200px) {
    .filters-open_btn {
      display: flex;
      align-items: center;

      gap: 8px;

      font-size: 14px;
      font-weight: 600;

      background: none;
      border: none;
    }
  }
</style>