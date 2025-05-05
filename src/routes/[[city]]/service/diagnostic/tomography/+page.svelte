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
          title: 'Компьютерная томография (КТ)',
          href: ''
      }
  ]

  let types = [
      [
          {
              title: 'КТ брюшной полости',
              key: ''
          },
          {
              title: 'КТ брюшной полости с контрастом',
              key: ''
          },
          {
              title: 'КТ височно-нижнечелюстного сустава',
              key: ''
          },
          {
              title: 'КТ височных костей',
              key: ''
          },
          {
              title: 'КТ глазных орбит',
              key: ''
          },
          {
              title: 'КТ голеностопного сустава',
              key: ''
          },
          {
              title: 'КТ головного мозга',
              key: ''
          },
          {
              title: 'КТ головного мозга с контрастом',
              key: ''
          },
          {
              title: 'КТ гортани',
              key: ''
          },
          {
              title: 'КТ грудного отдела',
              key: ''
          },
          {
              title: 'КТ грудной клетки',
              key: ''
          },
          {
              title: 'КТ грудной клетки с контрастом',
              key: ''
          },
          {
              title: 'КТ грудной полости с контрастом',
              key: ''
          },
          {
              title: 'КТ для пациентов с большим весом',
              key: ''
          },
          {
              title: 'КТ забрюшинного пространства',
              key: ''
          },
          {
              title: 'КТ забрюшинного пространства с контрастированием',
              key: ''
          },
          {
              title: 'КТ зубов',
              key: ''
          },
      ],
      [
          {
              title: 'КТ кавернозография',
              key: ''
          },
          {
              title: 'КТ коленного сустава',
              key: ''
          },
          {
              title: 'КТ копчика',
              key: ''
          },
          {
              title: 'КТ костей скелета',
              key: ''
          },
          {
              title: 'КТ легких',
              key: ''
          },
          {
              title: 'КТ лимфоузлов с контрастом',
              key: ''
          },
          {
              title: 'КТ лимфоузлов шеи',
              key: ''
          },
          {
              title: 'КТ локтевого сустава',
              key: ''
          },
          {
              title: 'КТ лучезапястного сустава',
              key: ''
          },
          {
              title: 'КТ лёгких с контрастом',
              key: ''
          },
          {
              title: 'КТ малого таза с контрастом',
              key: ''
          },
          {
              title: 'КТ матки',
              key: ''
          },
          {
              title: 'КТ мочевыводящих путей',
              key: ''
          },
          {
              title: 'КТ мягких тканей',
              key: ''
          },
          {
              title: 'КТ надпочечников',
              key: ''
          },
          {
              title: 'КТ надпочечников с контрастом',
              key: ''
          },
      ],
      [
          {
              title: 'КТ органов малого таза',
              key: ''
          },
          {
              title: 'КТ пазух носа',
              key: ''
          },
          {
              title: 'КТ печени',
              key: ''
          },
          {
              title: 'КТ печени с контрастом',
              key: ''
          },
          {
              title: 'КТ плечевого сустава',
              key: ''
          },
          {
              title: 'КТ поджелудочной железы с контрастированием',
              key: ''
          },
          {
              title: 'КТ позвоночника',
              key: ''
          },
          {
              title: 'КТ почек',
              key: ''
          },
          {
              title: 'КТ почек с контрастом',
              key: ''
          },
          {
              title: 'КТ пояснично-крестцового отдела',
              key: ''
          },
          {
              title: 'КТ с контрастом',
              key: ''
          },
          {
              title: 'КТ селезенки',
              key: ''
          },
          {
              title: 'КТ селезенки с контрастированием',
              key: ''
          },
          {
              title: 'КТ сердца',
              key: ''
          },
          {
              title: 'КТ сосудов',
              key: ''
          },
          {
              title: 'КТ стопы',
              key: ''
          },
      ],
      [
          {
              title: 'КТ суставов',
              key: ''
          },
          {
              title: 'КТ тазобедренного сустава',
              key: ''
          },
          {
              title: 'КТ челюсти',
              key: ''
          },
          {
              title: 'КТ шеи',
              key: ''
          },
          {
              title: 'КТ шеи с контрастом',
              key: ''
          },
          {
              title: 'КТ шеи, грудной клетки, позвоночника',
              key: ''
          },
          {
              title: 'КТ щитовидной железы',
              key: ''
          },
          {
              title: 'КТ-денситометрия позвоночника',
              key: ''
          },
          {
              title: 'КТ-энтерография (КТ тонкого кишечника)',
              key: ''
          },
          {
              title: 'МСКТ ангиография',
              key: ''
          },
          {
              title: 'МСКТ аорты',
              key: ''
          },
          {
              title: 'МСКТ брахиоцефальных артерий',
              key: ''
          },
          {
              title: 'МСКТ брюшной полости',
              key: ''
          },
          {
              title: 'МСКТ брюшной полости с контрастированием',
              key: ''
          },
          {
              title: 'МСКТ органов грудной клетки',
              key: ''
          },
          {
              title: 'МСКТ сердца',
              key: ''
          },
          {
              title: 'Мультиспиральная компьютерная томография (МСКТ)',
              key: ''
          },
          {
              title: 'ПЭТ-КТ',
              key: ''
          },
      ]
  ]
</script>

<svelte:head>
  <title>Компьютерная томография (КТ)</title>
  <link rel="preload" as="image" href={PreviewImg.img.src} media="(min-width: 426px)"/>
  <link rel="preload" as="image" href={PreviewImgMobile.img.src} media="(max-width: 425px)"/>
</svelte:head>

<section class="page-container">
  <div class="breadcrumbs">
    <Breadcrumbs list={breadcrumbs}/>
  </div>

  <div id="diagnostic_tomography_page_preview">
    <Preview title="Компьютерная томография (КТ) в Москве" image={PreviewImg.img.src} imageMobile={PreviewImgMobile.img.src} contentWidth={70}>
      <ul>
        <li>Где сделать КТ — цены от 450 рублей, 88288 отзывов</li>
        <li>664 адреса и телефона клиник Москвы</li>
      </ul>
    </Preview>
  </div>
</section>

<section class="page-container page-section">
  <h2 class="types-title">Виды компьютерной томографии (КТ)</h2>

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
  <h2 class="types-title">Что такое компьютерная томография (КТ)</h2>

  <p class="body-text-2">метод диагностики, при котором с помощью рентгеновских лучей создается 3D изображение органов и тканей. Процедура КТ может проводиться для различных частей тела, но подготовка и процесс проведения обычно остаются одинаковыми.</p>
</section>

<section class="page-container page-section">
  <h2 class="types-title">Как проходит компьютерная томография (КТ) </h2>

  <div class="process_list">
    <ListItem number="01">
      Перед процедурой КТ вам могут предложить снять металлические украшения и одежду с металлическими деталями, так как они могут искажать результаты изображения. Вы также можете получить инструкции о том, как вести себя во время процедуры.
    </ListItem>
    <ListItem number="02">
      Перед процедурой КТ вам могут предложить снять металлические украшения и одежду с металлическими деталями, так как они могут искажать результаты изображения. Вы также можете получить инструкции о том, как вести себя во время процедуры.
    </ListItem>
    <ListItem number="03">
      Проведение КТ занимает обычно несколько минут, но может занять и больше времени, в зависимости от того, какая часть тела исследуется. После процедуры вы можете вернуться к своей нормальной деятельности.
    </ListItem>
  </div>
</section>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  :global {
    @media (max-width: 500px) {
      #diagnostic_tomography_page_preview .preview {
        background-size: contain;
      }
    }

    @media (max-width: 360px) {
      #diagnostic_tomography_page_preview .preview {
        background-size: auto 210px;
      }
    }
  }

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