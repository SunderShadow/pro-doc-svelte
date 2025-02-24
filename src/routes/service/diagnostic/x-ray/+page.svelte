<script lang="ts">
  import Breadcrumbs from "$ui-kit/Breadcrumbs/Breadcrumbs.svelte"
  import Preview     from "$ui-kit/Preview/Preview.svelte"

  import PreviewImg         from "./_assets/img/preview.jpg?enhanced&format=webp"
  import PreviewImgMobile   from "./_assets/img/preview-mobile.jpg?enhanced&format=webp"

  import ListItem from "../_parts/ListItem.svelte";

  let breadcrumbs = [
      {
          title: 'Главная',
          href: '/'
      },
      {
          title: 'Диагностика',
          href: '/service/diagnostic/'
      },
      {
          title: 'Рентгенография в Москве',
          href: ''
      }
  ]

  let types = [
      [
          {
              title: 'Ангиография',
              key: ''
          },
          {
              title: 'Ирригоскопия',
              key: ''
          },
          {
              title: 'Коронарография',
              key: ''
          },
          {
              title: 'Маммография',
              key: ''
          },
          {
              title: 'Рентген брюшной полости',
              key: ''
          },
          {
              title: 'Рентген голени',
              key: ''
          },
          {
              title: 'Рентген голеностопного сустава',
              key: ''
          },
          {
              title: 'Рентген грудного отдела позвоночника',
              key: ''
          },
          {
              title: 'Рентген грудной клетки',
              key: ''
          },
      ],
      [
          {
              title: 'Рентген желудка',
              key: ''
          },
          {
              title: 'Рентген зубов',
              key: ''
          },
          {
              title: 'Рентген кисти',
              key: ''
          },
          {
              title: 'Рентген ключицы',
              key: ''
          },
          {
              title: 'Рентген коленного сустава',
              key: ''
          },
          {
              title: 'Рентген копчика',
              key: ''
          },
          {
              title: 'Рентген легких',
              key: ''
          },
          {
              title: 'Рентген локтевого сустава',
              key: ''
          },
          {
              title: 'Рентген лопатки',
              key: ''
          },
      ],
      [
          {
              title: 'Рентген лучезапястного сустава',
              key: ''
          },
          {
              title: 'Рентген носоглотки',
              key: ''
          },
          {
              title: 'Рентген пазух носа',
              key: ''
          },
          {
              title: 'Рентген пальцев руки',
              key: ''
          },
          {
              title: 'Рентген пищевода',
              key: ''
          },
          {
              title: 'Рентген плечевого сустава',
              key: ''
          },
          {
              title: 'Рентген позвоночника',
              key: ''
          },
          {
              title: 'Рентген поясничного отдела позвоночника',
              key: ''
          },
          {
              title: 'Рентген ребер',
              key: ''
          },
      ],
      [
          {
              title: 'Рентген стопы',
              key: ''
          },
          {
              title: 'Рентген суставов',
              key: ''
          },
          {
              title: 'Рентген таза',
              key: ''
          },
          {
              title: 'Рентген тазобедренного сустава',
              key: ''
          },
          {
              title: 'Рентген челюсти',
              key: ''
          },
          {
              title: 'Рентген черепа',
              key: ''
          },
          {
              title: 'Рентген шейного отдела позвоночника',
              key: ''
          },
          {
              title: 'Сальпингография',
              key: ''
          },
          {
              title: 'Урография',
              key: ''
          },
      ]
  ]
</script>

<svelte:head>
  <title>Рентгенография в Москве</title>
  <link rel="preload" as="image" href={PreviewImg.img.src} media="(min-width: 426px)"/>
  <link rel="preload" as="image" href={PreviewImgMobile.img.src} media="(max-width: 425px)"/>
</svelte:head>

<section class="page-container">
  <div class="breadcrumbs">
    <Breadcrumbs list={breadcrumbs}/>
  </div>

  <Preview title="Рентгенография в Москве" image={PreviewImg.img.src} imageMobile={PreviewImgMobile.img.src} contentWidth={70}>
    <ul>
      <li>Где сделать рентген — цены от 1 рубля, 132181 отзыв</li>
      <li>1391 адрес и телефон клиник Москвы</li>
    </ul>
  </Preview>
</section>

<section class="page-container page-section">
  <h2 class="types-title">Виды рентгенографии</h2>

  <div class="speciality_list" style:--rows-count={Math.ceil(types.length / 4)}>
    {#each types as slice}
      <div>
        {#each slice as {title, key}}
          <a href={'/' + key}>{title}</a>
        {/each}
      </div>
    {/each}
  </div>
</section>

<section class="page-container page-section">
  <h2 class="types-title">Что рентгенография</h2>

  <p class="body-text-2">Это метод диагностики, который использует рентгеновские лучи для создания изображений внутренних органов и тканей человека. Этот метод позволяет врачам видеть невидимые глазу человека структуры, такие как кости, зубы, легкие, сердце и другие органы. Во время рентгенографии пациенту необходимо находиться в позе, которая позволяет получить наилучшее изображение нужного органа или ткани. Рентгенография обычно является безопасной процедурой, но может быть нежелательной для беременных женщин, так как рентгеновские лучи могут нанести вред плоду.</p>
</section>

<section class="page-container page-section">
  <h2 class="types-title">Подготовка к рентгенографии</h2>

  <div class="process_list">
    <ListItem number="Ирригоскопия">
      за 3 дня до предполагаемого обследования соблюдать диету (исключить газообразующие продукты), накануне и в день исследования проводится очистительная клизма. Завтрак обязательно (каша).
    </ListItem>
    <ListItem number="Маммография">
      проводится с 6-го по 12-й день цикла.
    </ListItem>
    <ListItem number="Урография">
      проводится после консультации врача-рентгенолога. Вводится контрастное вещество и через 15 минут делаются снимки.
    </ListItem>
    <ListItem number="Рентген желудка">
      проводится натощак.
    </ListItem>
  </div>
</section>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .speciality_list {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    font-weight: 600;
    line-height: 25.6px;

    a + a {
      display: block;
      margin-top: 8px;

      @media (max-width: 700px) {
        margin-top: 8px;
      }
    }

    @media (max-width: 700px) {
      gap: 8px;

      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-auto-flow: row;
    }
  }

  h2 {
    margin-bottom: 64px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      margin-bottom: 32px;
    }
  }

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

  .process_list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 32px;
    gap: 32px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      margin-top: 16px;
      grid-template-columns: 1fr;
    }
  }
</style>