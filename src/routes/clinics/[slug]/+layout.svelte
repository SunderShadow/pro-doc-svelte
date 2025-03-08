<script lang="ts">
    import {page} from "$app/state"
    import type { Breadcrumbs as BreadcrumbsType } from "$lib/types"

    import ClinicIcon from "./_assets/clinic_icon.png?enhanced&format=webp"
    import Breadcrumbs from "$ui-kit/Breadcrumbs/Breadcrumbs.svelte"

    import Filters from "../_parts/Filters.svelte"
    import PageSwitcher from "./_parts/PageSwitcher.svelte"
    import FiltersIcon from "$ui-kit/icons/Filters.svelte";
    import FilterDropdown from "$lib/components/FilterDropdown.svelte";

    let {
        children,
        data
    } = $props()

    const breadcrumbs: BreadcrumbsType = [
        {
            title: 'Главная',
            href: '/'
        },
        {
            title: 'Клиники',
            href: '/clinics'
        },
        {
            title: data.title,
            href: ''
        }
    ]

    let openFilters = $state()
    let screenSize = $state(0)

    const filters = [
        {
            id: 0,
            title: 'По времени записи '
        },
        {
            id: 1,
            title: 'По названию'
        },
        {
            id: 2,
            title: 'По цене'
        }
    ]
</script>

<svelte:window bind:innerWidth={screenSize}/>
<svelte:head>
  <title>{data.title}</title>
</svelte:head>
<div class="page-container breadcrumbs">
  <Breadcrumbs list={breadcrumbs} />
</div>

<main class="page-container">
  <div class="title_wrapper">
    <img class="clinic_icon" src={ClinicIcon.img.src} alt="">
    <h1>{data.title}</h1>
  </div>
  <div class="main-content">
    <div class="filters">
      <Filters bind:open={openFilters}/>
    </div>
    <div>
      {#if page.url.pathname.includes(data.slug + '/doctors') }
        <h2>Врачи Университетской клиник неврологии (24)</h2>
      {:else if (page.url.pathname.includes(data.slug + '/services'))}
        <h2>Услуги и цены Университетской клиники неврологии</h2>
      {:else if (page.url.pathname.includes(data.slug + '/promotions'))}
        <h2>Акции и специальные предложения Университетской клиники неврологии</h2>
      {:else if (page.url.pathname.includes(data.slug + '/reviews'))}
        <h2>Отзывы Университетской клиники неврологии</h2>
      {/if}
      <div class="switcher-wrapper">
        {#if screenSize < 1200}
          <div class="filters_actions">
            <button class="filters-open_btn" onclick={openFilters}>
              <FiltersIcon size="sm"/>
              Фильтры
            </button>

            {#if screenSize < 425}
              <FilterDropdown data={filters}/>
            {/if}
          </div>
        {/if}
        <div class="switcher"><PageSwitcher slug={data.slug}/></div>
      </div>
      {@render children?.()}
    </div>
  </div>
</main>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .breadcrumbs {
    margin-bottom: 32px;
    @media (max-width: map.get(env.$screen-size, tablet)) {
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

  .switcher-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px  16px;

    margin-bottom: 16px;

    @media (max-width: 500px) {
      display: block;
    }

    .filters_actions {
      padding-bottom: 7px;
    }

    .switcher {
      flex-shrink: 0;
      overflow: auto;
    }
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

    @media (max-width: map.get(env.$screen-size, tablet)) {
      flex-wrap: wrap;
    }
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