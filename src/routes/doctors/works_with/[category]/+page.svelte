<script lang="ts">
  import type {Doctor} from "$lib/types"

  import {preloadData, replaceState} from "$app/navigation"

  import {page} from "$app/state"

  import Breadcrumbs from "$ui-kit/Breadcrumbs/Breadcrumbs.svelte"
  import Preview     from "$ui-kit/Preview/Preview.svelte"
  import FiltersIcon from "$ui-kit/icons/Filters.svelte"

  import DoctorListPreview       from "./_assets/img/doctor-list-preview.png?enhanced&format=webp"
  import DoctorListPreviewMobile from "./_assets/img/doctor-list-preview_mobile.jpg?enhanced&format=webp"
  import Filters                 from "./_parts/Filters.svelte"
  import SpecialitiesList        from "./_parts/SpecialitiesList.svelte"

  import Card from "$lib/components/ServiceSearchCard.svelte"

  let {data} = $props()

  let items = $state(data.items)
  let title = $state(data.title)

  let specialities: Array<Doctor.Speciality> = data.specialities

  let breadcrumbs = [
      {
          title: 'Главная',
          href: '/'
      },
      {
          title: 'Врачи',
          href: ''
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
  <title>Врачи|{title}</title>
  <link rel="preload" as="image" href={DoctorListPreview.img.src} />
</svelte:head>

<section class="page-container">
  <div class="breadcrumbs">
    <Breadcrumbs list={breadcrumbs}/>
  </div>

  <Preview title="Неврологи в Москве" image={DoctorListPreview.img.src} imageMobile={DoctorListPreviewMobile.img.src} height={1000}>
    <p class="body-text-1">Невролог — врач, который диагностирует и проводит лечение заболеваний
      центральной и периферической нервной системы — спинного и головного мозга,
      а также нервных волокон.</p>
  </Preview>
</section>

<section class="page-container page-section">
  <h3 class="page-title">Запись к врачу в Москве</h3>
  <div class="main_container">
    <div class="filters">
      <Filters bind:open={openFilters}/>
    </div>

    <main>
      <div class="switcher">
        <a class:active={category === 'adults'} href="/doctors/works_with/adults" onclick={changePageState}>Взрослый врач</a>
        <a class:active={category === 'children'} href="/doctors/works_with/children" onclick={changePageState}>Детский врач</a>
      </div>

      <h3 class="popular-title">{title}</h3>

      <button class="filters-open_btn" onclick={openFilters}>
        <FiltersIcon size="sm"/>
        Фильтры
      </button>

      <div class="cards">
        {#each items as item}
          <Card title={item.title} img={item.img} href={'/' + item.speciality}/>
        {/each}
      </div>
    </main>
  </div>
</section>

<SpecialitiesList specialities={specialities}/>

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

  .popular-title {
    margin-bottom: 32px;
  }

  .main-wrapper {
    margin-top: 64px;

    display: flex;
    gap: 32px;
  }

  .switcher {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;

    font-weight: 600;

    a {
      transition-property: border-color, color;
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