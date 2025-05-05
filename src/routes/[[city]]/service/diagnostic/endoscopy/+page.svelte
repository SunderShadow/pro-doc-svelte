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
          title: 'Эндоскопия',
          href: ''
      }
  ]

  let types = [
      [
          {
              title: 'Бронхоскопия (ФБС)',
              key: ''
          },
          {
              title: 'Виртуальная колоноскопия',
              key: ''
          },
          {
              title: 'Гастроскопия (ФГДС, ЭГДС)',
              key: ''
          },
      ],
      [
          {
              title: 'Капсульная эндоскопия',
              key: ''
          },
          {
              title: 'Колоноскопия (ФКС)',
              key: ''
          },
          {
              title: 'Подготовка к гастроскопии (ФГДС)',
              key: ''
          },
      ],
      [
          {
              title: 'Ретроградная холангиопанкреатография (РХПГ)',
              key: ''
          },
          {
              title: 'Трахеобронхоскопия',
              key: ''
          },
          {
              title: 'Эзофагоскопия',
              key: ''
          }
      ],
      [
          {
              title: 'Эндоскопические обследования в дневном стационаре',
              key: ''
          },
      ]
  ]
</script>

<svelte:head>
  <title>Эндоскопия</title>
  <link rel="preload" as="image" href={PreviewImg.img.src} media="(min-width: 426px)"/>
  <link rel="preload" as="image" href={PreviewImgMobile.img.src} media="(max-width: 425px)"/>
</svelte:head>

<section class="page-container">
  <div class="breadcrumbs">
    <Breadcrumbs list={breadcrumbs}/>
  </div>

  <div id="endoscopy_page_preview">
    <Preview title="Эндоскопия в Москве" image={PreviewImg.img.src} imageMobile={PreviewImgMobile.img.src} contentWidth={70}>
      <ul>
        <li>Где сделать эндоскопию — цены от 30 рублей, 150548 отзывов</li>
        <li>1939 адресов и телефонов клиник Москвы</li>
      </ul>
    </Preview>
  </div>
</section>

<section class="page-container page-section">
  <h2 class="types-title">Виды эндоскопии</h2>

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
  <h2 class="types-title">Что такое эндоскопия</h2>

  <p class="body-text-2">Эндоскопия (от греч. endon - внутри и skopeo - смотрю, исследую) – метод исследования внутренних органов с помощью осветительной и оптической систем – эндоскопов. Этот метод широко используется в диагностических и лечебных целях в хирургии, гастроэнтерологии, пульмонологии, оториноларингологии и в других областях медицины. Суть методики заключается во введении в просвет полых органов специального зонда с оптической системой и подсветкой. Это позволяет осмотреть стенки изнутри с увеличением, а также выполнить мелкие манипуляции: взять биопсию, извлечь инородное тело, иссечь полип и т.п.</p>
</section>

<section class="page-container page-section">
  <h2 class="types-title">Подготовка к эндоскопии</h2>

  <p class="body-text-2">Перед назначением процедуры требуется пройти осмотр профильного специалиста с выдачей направления. В соответствии с действующим приказом Министерства здравоохранения эндоскопические исследования проводятся по направлению лечащего врача. Если при обращении в клинику у вас нет направления, вы можете записаться на консультацию к врачу для его оформления.</p>
  <ul>
    <li>Перед назначением процедуры требуется пройти осмотр профильного специалиста с выдачей направления. В соответствии с действующим приказом Министерства здравоохранения эндоскопические исследования проводятся по направлению лечащего врача. Если при обращении в клинику у вас нет направления, вы можете записаться на консультацию к врачу для его оформления.</li>
    <li>Перед назначением процедуры требуется пройти осмотр профильного специалиста с выдачей направления. В соответствии с действующим приказом Министерства здравоохранения эндоскопические исследования проводятся по направлению лечащего врача. Если при обращении в клинику у вас нет направления, вы можете записаться на консультацию к врачу для его оформления.</li>
    <li>Общий анализ крови. Наличие у пациента ряда заболеваний (коагулопатия, тромбоцитопения либо портальная гипертензия) требуют особого внимания при проведении диагностики. Результаты анализа крови обязательно будут учтены врачом при проведении эндоскопии.</li>
  </ul>
  <p class="body-text-2">Перечисленные обследования носят рекомендательный характер и направлены на выявление противопоказаний и обеспечение максимальной безопасности во время проведения эндоскопических обследований. Все указанные обследования и анализы можно сдать в клиниках.</p>
</section>

<section class="page-container page-section">
  <h2 class="types-title">Показания к эндоскопии</h2>

  <p class="title-3">Список показаний к эндоскопическим исследованиям очень обширен. Они используются:</p>
  <div class="indications_list">
    <ListItem number="01">
      при наличии симптомов поражения слизистой оболочки (боли, нарушение пищеварения, кашель и т.п.);
    </ListItem>
    <ListItem number="02">
      при необходимости забора биопсии и других проб, которые невозможно взять иным способом;
    </ListItem>
    <ListItem number="03">
      для выполнения мелких манипуляций (иссечение полипов, удаление инородных тел) и т.п.
    </ListItem>
    <ListItem number="04">
      при подозрениях на доброкачественные или злокачественные опухоли;
    </ListItem>
    <ListItem number="05">
      при подозрениях на инородные тела;
    </ListItem>
    <ListItem number="06">
      при кровотечениях;
    </ListItem>
  </div>
</section>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  :global {
    @media (max-width: 500px) {
      #endoscopy_page_preview .preview {
        background-size: contain;
      }
    }

    @media (max-width: 360px) {
      #endoscopy_page_preview .preview {
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
      margin-top: 4px;
    }

    @media (max-width: 700px) {
      gap: 4px;

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

  .indications_list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 32px;
    gap: 32px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      margin-top: 16px;
    }

    @media (max-width: 570px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: map.get(env.$screen-size, mobile)) {
      grid-template-columns: 1fr;
    }
  }
</style>