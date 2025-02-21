<script lang="ts">
    import {blur} from "svelte/transition"

    import DoctorListPreview from "./_parts/assets/img/doctor-list-preview.png?enhanced&format=webp"
    import DoctorListPreviewMobile from "./_parts/assets/img-mobile/doctor-list-preview.jpg?enhanced&format=webp"

    import Img1 from "./_parts/assets/img/Frame 30472.jpg?enhanced&format=webp"
    import Img2 from "./_parts/assets/img/Frame 30472-1.jpg?enhanced&format=webp"
    import Img3 from "./_parts/assets/img/Frame 30472-2.jpg?enhanced&format=webp"
    import Img4 from "./_parts/assets/img/Frame 30472-3.jpg?enhanced&format=webp"
    import Img5 from "./_parts/assets/img/Frame 30472-4.jpg?enhanced&format=webp"
    import Img6 from "./_parts/assets/img/Frame 30472-5.jpg?enhanced&format=webp"
    import Img7 from "./_parts/assets/img/Frame 30472-6.jpg?enhanced&format=webp"
    import Img8 from "./_parts/assets/img/Frame 30472-7.jpg?enhanced&format=webp"
    import Img9 from "./_parts/assets/img/Frame 30472-8.jpg?enhanced&format=webp"
    import Img10 from "./_parts/assets/img/Frame 30472-9.jpg?enhanced&format=webp"
    import Img11 from "./_parts/assets/img/Frame 30472-10.jpg?enhanced&format=webp"
    import Img12 from "./_parts/assets/img/Frame 30472-11.jpg?enhanced&format=webp"
    import Img13 from "./_parts/assets/img/Frame 30472-12.jpg?enhanced&format=webp"
    import Img14 from "./_parts/assets/img/Frame 30472-13.jpg?enhanced&format=webp"
    import Img15 from "./_parts/assets/img/Frame 30472-14.jpg?enhanced&format=webp"
    import Img16 from "./_parts/assets/img/Frame 30472-15.jpg?enhanced&format=webp"
    import Img17 from "./_parts/assets/img/Frame 30472-16.jpg?enhanced&format=webp"
    import Img18 from "./_parts/assets/img/Frame 30472-17.jpg?enhanced&format=webp"

    import Preview from "$ui-kit/Preview/Preview.svelte"
    import FilterForm from "../_parts/FilterForm.svelte"
    import SpecialityCard from "../_parts/SpecialityCard.svelte";
    import Plus from "$ui-kit/icons/Plus.svelte";
    import Filters from "$ui-kit/icons/Filters.svelte";

    let filtersOpen = $state(false)

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

<svelte:head>
  <title>Врачи</title>
  <link rel="preload" as="image" href={DoctorListPreview.img.src} />
</svelte:head>

<Preview title="Неврологи в Москве" image={DoctorListPreview.img.src} imageMobile={DoctorListPreviewMobile.img.src} height={1000}>
  <p class="body-text-1">Невролог — врач, который диагностирует и проводит лечение заболеваний
    центральной и периферической нервной системы — спинного и головного мозга,
    а также нервных волокон.</p>
</Preview>

<section class="page-container page-section">
  <h2 class="booking-title">Запись к врачу в Москве</h2>

  <div class="main-wrapper">
    {#if filtersOpen}
      <div class="filter_section" transition:blur >
        <div class="filter_section-control">
          <h1>Фильтр</h1>
          <button class="filter_section-close_btn" onclick={closeFilters}><Plus size="sm"/></button>
        </div>
        <FilterForm />
      </div>
    {/if}
    <main>
      <div class="switcher">
        <a class="active" href="">Взрослый врач</a>
        <a href="">Детский врач</a>
      </div>

      <h3 class="popular-title">Популярные взрослые врачи</h3>

      <button class="filter_section-open_btn" onclick={openFilters}>
        <Filters />
        Фильтры
      </button>


      <div class="cards">
        <SpecialityCard title="Гинеколог" img={Img1.img.src} href="/"/>
        <SpecialityCard title="Невролог" img={Img2.img.src} href="/"/>
        <SpecialityCard title="Гастроэнтеролог" img={Img3.img.src} href="/"/>
        <SpecialityCard title="Кардиолог" img={Img4.img.src} href="/"/>
        <SpecialityCard title="Офтальмотолог" img={Img5.img.src} href="/"/>
        <SpecialityCard title="ЛОР" img={Img6.img.src} href="/"/>
        <SpecialityCard title="Дерматолог" img={Img7.img.src} href="/"/>
        <SpecialityCard title="Терапевт" img={Img8.img.src} href="/"/>
        <SpecialityCard title="Психотерапевт" img={Img9.img.src} href="/"/>
        <SpecialityCard title="Проктолог" img={Img10.img.src} href="/"/>
        <SpecialityCard title="Эндакринолог" img={Img11.img.src} href="/"/>
        <SpecialityCard title="Маммолог" img={Img12.img.src} href="/"/>
        <SpecialityCard title="Стоматолог" img={Img13.img.src} href="/"/>
        <SpecialityCard title="Ортадонт" img={Img14.img.src} href="/"/>
        <SpecialityCard title="Уролог" img={Img15.img.src} href="/"/>
        <SpecialityCard title="Ортопед" img={Img16.img.src} href="/"/>
        <SpecialityCard title="Онколог" img={Img17.img.src} href="/"/>
        <SpecialityCard title="Флеболог" img={Img18.img.src} href="/"/>
      </div>
    </main>
  </div>
</section>

<section class="page-container page-section">
  <h2 class="speciality_list-title">Все специальности взрослых врачей</h2>

  <div class="speciality_list" style:--rows-count={Math.ceil(specialities.length / 3)}>
    {#each specialities as {title, href}}
      <div>
        <a {href}>{title}</a>
      </div>
    {/each}
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