<script lang="ts">
  import {preloadData, replaceState} from "$app/navigation"

  import {page} from "$app/state"

  import Breadcrumbs from "$ui-kit/Breadcrumbs/Breadcrumbs.svelte"
  import Preview     from "$ui-kit/Preview/Preview.svelte"
  import FiltersIcon from "$ui-kit/icons/Filters.svelte"

  import PreviewImg         from "./_assets/img/preview.jpeg?enhanced&format=webp"
  import PreviewImgMobile   from "./_assets/img/preview-mobile.jpg?enhanced&format=webp"
  import Filters            from "./_parts/Filters.svelte"

  import Card from "$lib/components/ServiceSearchCard.svelte"

  let {data} = $props()

  const {
      popular,
      clinic
  } = data

  let breadcrumbs = [
      {
          title: 'Главная',
          href: '/'
      },
      {
          title: 'Врачи',
          href: '/doctors/list'
      }
  ]

  let category = $state(page.params.category)
  let openFilters = $state()

  async function changePageState(e) {
      e.preventDefault()

      const {href} = e.currentTarget
      const result = await preloadData(href)

      if (result.type === 'loaded') {
          title    = result.data.title
          items    = result.data.items
          category = result.data.category

          replaceState(href)
      }
  }
</script>

<svelte:head>
  <link rel="preload" as="image" href={PreviewImg.img.src} />
  <link rel="preload" as="image" href={PreviewImgMobile.img.src} />
</svelte:head>

<section class="page-container">
  <div class="breadcrumbs">
    <Breadcrumbs list={breadcrumbs}/>
  </div>

  <Preview title="Медицинские услуги в клиниках Москвы" image={PreviewImg.img.src} imageMobile={PreviewImgMobile.img.src} height={1000} />
</section>

<section class="page-container page-section">
  <h3 class="page-title">Запись к врачу в Москве</h3>
  <div class="main_container">
    <div class="filters">
      <Filters bind:open={openFilters}/>
    </div>

    <main>
      <h3 class="popular-title">Популярные услуги (топ 12)</h3>

      <button class="filters-open_btn" onclick={openFilters}>
        <FiltersIcon size="sm"/>
        Фильтры
      </button>

      <div class="cards">
        {#each popular as item}
          <Card title={item.title} img={item.img} href={'/' + item.key}/>
        {/each}
      </div>

      <h3 class="popular-title medical-title">Медицинские услуги в клиниках</h3>

      <button class="filters-open_btn" onclick={openFilters}>
        <FiltersIcon size="sm"/>
        Фильтры
      </button>

      <div class="cards">
        {#each popular as item}
          <Card title={item.title} img={item.img} href={'/' + item.key}/>
        {/each}
      </div>
    </main>
  </div>
</section>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .page-title {
    margin-bottom: 64px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      margin-bottom: 32px;
    }
  }

  .breadcrumbs {
    margin-bottom: 40px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      margin: 16px 0;
    }
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
  }

  .filters {
    flex-shrink: 0;
    width: 240px;
  }

  .main_container {
    display: flex;
    gap: 32px;
  }

  .medical-title,
  .popular-title {
    margin-bottom: 32px;
  }

  .medical-title {
    margin-top: 64px;
    @media (max-width: map.get(env.$screen-size, tablet)) {
      margin-top: 32px;
    }
  }

  .main-wrapper {
    margin-top: 64px;

    display: flex;
    gap: 32px;
  }

  .page-container {
    .body-text-1 {
      line-height: 28.8px;
    }
  }

  .filters-open_btn {
    display: none;
  }

  @media (max-width: map.get(env.$screen-size, tablet)) {
    .filters-open_btn {
      display: flex;
      align-items: center;

      gap: 8px;

      font-size: 14px;
      font-weight: 600;

      background: none;
      border: none;

      margin-bottom: 16px;
    }

    .main_container {
      flex-direction: column;
      gap: 0;
    }

    .filters {
      width: 0;
    }

    .popular-title {
      font-size: 1.5rem
    }

    .cards {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }

  @media (max-width: map.get(env.$screen-size, mobile)) {
    .speciality_list {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-auto-flow: row;
    }
  }
</style>