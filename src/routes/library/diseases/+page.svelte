<script lang="ts">
  import Breadcrumbs from "$ui-kit/Breadcrumbs/Breadcrumbs.svelte";
  import Preview from "$ui-kit/Preview/Preview.svelte";
  import PreviewImage from "./_assets/img/preview.png?enhanced&format=webp"
  import Alphabet from "./_parts/Alphabet.svelte";

  let screenWidth = $state();

  let breadcrumbs = [
      {
          title: 'Главная',
          href: '/'
      },
      {
          title: 'Библиотека',
          href: '/'
      },
      {
          title: 'Заболевания',
          href: ''
      }
  ]

  type Link = {
      title: string,
      key: string
  }

  let alphabet = [
      {
          letter: 'Популярные',
          items: [
              {
                  title: 'Гастрит',
                  key: ''
              },
              {
                  title: 'Геморрой',
                  key: ''
              },
              {
                  title: 'Головная боль кластерная',
                  key: ''
              },
              {
                  title: 'Грыжи: основные виды и лечение',
                  key: ''
              },
              {
                  title: 'Депрессия',
                  key: ''
              },
              {
                  title: 'Молочница',
                  key: ''
              },
              {
                  title: 'Ожирение',
                  key: ''
              },
              {
                  title: 'Паническая атака',
                  key: ''
              },
          ]
      },
      {
          letter: 'А',
          items: [
              {
                  title: 'Аденоиды и аденоидэктомия',
                  key: ''
              },
              {
                  title: 'Аденокарцинома желудка',
                  key: ''
              },
              {
                  title: 'Аденома простаты (увеличение предстательной железы)',
                  key: ''
              },
              {
                  title: 'Акне (прыщи на лице, угревая сыпь)',
                  key: ''
              },
              {
                  title: 'Аллергия',
                  key: ''
              },
              {
                  title: 'Алопеция',
                  key: ''
              },
              {
                  title: 'Анальная трещина (трещина заднего прохода)',
                  key: ''
              },
              {
                  title: 'Ангина и хронический тонзиллит',
                  key: ''
              },
              {
                  title: 'Артериальная гипертензия',
                  key: ''
              }
          ]
      },
      {
          letter: 'Б',
          items: [
              {
                  title: 'Бактериальный вагиноз',
                  key: ''
              },
              {
                  title: 'Беременность внематочная',
                  key: ''
              },
              {
                  title: 'Бесплодие',
                  key: ''
              },
              {
                  title: 'Болезнь Боткина',
                  key: ''
              },
              {
                  title: 'Болезнь Крона',
                  key: ''
              },
              {
                  title: 'Болезнь Филатова',
                  key: ''
              },
              {
                  title: 'Бородавки и папилломы (+фото)',
                  key: ''
              },
              {
                  title: 'Бронхиальная астма',
                  key: ''
              },
              {
                  title: 'Бронхиальная астма у детей',
                  key: ''
              },
              {
                  title: 'Бронхит',
                  key: ''
              },
          ]
      },
      {
          letter: 'В',
          items: [
              {
                  title: 'ВИЧ',
                  key: ''
              },
              {
                  title: 'Вагинальный кандидоз',
                  key: ''
              },
              {
                  title: 'Вагинит',
                  key: ''
              },
              {
                  title: 'Вагиноз бактериальный',
                  key: ''
              },
              {
                  title: 'Варикозное расширение вен (варикоз)',
                  key: ''
              },
              {
                  title: 'Венерические болезни',
                  key: ''
              },
              {
                  title: 'Ветрянка (ветряная оспа)',
                  key: ''
              },
              {
                  title: 'Внематочная беременность',
                  key: ''
              },
              {
                  title: 'Воспаление лёгких (пневмония)',
                  key: ''
              },
              {
                  title: 'Воспаление среднего уха',
                  key: ''
              },
              {
                  title: 'Вши (педикулёз)',
                  key: ''
              },
              {
                  title: 'Выкидыш',
                  key: ''
              },
          ]
      },
      {
          letter: 'Г',
          items: [
              {
                  title: 'Гайморит',
                  key: ''
              },
              {
                  title: 'Гастрит',
                  key: ''
              },
              {
                  title: 'Гастроэнтерит у взрослых',
                  key: ''
              },
              {
                  title: 'Геморрой',
                  key: ''
              },
              {
                  title: 'Гепатит',
                  key: ''
              },
              {
                  title: 'Гепатит А',
                  key: ''
              },
              {
                  title: 'Гепатит В',
                  key: ''
              },
              {
                  title: 'Гепатит С',
                  key: ''
              },
              {
                  title: 'Герпес генитальный',
                  key: ''
              },
              {
                  title: 'Герпес глаза (герпетическое поражение глаз)',
                  key: ''
              },
              {
                  title: 'Герпес на губах (вирус простого герпеса)',
                  key: ''
              },
              {
                  title: 'Гестационный диабет',
                  key: ''
              },
              {
                  title: 'Гигрома',
                  key: ''
              },
              {
                  title: 'Гипергидроз',
                  key: ''
              },
              {
                  title: 'Гипертония (повышенное давление)',
                  key: ''
              },
              {
                  title: 'Гипотиреоз (гипофункция щитовидной железы)',
                  key: ''
              },
              {
                  title: 'Гипотония (пониженное давление)',
                  key: ''
              },
              {
                  title: 'Глаукома',
                  key: ''
              },
              {
                  title: 'Головная боль кластерная',
                  key: ''
              },
              {
                  title: 'Гонорея',
                  key: ''
              },
              {
                  title: 'Грибок на ногах (грибок стопы)',
                  key: ''
              },
              {
                  title: 'Грибок ногтей (онихомикоз)',
                  key: ''
              },
              {
                  title: 'Грипп',
                  key: ''
              },
              {
                  title: 'Грыжа диска',
                  key: ''
              },
              {
                  title: 'Грыжа паховая',
                  key: ''
              },
              {
                  title: 'Грыжа позвоночника (межпозвоночная грыжа)',
                  key: ''
              },
              {
                  title: 'Грыжа пупочная',
                  key: ''
              },
              {
                  title: 'Грыжи: основные виды и лечение',
                  key: ''
              },
          ]
      },
      {
          letter: 'Д',
          items: [
              {
                  title: 'Дентальный абсцесс',
                  key: ''
              },
              {
                  title: 'Депрессия',
                  key: ''
              },
              {
                  title: 'Дерматит контактный',
                  key: ''
              },
              {
                  title: 'Детские инфекционные болезни',
                  key: ''
              },
              {
                  title: 'Детский церебральный паралич (ДЦП)',
                  key: ''
              },
              {
                  title: 'Диабет гестационный',
                  key: ''
              },
              {
                  title: 'Диабет сахарный',
                  key: ''
              },
              {
                  title: 'Диабет сахарный 1 типа',
                  key: ''
              },
              {
                  title: 'Диабет сахарный 2 типа',
                  key: ''
              },
              {
                  title: 'Диспепсия',
                  key: ''
              },
              {
                  title: 'Доброкачественная гиперплазия предстательной железы (ДГПЖ)',
                  key: ''
              },
          ]
      },
      {
          letter: 'Ж',
          items: [
              {
                  title: 'Железистая лихорадка',
                  key: ''
              },
              {
                  title: 'Железодефицитная анемия',
                  key: ''
              },
              {
                  title: 'Желчнокаменная болезнь',
                  key: ''
              },
          ]
      },
      {
          letter: 'И',
          items: [
              {
                  title: 'ИППП',
                  key: ''
              },
              {
                  title: 'Импотенция (эректильная дисфункция)',
                  key: ''
              },
              {
                  title: 'Инсульт',
                  key: ''
              },
              {
                  title: 'Инфаркт миокарда',
                  key: ''
              },
              {
                  title: 'Инфекции, передающиеся половым путём',
                  key: ''
              },
              {
                  title: 'Инфекционный мононуклеоз',
                  key: ''
              },
          ]
      },
      {
          letter: 'К',
          items: [
              {
                  title: 'Камни в жёлчном пузыре',
                  key: ''
              },
              {
                  title: 'Камни в мочевом пузыре',
                  key: ''
              },
              {
                  title: 'Камни в почках (нефролитиаз)',
                  key: ''
              },
              {
                  title: 'Кандидоз влагалища',
                  key: ''
              },
              {
                  title: 'Кандидоз полости рта',
                  key: ''
              },
              {
                  title: 'Кандидоз полости рта у детей (+ фото)',
                  key: ''
              },
              {
                  title: 'Кандидоз у мужчин',
                  key: ''
              },
              {
                  title: 'Кандидозный стоматит у взрослых',
                  key: ''
              },
              {
                  title: 'Кандидозный стоматит у детей',
                  key: ''
              },
              {
                  title: 'Карбункул',
                  key: ''
              },
              {
                  title: 'Кариес',
                  key: ''
              },
              {
                  title: 'Катаракта возрастная',
                  key: ''
              },
              {
                  title: 'Киста яичника',
                  key: ''
              },
              {
                  title: 'Кистозный фиброз',
                  key: ''
              },
              {
                  title: 'Кишечная инфекция (пищевое отравление)',
                  key: ''
              },
              {
                  title: 'Кишечный грипп',
                  key: ''
              },
              {
                  title: 'Климакс (менопауза)',
                  key: ''
              },
              {
                  title: 'Коклюш',
                  key: ''
              },
              {
                  title: 'Колит язвенный (неспецифический язвенный колит)',
                  key: ''
              },
              {
                  title: 'Кольпит (вагинит)',
                  key: ''
              },
              {
                  title: 'Конъюнктивит',
                  key: ''
              },
              {
                  title: 'Корь',
                  key: ''
              },
              {
                  title: 'Крапивница',
                  key: ''
              },
          ]
      },
      {
          letter: 'Л',
          items: [
              {
                  title: 'Ларингит',
                  key: ''
              },
              {
                  title: 'Лишний вес',
                  key: ''
              },
          ]
      },
      {
          letter: 'М',
          items: [
              {
                  title: 'Мастит',
                  key: ''
              },
              {
                  title: 'Межпозвоночная грыжа',
                  key: ''
              },
              {
                  title: 'Меланома',
                  key: ''
              },
              {
                  title: 'Менингит',
                  key: ''
              },
              {
                  title: 'Мигрень',
                  key: ''
              },
              {
                  title: 'Микоз ногтей',
                  key: ''
              },
              {
                  title: 'Микоз стоп',
                  key: ''
              },
              {
                  title: 'Миома',
                  key: ''
              },
              {
                  title: 'Молочница',
                  key: ''
              },
              {
                  title: 'Молочница во рту (кандидоз полости рта) + фото',
                  key: ''
              },
              {
                  title: 'Молочница у детей (+ фото)',
                  key: ''
              },
              {
                  title: 'Молочница у мужчин',
                  key: ''
              },
              {
                  title: 'Моноцитарная ангина',
                  key: ''
              },
              {
                  title: 'Мочекаменная болезнь',
                  key: ''
              },
          ]
      },
      {
          letter: 'Н',
          items: [
              {
                  title: 'Паническая атака',
                  key: ''
              },
              {
                  title: 'Панкреатит острый',
                  key: ''
              },
              {
                  title: 'Панкреатит хронический',
                  key: ''
              },
              {
                  title: 'Папилломы',
                  key: ''
              },
              {
                  title: 'Паратонзиллярный абсцесс',
                  key: ''
              },
              {
                  title: 'Пародонтоз и пародонтит',
                  key: ''
              },
              {
                  title: 'Пароксизмальная тахикардия (учащённое сердцебиение)',
                  key: ''
              },
              {
                  title: 'Паротит эпидемический',
                  key: ''
              },
              {
                  title: 'Паховая грыжа',
                  key: ''
              },
              {
                  title: 'Педикулёз',
                  key: ''
              },
          ]
      }
  ]

  const existLetters = alphabet.map(i => i.letter)
  let columnsCount = $derived(screenWidth > 900 ? 5 : 4)

  function sliceTitles(items: Link[]) {
      let remainder = items.length % 5
      const perColumn = Math.floor(items.length / columnsCount)

      let columns = Array(columnsCount)

      let itemsIndex = 0

      for (let i = 0; i < columnsCount; i++) {
          columns[i] = []
          for (let z = 0; z < perColumn; z++) {
              columns[i].push(items[itemsIndex++])
          }

          if (remainder-- > 0) {
              columns[i].push(items[itemsIndex])
          }
      }

      return columns
  }
</script>

<svelte:window bind:innerWidth={screenWidth}/>

<svelte:head>
  <link rel="preload" as="image" href={PreviewImage.img.src} />
  <title>Заболевания</title>
</svelte:head>

<main class="page-container">
  <div class="breadcrumbs">
    <Breadcrumbs list={breadcrumbs}/>
  </div>
  <div class="diseases-preview">
    <Preview title="Заболевания" image={PreviewImage.img.src} imageMobile={PreviewImage.img.src}
    withGradient gradientWidth={screenWidth >= 768? 50 : 40}/>
  </div>
  <Alphabet {existLetters}/>
  <article>
    {#each alphabet as row}
      <section id={row.letter}>
        <h3>{row.letter}</h3>
        {#each sliceTitles(row.items) as column}
          <div>
            {#each column as item}
              <a href={item.key} class="link-font-1">{item.title}</a>
            {/each}
          </div>
        {/each}
      </section>
    {/each}
  </article>
</main>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  :global {
    :root {
      scroll-behavior: smooth;
    }
  }

  .breadcrumbs {
    @media (max-width: map.get(env.$screen-size, tablet)) {
      padding-top: 1rem;
    }
  }

  .diseases-preview {
    padding-top: 2rem;
    padding-bottom: 6rem;

    :global {
      .preview {
        background-size: contain;
      }
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      padding-top: 1rem;
      padding-bottom: 4rem;
    }
  }

  article {
    display: flex;
    flex-direction: column;

    margin-top: 64px;

    > section {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 32px;

      padding: 2rem 0;

      border-bottom: 1px solid rgba(map.get(env.$color, primary), 0.1);

      @media (max-width: 900px) {
        grid-template-columns: repeat(5, 1fr);
      }

      > h3 {
        color: map.get(env.$color, primary);
        line-height: 140%;

        min-height: 0;

        word-wrap: break-word;
        word-break: break-all;
        max-width: 100%;

        @media (max-width: map.get(env.$screen-size, netbook)) {
          font-size: 1.5rem;
        }

        @media (min-width: (map.get(env.$screen-size, tablet) + 1px)) {
          width: 125px;
        }
      }

      > div {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      &:first-of-type {
        span {
          font-weight: 500;
        }
      }

      @media (max-width: map.get(env.$screen-size, tablet)) {
        grid-template-columns: 1fr;
        gap: 8px;

        padding: 1rem 0;
      }
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      margin-top: 32px;
    }
  }
</style>