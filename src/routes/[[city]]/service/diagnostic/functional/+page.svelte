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
          title: 'Функциональная диагностика в Москве',
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
  <title>Функциональная диагностика в Москве</title>
  <link rel="preload" as="image" href={PreviewImg.img.src} media="(min-width: 426px)"/>
  <link rel="preload" as="image" href={PreviewImgMobile.img.src} media="(max-width: 425px)"/>
</svelte:head>

<section class="page-container">
  <div class="breadcrumbs">
    <Breadcrumbs list={breadcrumbs}/>
  </div>

  <div id="diagnostic_functional_page_preview">
    <Preview title="Функциональная диагностика в Москве" image={PreviewImg.img.src} imageMobile={PreviewImgMobile.img.src} contentWidth={70}>
      <ul>
        <li>Где сделать функциональную диагностику — цены от 66 рублей, 159746 отзывов</li>
        <li>2287 адресов и телефонов клиник Москвы </li>
      </ul>
    </Preview>
  </div>
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
  <h2 class="types-title">Что такое Функциональная диагностика</h2>

  <p class="body-text-2">Это метод исследования функций организма, основанный на регистрации и анализе изменений, происходящих в его системах при выполнении различных функциональных задач.</p>
</section>

<section class="page-container page-section">
  <h2 class="types-title">Как проходит функциональная диагностика </h2>

  <div class="process_list">
    <ListItem number="01" title="Подготовительный этап">
      Врач проводит с пациентом предварительную беседу, которая помогает определить цели и задачи исследования. Также на этом этапе врач может задать ряд вопросов, касающихся состояния здоровья пациента, чтобы исключить возможные противопоказания к проведению функциональной диагностики.
    </ListItem>
    <ListItem number="02" title="Измерение базовых показателей">
      Врач измеряет базовые показатели, такие как артериальное давление, частоту пульса и дыхания, температуру тела и другие параметры, которые могут влиять на результаты исследования..
    </ListItem>
    <ListItem number="03" title="Процедуры стимуляции">
      Врач измеряет базовые показатели, такие как артериальное давление, частоту пульса и дыхания, температуру тела и другие параметры, которые могут влиять на результаты исследования.
    </ListItem>
    <ListItem number="04" title="Мониторинг показателей">
      Во время проведения стимуляции врач мониторит базовые показатели и другие параметры, такие как электрокардиограмма (ЭКГ), электроэнцефалограмма (ЭЭГ), электромиограмма (ЭМГ) или другие методы измерения, которые могут использоваться в конкретном случае.
    </ListItem>
    <ListItem number="05" title="Анализ результатов">
      После окончания исследования врач производит анализ полученных данных и определяет, есть ли какие-либо отклонения от нормы или патологические изменения в работе организма.
    </ListItem>
    <ListItem number="06" title="Заключение">
      В зависимости от результатов исследования врач может дать рекомендации по дальнейшему лечению или наблюдению за пациентом.
    </ListItem>
  </div>
</section>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  :global {
    @media (max-width: 500px) {
      #diagnostic_functional_page_preview .preview {
        background-size: contain;
      }
    }

    @media (max-width: 360px) {
      #diagnostic_functional_page_preview .preview {
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