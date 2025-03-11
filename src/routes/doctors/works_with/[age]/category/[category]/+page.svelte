<script lang="ts">
    import Preview from "$ui-kit/Preview/Preview.svelte"
    import DoctorListPreview from "./_assets/img/doctor-list-preview.png?enhanced&format=webp"
    import Button from "$ui-kit/Button/Button.svelte"
    import Magnifier from "$ui-kit/icons/Magnifier.svelte"
    import DoctorImage from "./_assets/img/doctor.png?enhanced&format=webp"
    import TagContainer from "./_parts/TagContainer.svelte"
    import FilterContainer from "./_parts/FilterContainer.svelte"
    import DoctorCard from "./_parts/DoctorCard.svelte"
    import Filters from "../../_parts/Filters.svelte"
    import Accordion from "$ui-kit/Accordion/Accordion.svelte"
    import Pagination from "$ui-kit/Pagination/Pagination.svelte"
    import Breadcrumbs from "$ui-kit/Breadcrumbs/Breadcrumbs.svelte"

    let screenWidth = $state()

    let breadcrumbs = [
        {
            title: 'Главная',
            href: '/'
        },
        {
            title: 'Врачи',
            href: '/doctors/works_with/adults'
        },
        {
            title: 'Взрослый врач Невролог',
            href: ''
        }
    ]

    let openFilters = $state()
    let page = $state(1)
</script>
<svelte:head>
  <link rel="preload" as="image" href={DoctorListPreview.img.src} media="(min-width: 426px)"/>
  <link rel="preload" as="image" href={DoctorImage.img.src} media="(max-width: 425px)" />
  <title>Врачи</title>
</svelte:head>

<svelte:window bind:innerWidth={screenWidth}/>

<main class="page-container">
  <div class="breadcrumbs">
    <Breadcrumbs list={breadcrumbs}/>
  </div>
    <div id="doctors_preview">
    <Preview
        title="Неврологи в Москве"
        image={DoctorListPreview.img.src}
        withGradient
        contentWidth={screenWidth > 900 ? 50 : 80}
        gradientWidth={50}
        imageMobile={DoctorListPreview.img.src}

    >
      <p class="body-text-1">
        Невролог — врач, который диагностирует и проводит лечение заболеваний
        центральной и периферической нервной системы — спинного и головного мозга,
        а также нервных волокон.
      </p>
    </Preview>
  </div>
  <section class="stats">
    <h2>Найдено <span>6340</span> врачей и <span>5373</span> отзывов пациентов</h2>
    <ul>
      <li class="body-text-1">Найдите хорошего невролога и запишитесь на приём</li>
      <li class="body-text-1">Цена приёма от 100 до 34500 рублей (средняя 2900 рублей)</li>
    </ul>
  </section>

  <div class="filters_container"><FilterContainer {openFilters}/></div>

  <div class="main-container">
    <Filters bind:open={openFilters}/>
    <div>
      <section class="filter-tags">
        <TagContainer/>
        <div class="button link-font-1">
          <Button>
            <Magnifier size="sm" type="secondary"/>
            Показать на карте
          </Button>
        </div>
      </section>
      <section class="doctors-list">
        {#if screenWidth > 360}
          <DoctorCard name="Горбунов Алексей Викторович" image={DoctorImage.img.src}/>
        {/if}
        <DoctorCard name="Горбунов Алексей Викторович" image={DoctorImage.img.src}/>

        <div class="show_more_btn">
          <Button outline fullWidth>Показать ещё</Button>
        </div>

        <div class="pagination">
          <Pagination total={145} bind:value={page}/>
        </div>
      </section>
    </div>
  </div>
  <section class="accordion-container">
    <h2>Вопросы и ответы</h2>
    <div>
      <Accordion title="Как записаться к неврологу в Москве?">
        <p class="body-text-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi asperiores beatae deleniti laudantium magnam neque quam quod ratione veritatis. Blanditiis commodi, debitis enim itaque laborum laudantium natus nostrum obcaecati placeat praesentium quis ratione similique sunt ullam unde veniam voluptatibus.</p>
      </Accordion>
      <Accordion title="Невролог (невропатолог) в Москве: цена приёма?">
        <p class="body-text-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi asperiores beatae deleniti laudantium magnam neque quam quod ratione veritatis. Blanditiis commodi, debitis enim itaque laborum laudantium natus nostrum obcaecati placeat praesentium quis ratione similique sunt ullam unde veniam voluptatibus.</p>
      </Accordion>
      <Accordion title="Посоветуйте невролога в Москве?">
        <p class="body-text-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi asperiores beatae deleniti laudantium magnam neque quam quod ratione veritatis. Blanditiis commodi, debitis enim itaque laborum laudantium natus nostrum obcaecati placeat praesentium quis ratione similique sunt ullam unde veniam voluptatibus.</p>
      </Accordion>
    </div>
  </section>
</main>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  $default-text: #000000;
  $mobile-adaptive: 600px;
  $mobile-small-adaptive: 330px;

  :global {
    @media (min-width: 500px) {
      #doctors_preview .preview {
        background-size: auto 100%;
        background-position: right;
      }
    }
  }

  .show_more_btn {
    margin-top: 32px;
  }

  .page-container {
    .body-text-1 {
      line-height: 28.8px;
    }

    .breadcrumbs {
      padding-bottom: 2rem;

      @media (max-width: map.get(env.$screen-size, tablet)) {
        padding: 1rem 0;
      }
    }

    .stats {
      display: flex;
      flex-direction: column;
      gap: 32px;

      padding-top: 96px;
      padding-bottom: 64px;

      width: 100%;

      @media (max-width: map.get(env.$screen-size, tablet)) {
        padding-top: 64px;
        padding-bottom: 32px;
      }
      
      @media (max-width: $mobile-adaptive) {
        gap: 16px;
      }

      > h2 {
        line-height: 52.8px;

        @media (max-width: map.get(env.$screen-size, netbook)) {
          font-size: 2rem;
          line-height: 32.2px;
        }

        @media (max-width: map.get(env.$screen-size, tablet)) {
          font-size: 1.5rem;
          line-height: 26.4px;
        }

        > span {
          color: map.get(env.$color, primary);
        }
      }

      > ul {
        > li {
          display: flex;

          color: $default-text;

          list-style-type: none;

          margin: 0;

          &::before {
            content: "•";
            color: map.get(env.$color, primary);

            font-size: 1.75rem;

            margin-right: 8px;
          }

          @media (max-width: map.get(env.$screen-size, tablet)) {
            font-size: 1rem;
          }
        }
      }
    }

    .main-container {
      display: flex;
      gap: 32px;

      padding-top: 1rem;

      > div {
        display: flex;
        flex-direction: column;
        min-width: 0;
      }

      :global {
        .filters_container {
          height: fit-content;
        }
      }

      @media (max-width: map.get(env.$screen-size, mobile)) {
      }

      @media (max-width: $mobile-small-adaptive) {
        width: 100%;
      }
    }

    .filter-tags {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    .doctors-list {
      display: flex;
      flex-direction: column;
    }

    :global {
      .button {
        > button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;

          width: 100%;
        }
      }
    }

    .pagination {
      padding-top: 2rem;
    }

    .accordion-container {
      display: flex;
      flex-direction: column;

      padding-top: 12rem;

      > h2 {
        padding-bottom: 3rem;

        @media (max-width: map.get(env.$screen-size, tablet)) {
          padding-bottom: 2rem;
        }
      }

      > div {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      @media (max-width: map.get(env.$screen-size, mobile)) {
        padding-top: 6rem;
      }
    }
  }
</style>