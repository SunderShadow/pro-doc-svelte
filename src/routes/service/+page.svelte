<script>
import {blur} from "svelte/transition"

import PreviewImage from "./_parts/assets/img/preview.jpeg?enhanced&format=webp"
import PreviewMobileImage from "./_parts/assets/img/preview-mobile.jpg?enhanced&format=webp"
import Enveloup from "./_parts/assets/img/0d74a883eb0f75e47bab53fcf0eb035b.jpeg?enhanced&format=webp"

import Select from "$ui-kit/Form/Select/Colors.svelte"
import Button from "$ui-kit/Button/Button.svelte"
import Input from "$ui-kit/Form/Input.svelte"
import Filters from "$ui-kit/icons/Filters.svelte"
import Preview from "$ui-kit/Preview/Preview.svelte"
import Plus from "$ui-kit/icons/Plus.svelte"
import FilterForm from "$lib/components/FilterForm.svelte"
import Checkbox from "$ui-kit/Form/Checkbox/Checkbox.svelte"
import SpecialityCard from "../doctors/_parts/SpecialityCard.svelte"

import {onMount} from "svelte"

let specialityItems = [
    {
        color: '#fff',
        title: 'Специальность 1',
        value: 'speciality_1'
    },
    {
        color: '#fff',
        title: 'Специальность 2',
        value: 'speciality_2'
    },
    {
        color: '#fff',
        title: 'Специальность 3',
        value: 'speciality_3'
    }
]

let screenWidth = $state(0)
let filtersOpen = $state(screenWidth > 768)

function openFilters() {
    filtersOpen = true
}

function closeFilters() {
    filtersOpen = false
}

function toggleFilters() {
    if (filtersOpen) {
        closeFilters()
    } else {
        openFilters()
    }
}

onMount(() => {
    if (screenWidth > 768) {
        openFilters()
    }
})
let specialities = [
    {
        title: "Акушер-гинеколог",
        href: ""
    },
    {
        title: "Аллерголог",
        href: ""
    },
    {
        title: "Аллерголог-иммунолог",
        href: ""
    },
    {
        title: "Ангиолог",
        href: ""
    },
    {
        title: "Андролог (уролог-андролог)",
        href: ""
    },
    {
        title: "Акушер-гинеколог",
        href: ""
    },
    {
        title: "Аллерголог",
        href: ""
    },
    {
        title: "Аллерголог-иммунолог",
        href: ""
    },
    {
        title: "Ангиолог",
        href: ""
    },
    {
        title: "Андролог (уролог-андролог)",
        href: ""
    },
    {
        title: "Акушер-гинеколог",
        href: ""
    },
    {
        title: "Аллерголог",
        href: ""
    },
    {
        title: "Аллерголог-иммунолог",
        href: ""
    },
    {
        title: "Ангиолог",
        href: ""
    },
    {
        title: "Андролог (уролог-андролог)",
        href: ""
    },
    {
        title: "Акушер-гинеколог",
        href: ""
    },
    {
        title: "Аллерголог",
        href: ""
    },
    {
        title: "Аллерголог-иммунолог",
        href: ""
    },
    {
        title: "Ангиолог",
        href: ""
    },
    {
        title: "Андролог (уролог-андролог)",
        href: ""
    },
]
</script>

<svelte:window bind:innerWidth={screenWidth} />

<svelte:head>
  <title>Врачи</title>
  <link rel="preload" as="image" href={PreviewImage.img.src} />
</svelte:head>

<section class="page-container">
  <Preview title="Медицинские услуги в клиниках Москвы" image={PreviewImage.img.src} imageMobile={PreviewMobileImage.img.src} height={1000}></Preview>
</section>

<section class="page-container page-section">
  <h2 class="booking-title">Запись к врачу в Москве</h2>

  <div class="main-wrapper">
    {#if filtersOpen}
      <div class="filter_section" transition:blur >
        <div class="filter_section-control">
          <h1>Фильтр</h1>
          <button class="filter_section-close_btn" onclick={closeFilters}><Plus size="sm"/></button>
        </div>
        <FilterForm>
          <div>
            <div><Select placeholder="Специализация" data={specialityItems}/></div>
            <div><Input placeholder="ФИО врача" /></div>
            <div><Input placeholder="Город, округ, район, метро" /></div>
          </div>


          <div>
            <div class="title-1">Клиника</div>
            <div><Checkbox label="Частная"/></div>
            <div><Checkbox label="Государственная"/></div>
          </div>

          <div class="submit">
            <Button fullWidth>Применить</Button>
            <Button fullWidth outline>Сбросить</Button>
          </div>
        </FilterForm>
      </div>
    {/if}
    <main>
      <h3 class="popular-title">Популярные услуги (топ 12)</h3>

      <button class="filter_section-open_btn" onclick={openFilters}>
        <Filters />
        Фильтры
      </button>


      <div class="cards">
        <SpecialityCard img={Enveloup.img.src} title="Платная скорая помощь" href="/"/>
        <SpecialityCard img={Enveloup.img.src} title="Водительская медкомиссия" href="/"/>
        <SpecialityCard img={Enveloup.img.src} title="Промывание носа" href="/"/>
        <SpecialityCard img={Enveloup.img.src} title="Удаление родинки" href="/"/>
        <SpecialityCard img={Enveloup.img.src} title="Прокол ушей" href="/"/>
        <SpecialityCard img={Enveloup.img.src} title="Лазерное удаление папиллом" href="/"/>
      </div>

      <h3 class="medical-services">Медицинские услуги в клиниках</h3>

      <div class="cards">
        <SpecialityCard img={Enveloup.img.src} title="Платная скорая помощь" href="/"/>
        <SpecialityCard img={Enveloup.img.src} title="Водительская медкомиссия" href="/"/>
        <SpecialityCard img={Enveloup.img.src} title="Промывание носа" href="/"/>
        <SpecialityCard img={Enveloup.img.src} title="Удаление родинки" href="/"/>
        <SpecialityCard img={Enveloup.img.src} title="Прокол ушей" href="/"/>
        <SpecialityCard img={Enveloup.img.src} title="Лазерное удаление папиллом" href="/"/>
      </div>
    </main>
  </div>
</section>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
  }

  .medical-services {
    margin-top: 96px;
    margin-bottom: 32px;
  }

  .popular-title {
    margin-bottom: 32px;
  }

  .filter_section {
    width: 240px;
    flex-shrink: 0;

    &-control {
      display: flex;
      justify-content: space-between;
      padding: 32px 16px 0 16px;
    }

    h1 {
      padding: 0;
    }
  }

  .booking-title {
    margin-bottom: 16px;
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

    border-bottom: 1px solid transparent;

    font-weight: 600;

    a {
      transition-property: border, color;
      padding-bottom: 4px;
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

  .speciality_list-title {
    margin-bottom: 64px;
  }

  .speciality_list {
    display: grid;
    gap: 8px 32px;

    font-weight: 600;

    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(var(--rows-count), 1fr);
  }

  @media (min-width: (map.get(env.$screen-size, tablet) + 1px)) {
    .filter_section-control {
      display: none;
    }
  }

  .filter_section-open_btn {
    display: none;
  }

  @media (max-width: map.get(env.$screen-size, tablet)) {
    .popular-title {
      font-size: 1.5rem
    }

    .cards {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }

    .main-wrapper {
      flex-direction: column;
    }

    .filter_section {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      z-index: 10;

      position: fixed;
      background-color: #fff;

      transition: transform 200ms;

      &-open_btn {
        width: fit-content;
        display: flex;
        align-items: center;
        font-weight: 600;
        gap: 8px;
        background: none;
        border: none;

        margin-bottom: 16px;
      }

      &-close_btn {
        background: none;
        border: none;
        transform: rotate(45deg);
      }
    }
  }

  @media (max-width: map.get(env.$screen-size, mobile)) {
    .speciality_list {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-auto-flow: row;
    }
  }

  :global {
    .filter_section-close_btn .svg-icon-container {
      --color: #{map.get(env.$color, primary)};
    }
  }
</style>