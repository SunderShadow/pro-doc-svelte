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
              {
                  title: 'Перелом и ушиб рёбер',
                  key: ''
              },
              {
                  title: 'Перелом ключицы',
                  key: ''
              },
              {
                  title: 'Перелом костей носа',
                  key: ''
              },
              {
                  title: 'Перелом лодыжки',
                  key: ''
              },
              {
                  title: 'Перелом ноги',
                  key: ''
              },
              {
                  title: 'Перелом пальца ноги',
                  key: ''
              },
              {
                  title: 'Перелом пальца руки',
                  key: ''
              },
              {
                  title: 'Перелом руки или запястья',
                  key: ''
              },
              {
                  title: 'Перелом шейки бедра',
                  key: ''
              },
              {
                  title: 'Перитонит',
                  key: ''
              },
              {
                  title: 'Перхоть и себорейный дерматит',
                  key: ''
              },
              {
                  title: 'Пиелонефрит (инфекция почек)',
                  key: ''
              },
              {
                  title: 'Пищевое отравление',
                  key: ''
              },
              {
                  title: 'Пломбирование зубных каналов',
                  key: ''
              },
              {
                  title: 'Пневмония',
                  key: ''
              },
              {
                  title: 'Повышенное давление',
                  key: ''
              },
              {
                  title: 'Подагра',
                  key: ''
              },
              {
                  title: 'Позвоночная грыжа',
                  key: ''
              },
              {
                  title: 'Поликистоз яичников',
                  key: ''
              },
              {
                  title: 'Половые инфекции',
                  key: ''
              },
              {
                  title: 'Постхолецистэктомический синдром',
                  key: ''
              },
              {
                  title: 'Потливость (гипергидроз)',
                  key: ''
              },
              {
                  title: 'Предменструальный синдром (ПМС)',
                  key: ''
              },
              {
                  title: 'Пролежни',
                  key: ''
              },
              {
                  title: 'Простатит',
                  key: ''
              },
              {
                  title: 'Простуда (ОРЗ, ОРВИ)',
                  key: ''
              },
              {
                  title: 'Прыщи на лице',
                  key: ''
              },
              {
                  title: 'Псориаз (чешуйчатый лишай)',
                  key: ''
              },
              {
                  title: 'Пупочная грыжа',
                  key: ''
              },
          ]
      },
      {
          letter: 'Р',
          items: [
              {
                  title: 'Рак',
                  key: ''
              },
              {
                  title: 'Рак желудка',
                  key: ''
              },
              {
                  title: 'Рак лёгких',
                  key: ''
              },
              {
                  title: 'Рак матки (рак эндометрия)',
                  key: ''
              },
              {
                  title: 'Рак молочной железы (рак груди)',
                  key: ''
              },
              {
                  title: 'Рак простаты (предстательной железы)',
                  key: ''
              },
              {
                  title: 'Рак шейки матки',
                  key: ''
              },
              {
                  title: 'Рассеянный склероз',
                  key: ''
              },
              {
                  title: 'Растяжение сухожилий, связок и мышц',
                  key: ''
              },
              {
                  title: 'Ревматоидный артрит',
                  key: ''
              },
              {
                  title: 'Ринит аллергический',
                  key: ''
              },
              {
                  title: 'Ринит неаллергический',
                  key: ''
              },
              {
                  title: 'Родинка (невус)',
                  key: ''
              },
              {
                  title: 'Ротавирусная инфекция (кишечный грипп)',
                  key: ''
              },
          ]
      },
      {
          letter: 'С',
          items: [
              {
                  title: 'СПИД и ВИЧ',
                  key: ''
              },
              {
                  title: 'Сахарный диабет 2 типа',
                  key: ''
              },
              {
                  title: 'Свинка (паротит эпидемический)',
                  key: ''
              },
              {
                  title: 'Себорейный дерматит',
                  key: ''
              },
              {
                  title: 'Сердечная недостаточность',
                  key: ''
              },
              {
                  title: 'Синдром раздражённого кишечника (СРК)',
                  key: ''
              },
              {
                  title: 'Синусит',
                  key: ''
              },
              {
                  title: 'Сифилис',
                  key: ''
              },
              {
                  title: 'Скарлатина',
                  key: ''
              },
              {
                  title: 'Сколиоз позвоночника',
                  key: ''
              },
              {
                  title: 'Слизистый колит',
                  key: ''
              },
              {
                  title: 'Сотрясение мозга',
                  key: ''
              },
              {
                  title: 'Спастический колит',
                  key: ''
              },
              {
                  title: 'Стенокардия',
                  key: ''
              },
              {
                  title: 'Столбняк',
                  key: ''
              },
              {
                  title: 'Сухожильный ганглий',
                  key: ''
              },
          ]
      },
      {
          letter: 'Т',
          items: [
              {
                  title: 'Трещина заднего прохода',
                  key: ''
              },
              {
                  title: 'Триппер',
                  key: ''
              },
              {
                  title: 'Трихомониаз (трихомоноз)',
                  key: ''
              },
              {
                  title: 'Туберкулёз',
                  key: ''
              },
              {
                  title: 'Тугоухость',
                  key: ''
              }
          ]
      },
      {
          letter: 'У',
          items: [
              {
                  title: 'Удаление зуба мудрости',
                  key: ''
              },
              {
                  title: 'Угревая сыпь',
                  key: ''
              }
          ]
      },
      {
          letter: 'Ф',
          items: [
              {
                  title: 'Флегмонозная ангина',
                  key: ''
              },
              {
                  title: 'Флюс (дентальный абсцесс)',
                  key: ''
              },
              {
                  title: 'Фурункул и карбункул',
                  key: ''
              }
          ]
      },
      {
          letter: 'Х',
          items: [
              {
                  title: 'Хламидиоз',
                  key: ''
              },
              {
                  title: 'Холецистит острый',
                  key: ''
              },
              {
                  title: 'Хроническая почечная недостаточность',
                  key: ''
              },
              {
                  title: 'Хроническая сердечная недостаточность',
                  key: ''
              },
              {
                  title: 'Хронический обструктивный бронхит (ХОБЛ)',
                  key: ''
              },
              {
                  title: 'Хронический панкреатит',
                  key: ''
              },
              {
                  title: 'Хронический тонзиллит',
                  key: ''
              }
          ]
      },
      {
          letter: 'Ц',
          items: [
              {
                  title: 'Церебральный паралич',
                  key: ''
              },
              {
                  title: 'Цирроз печени',
                  key: ''
              },
              {
                  title: 'Цистит',
                  key: ''
              }
          ]
      },
      {
          letter: 'Ч',
          items: [
              {
                  title: 'Чесотка',
                  key: ''
              },
              {
                  title: 'Чешуйчатый лишай',
                  key: ''
              }
          ]
      },
      {
          letter: 'Ш',
          items: [
              {
                  title: 'Шизофрения',
                  key: ''
              }
          ]
      },
      {
          letter: 'Э',
          items: [
              {
                  title: 'Экзема (атопический дерматит, нейродермит)',
                  key: ''
              },
              {
                  title: 'Эндометриоз',
                  key: ''
              },
              {
                  title: 'Энтеробиоз',
                  key: ''
              },
              {
                  title: 'Энурез у детей (ребёнок писается)',
                  key: ''
              },
              {
                  title: 'Энцефалит клещевой',
                  key: ''
              },
              {
                  title: 'Эпилепсия',
                  key: ''
              },
              {
                  title: 'Эректильная дисфункция',
                  key: ''
              }
          ]
      },
      {
          letter: 'Я',
          items: [
              {
                  title: 'Язва желудка',
                  key: ''
              },
              {
                  title: 'Язвенно-некротический гингивит',
                  key: ''
              },
              {
                  title: 'Ячмень на глазу',
                  key: ''
              }
          ]
      }
  ]

  const existLetters = alphabet.map(i => i.letter)
  let columnsCount = $derived(screenWidth > 1060
      ? 5
      : screenWidth > 900 ? 4 : 3
  )

  function sliceTitles(items: Link[]) {
      let remainder = items.length % columnsCount;
      const perColumn = Math.floor(items.length / columnsCount);

      let columns = Array.from({ length: columnsCount }, () => []);

      let itemsIndex = 0;

      for (let i = 0; i < columnsCount; i++) {
          for (let z = 0; z < perColumn; z++) {
              columns[i].push(items[itemsIndex++]);
          }

          if (remainder > 0) {
              columns[i].push(items[itemsIndex++]);
              remainder--;
          }
      }

      return columns;
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
  <section style:--columns={columnsCount + 1}>
    {#each alphabet as row}
      <article id={row.letter}>
        <h3>{row.letter}</h3>
        {#each sliceTitles(row.items) as column}
          <div>
            {#each column as item}
              <a href={item.key} class="link-font-1">{item.title}</a>
            {/each}
          </div>
        {/each}
      </article>
    {/each}
  </section>
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

  a {
    line-height: 110%;
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

  section {
    display: flex;
    flex-direction: column;

    margin-top: 64px;

    > article {
      display: grid;
      gap: 32px;

      padding: 2rem 0;

      border-bottom: 1px solid rgba(map.get(env.$color, primary), 0.1);

      grid-template-columns: repeat(var(--columns), 1fr);


      > h3 {
        color: map.get(env.$color, primary);
        line-height: 140%;

        min-height: 0;

        word-wrap: break-word;
        word-break: break-all;
        max-width: 100%;
        min-width: 125px;

        @media (max-width: map.get(env.$screen-size, netbook)) {
          font-size: 1.5rem;
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