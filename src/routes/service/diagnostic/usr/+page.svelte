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
          title: 'Ультразвуковое исследование (УЗИ)',
          href: ''
      }
  ]

  let types = [
      [
          {
              title: '3D-4D УЗИ при беременности',
              key: ''
          },
          {
              title: 'Допплерография сердца',
              key: ''
          },
          {
              title: 'Допплерометрия',
              key: ''
          },
          {
              title: 'Дуплексное сканирование (УЗДС)',
              key: ''
          },
          {
              title: 'Дуплексное сканирование брахиоцефальных артерий',
              key: ''
          },
          {
              title: 'Пункция щитовидной железы',
              key: ''
          },
          {
              title: 'Стресс эхокардиография',
              key: ''
          },
          {
              title: 'Транскраниальное дуплексное сканирование (ТКДС)',
              key: ''
          },
          {
              title: 'Трансректальное УЗИ (ТРУЗИ) простаты',
              key: ''
          },
          {
              title: 'УЗДГ почек',
              key: ''
          },
          {
              title: 'УЗДГ сосудов головы и шеи',
              key: ''
          },
          {
              title: 'УЗИ брюшного отдела аорты',
              key: ''
          },
          {
              title: 'УЗИ брюшной полости',
              key: ''
          },
          {
              title: 'УЗИ вен нижних конечностей',
              key: ''
          },
          {
              title: 'УЗИ вилочковой железы',
              key: ''
          },
          {
              title: 'УЗИ глаза',
              key: ''
          },
          {
              title: 'УЗИ голеностопного сустава',
              key: ''
          },
          {
              title: 'УЗИ желудка',
              key: ''
          },
          {
              title: 'УЗИ желчного пузыря',
              key: 'УЗИ забрюшинного пространства'
          },
      ],
      [
          {
              title: 'УЗИ желудка',
              key: ''
          },
          {
              title: 'УЗИ желчного пузыря',
              key: ''
          },
          {
              title: 'УЗИ забрюшинного пространства',
              key: ''
          },
          {
              title: 'УЗИ кишечника',
              key: ''
          },
          {
              title: 'УЗИ коленного сустава',
              key: ''
          },
          {
              title: 'УЗИ легких',
              key: ''
          },
          {
              title: 'УЗИ лимфоузлов',
              key: ''
          },
          {
              title: 'УЗИ локтевого сустава',
              key: ''
          },
          {
              title: 'УЗИ лонного сочленения',
              key: ''
          },
          {
              title: 'УЗИ лучезапястного сустава',
              key: ''
          },
          {
              title: 'УЗИ малого таза',
              key: ''
          },
          {
              title: 'УЗИ матки',
              key: ''
          },
          {
              title: 'УЗИ молочных желез',
              key: ''
          },
          {
              title: 'УЗИ мочевого пузыря',
              key: ''
          },
          {
              title: 'УЗИ мочевого пузыря с определением остаточной мочи',
              key: ''
          },
          {
              title: 'УЗИ мочеточников',
              key: ''
          },
          {
              title: 'УЗИ мягких тканей',
              key: ''
          },
          {
              title: 'УЗИ на дому',
              key: ''
          },
          {
              title: 'УЗИ на ранних сроках беременности',
              key: ''
          },
          {
              title: 'УЗИ надпочечников',
              key: ''
          },
      ],
      [
          {
              title: 'УЗИ на дому',
              key: ''
          },
          {
              title: 'УЗИ на ранних сроках беременности',
              key: ''
          },
          {
              title: 'УЗИ надпочечников',
              key: ''
          },
          {
              title: 'УЗИ определение пола ребенка',
              key: ''
          },
          {
              title: 'УЗИ органов грудной клетки',
              key: ''
          },
          {
              title: 'УЗИ органов мошонки',
              key: ''
          },
          {
              title: 'УЗИ пазух носа',
              key: ''
          },
          {
              title: 'УЗИ паращитовидных желез',
              key: ''
          },
          {
              title: 'УЗИ печени',
              key: ''
          },
          {
              title: 'УЗИ плевральной полости',
              key: ''
          },
          {
              title: 'УЗИ плечевого сустава',
              key: ''
          },
          {
              title: 'УЗИ поджелудочной железы',
              key: ''
          },
          {
              title: 'УЗИ полового члена',
              key: ''
          },
          {
              title: 'УЗИ почек',
              key: ''
          },
          {
              title: 'УЗИ предстательной железы',
              key: ''
          },
          {
              title: 'УЗИ при беременности',
              key: ''
          },
          {
              title: 'УЗИ селезенки',
              key: ''
          },
          {
              title: 'УЗИ сердца',
              key: ''
          },
          {
              title: 'УЗИ скрининг 1-го триместра',
              key: ''
          },
          {
              title: 'УЗИ скрининг 2-го триместра',
              key: ''
          },
      ],
      [
          {
              title: 'УЗИ скрининг 3-го триместра',
              key: ''
          },
          {
              title: 'УЗИ слюнных желез',
              key: ''
          },
          {
              title: 'УЗИ сосудов',
              key: ''
          },
          {
              title: 'УЗИ сосудов головного мозга',
              key: ''
          },
          {
              title: 'УЗИ сосудов почек',
              key: ''
          },
          {
              title: 'УЗИ стопы',
              key: ''
          },
          {
              title: 'УЗИ суставов',
              key: ''
          },
          {
              title: 'УЗИ суставов кисти',
              key: ''
          },
          {
              title: 'УЗИ тазобедренных суставов',
              key: ''
          },
          {
              title: 'УЗИ шеи',
              key: ''
          },
          {
              title: 'УЗИ щитовидной железы',
              key: ''
          },
          {
              title: 'УЗИ эпителиального копчикового хода (ЭКХ)',
              key: ''
          },
          {
              title: 'УЗИ яичников',
              key: ''
          },
          {
              title: 'Ультразвуковая допплерография (УЗДГ)',
              key: ''
          },
          {
              title: 'Фолликулометрия',
              key: ''
          },
          {
              title: 'Чреспищеводная эхокардиография (ЧПЭхоКГ)',
              key: ''
          },
          {
              title: 'Эластометрия печени',
              key: ''
          }
      ]
  ]
</script>

<svelte:head>
  <title>Ультразвуковое исследование (УЗИ)</title>
  <link rel="preload" as="image" href={PreviewImg.img.src} media="(min-width: 426px)"/>
  <link rel="preload" as="image" href={PreviewImgMobile.img.src} media="(max-width: 425px)"/>
</svelte:head>

<section class="page-container">
  <div class="breadcrumbs">
    <Breadcrumbs list={breadcrumbs}/>
  </div>

  <Preview title="Ультразвуковое исследование (УЗИ) в Москве" image={PreviewImg.img.src} imageMobile={PreviewImgMobile.img.src} contentWidth={70}>
    <ul>
      <li>Где сделать УЗИ — цены от 100 рублей, 175086 отзывов</li>
      <li>2707 адресов и телефонов клиник Москвы</li>
    </ul>
  </Preview>
</section>

<section class="page-container page-section">
  <h2 class="types-title">Виды ультразвукового исследования (УЗИ)</h2>

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
  <h2 class="types-title">Что такое ультразвукового исследования (УЗИ)</h2>

  <p class="body-text-2">Ультразвуковая диагностика представляет собой исследование состояния тканей и органов с использованием ультразвуковых волн. При прохождении через границы тканей ультразвук отражается. Эти изменения фиксирует специальный датчик. Именно они являются основой полученного в ходе обследования изображения. Большую распространенность УЗИ получило благодаря своим преимуществам: отсутствием вмешательства в ткани и органы пациента, максимальной безопасности, информативности.</p>
</section>

<section class="page-container page-section">
  <h2 class="types-title">Как проходит УЗ-диагностика</h2>

  <div class="process_list">
    <ListItem number="01">
      Во время диагностики пациент лежит на кушетке, на кожу в исследуемой области врач наносит прозрачный гель.
    </ListItem>
    <ListItem number="02">
      После этого диагност берет датчик и начинает перемещать его по коже пациента. Изображение обследуемых внутренних систем и органов поступает на монитор.
    </ListItem>
    <ListItem number="03">
      Нужно учесть, что для проведения ряда ультразвуковых обследований может потребоваться определенная подготовка. В частности, при ультразвуковом обследовании мочевого пузыря необходимо, чтобы он был наполнен. Это гарантирует получение более точных результатов.
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
      margin-top: 16px;

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