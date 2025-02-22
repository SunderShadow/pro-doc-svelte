<script>
  import {slide} from "svelte/transition"
  import InputGroup from "$ui-kit/Form/Group/Group.svelte"
  import Tag from "$ui-kit/Tag/Tag.svelte"
  import Button from "$ui-kit/Button/Button.svelte"
  import ColorsSelect from "$ui-kit/Form/Select/Colors.svelte"
  import DatePickerSelect from "$ui-kit/Form/Select/DatePicker.svelte"
  import Titled from "$ui-kit/Form/Select/Sections.svelte"
  import {onDestroy, onMount} from "svelte"
  import {PreventScrolling, ReEnableScrolling} from "prevent-scrolling"
  import Plus from "$ui-kit/icons/Plus.svelte";

  let colorsInputData = [
      {
          color: '#82C0C0',
          title: 'Авиамоторная',
          value: 1
      },
      {
          color: '#FFCB31',
          title: 'Авиамоторная',
          value: 2
      },
      {
          color: '#FFABB2',
          title: 'Авиамоторная',
          value: 3
      },
      {
          color: '#44B85C',
          title: 'Авиамоторная',
          value: 4
      },
      {
          color: '#44B85C',
          title: 'Авиамоторная',
          value: 5
      },
      {
          color: '#82C0C0',
          title: 'Авиамоторная',
          value: 6
      },
      {
          color: '#82C0C0',
          title: 'Авиамоторная',
          value: 7
      },
      {
          color: '#82C0C0',
          title: 'Авиамоторная',
          value: 8
      },
      {
          color: '#82C0C0',
          title: 'Авиамоторная',
          value: 9
      }
  ]

  let titleInputData = [
      {
          title: 'Специальность',
          name: 'speciality',
          items: [
              {
                  title: "Невролог взрослый",
                  value: 'nevr_vzr'
              },
              {
                  title: "Невролог детский",
                  value: 'nevr_child'
              }
          ]
      },
      {
          title: 'Клиника',
          name: 'clinic',
          items: [
              {
                  title: "Клиника востановительной неврологии",
                  value: 'nevr'
              },
              {
                  title: "Невролог детский",
                  value: 'nevr_child'
              }
          ]
      },
      {
          title: 'Услуга',
          name: "service",
          items: [
              {
                  title: "Неврология",
                  value: 'nevr'
              },
          ]
      }
  ]

  let allowScrolling

  onMount(() => {
      if (window.innerWidth <= 768) {
          PreventScrolling(allowScrolling)
      }
  })

  onDestroy(() => {
      if (window.innerWidth <= 768) {
          ReEnableScrolling()
      }
  })

  let screenWidth = $state(0);

  let {
      headerHeight,
      closeHandler
  } = $props()
</script>
<svelte:window bind:innerWidth={screenWidth}></svelte:window>
<section class="search-container page-container" style:--top={headerHeight + 'px'} transition:slide={{duration: screenWidth > 768 ? 0 : 300}} bind:this={allowScrolling}>
  <div class="mobile-title">
    <h2 class="title-1">Поиск</h2>
    <button onclick={closeHandler} class="mobile-title_icon"><Plus size="sm" type="primary" /></button>
  </div>
  <h3>Выберете клинику или запишитесь на приём</h3>

  <InputGroup>
    <Titled data={titleInputData} placeholder="Врач, клиника, болезнь, услуга" />
    <ColorsSelect data={colorsInputData} placeholder="Метро, район, округ, город МО" closeOnSelect={false}/>
    <DatePickerSelect placeholder="Дата приёма" />
    <Button>Найти</Button>
  </InputGroup>

  <div class="tags">
    <Tag>Простуда</Tag>
    <Tag>Женское здоровье</Tag>
    <Tag>Мужское здоровье</Tag>
    <Tag>Заболел ребёнок</Tag>
    <Tag>Аллергия и сыпь</Tag>
    <Tag>Травма</Tag>
    <Tag>Головная боль</Tag>
    <Tag>Тревога и депрессия</Tag>
    <Tag>Расстройство пищеварения</Tag>
    <Tag>Расшифровка анализов</Tag>
    <Tag>Проблемы с сердцем</Tag>
  </div>
</section>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  :global {
    header .search-container .date_picker {
      width: 100%;
    }
  }

  .search-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding-top: 2rem;
    padding-bottom: 2rem;

    > h3 {
      font-weight: 600;
      font-size: 1rem;
    }

    .tags {
      @media (min-width: map.get(env.$screen-size, desktop)) {
        width: 75%;
      }

      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
  }

  .mobile-title {
    display: flex;
    justify-content: space-between;
  }

  .mobile-title_icon {
    transform: rotate(45deg);
    background: none;
    border: none;
    padding: 0;
    margin: 0;
  }

  @media (min-width: map.get(env.$screen-size, tablet)) {
    .mobile-title {
      display: none;
    }
  }

  @media (max-width: map.get(env.$screen-size, tablet)) {
    .search-container {
      position: fixed;
      z-index: 5;

      height: calc(100vh - var(--top));
      overflow-y: auto;

      top: var(--top);
      left: 0;

      margin-left: 0;
      margin-right: 0;

      padding-left: 32px;
      padding-right: 32px;

      width: 100%;
      background-color: #fff;
    }
  }
</style>