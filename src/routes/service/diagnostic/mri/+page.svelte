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
          title: 'Магнитно-резонансная томография (МРТ)',
          href: ''
      }
  ]

  let types = [
      {
          title: 'МРТ головы',
          items: [
              {
                  title: 'МРТ головного мозга',
                  key: ''
              },
              {
                  title: 'МРТ сосудов головного мозга',
                  key: ''
              },
              {
                  title: 'МРТ пазух носа',
                  key: ''
              },
              {
                  title: 'МРТ мягких тканей лица',
                  key: ''
              },
              {
                  title: 'МРТ турецкого седла',
                  key: ''
              },
              {
                  title: 'МРТ ангиография сосудов головного мозга',
                  key: ''
              },
              {
                  title: 'МРТ гипофиза',
                  key: ''
              },
              {
                  title: 'МРТ орбит глаз',
                  key: ''
              },
          ],
      },
      {
          title: 'МРТ позвоночника',
          items: [
              {
                  title: 'МРТ всего тела',
                  key: ''
              },
              {
                  title: 'МРТ крестцового отдела позвоночника',
                  key: ''
              },
              {
                  title: 'МРТ спинного мозга',
                  key: ''
              },
              {
                  title: 'МРТ поясничного отдела позвоночника',
                  key: ''
              },
              {
                  title: 'МРТ шейного отдела позвоночника',
                  key: ''
              },
              {
                  title: 'МРТ копчика',
                  key: ''
              },
              {
                  title: 'МРТ орбит глаз',
                  key: ''
              },
              {
                  title: 'МРТ орбит глаз',
                  key: ''
              },
              {
                  title: 'МРТ орбит глаз',
                  key: ''
              },
          ]
      },
      {
          title: 'МРТ суставов',
          items: [
              {
                  title: 'МРТ коленного сустава',
                  key: ''
              },
              {
                  title: 'МРТ локтевого сустава',
                  key: ''
              },
              {
                  title: 'МРТ локтевого сустава',
                  key: ''
              },
              {
                  title: 'МРТ тазобедренного сустава',
                  key: ''
              },
              {
                  title: 'МРТ кисти руки',
                  key: ''
              },
              {
                  title: 'МРТ плечевого сустава',
                  key: ''
              },
              {
                  title: 'МРТ голеностопного сустава',
                  key: ''
              },
              {
                  title: 'МРТ стопы',
                  key: ''
              },
              {
                  title: 'МРТ височно-нижнечелюстного сустава (ВНЧС)',
                  key: ''
              },
          ]
      },
      {
          title: 'МРТ внутренних органов',
          items: [
              {
                  title: 'МРТ брюшной полости и забрюшинного пространства',
                  key: ''
              },
              {
                  title: 'МРТ копчика',
                  key: ''
              },
              {
                  title: 'МРТ селезенки',
                  key: ''
              },
              {
                  title: 'МРТ печени',
                  key: ''
              },
              {
                  title: 'МРТ матки',
                  key: ''
              },
              {
                  title: 'МРТ мочевого пузыря',
                  key: ''
              },
              {
                  title: 'МРТ мошонки',
                  key: ''
              },
              {
                  title: 'МРТ надпочечников',
                  key: ''
              },
              {
                  title: 'МРТ поджелудочной железы',
                  key: ''
              },
              {
                  title: 'МРТ почек',
                  key: ''
              },
              {
                  title: 'МРТ сердца',
                  key: ''
              },
              {
                  title: 'МРТ кишечника',
                  key: ''
              },
          ]
      },
      {
          title: 'МРТ органов малого таза',
          items: [
              {
                  title: 'МРТ матки',
                  key: ''
              },
              {
                  title: 'МРТ мочевого пузыря',
                  key: ''
              },
              {
                  title: 'МРТ мошонки',
                  key: ''
              },
              {
                  title: 'МРТ яичников',
                  key: ''
              },
          ]
      },
      {
          title: 'МРТ шеи',
          items: [
              {
                  title: 'МРТ сосудов шеи',
                  key: ''
              },
              {
                  title: 'МРТ шейного отдела позвоночника',
                  key: ''
              },
              {
                  title: 'МРТ горла и гортани',
                  key: ''
              },
          ]
      },
      {
          title: 'МРТ с контрастом',
          items: [
              {
                  title: 'МРТ головы с контрастом',
                  key: ''
              },
              {
                  title: 'МРТ головного мозга с контрастом',
                  key: ''
              },
              {
                  title: 'МРТ позвоночника с контрастом',
                  key: ''
              },
              {
                  title: 'МРТ спинного мозга с контрастом',
                  key: ''
              },
              {
                  title: 'МРТ органов малого таза с контрастом',
                  key: ''
              },
              {
                  title: 'МРТ молочных желез с контрастом',
                  key: ''
              },
              {
                  title: 'МРТ гипофиза с контрастом',
                  key: ''
              },
              {
                  title: 'МРТ гипофиза с контрастом',
                  key: ''
              },
              {
                  title: 'МРТ брюшной полости с контрастом',
                  key: ''
              },
              {
                  title: 'МРТ сердца с контрастом',
                  key: ''
              },
          ]
      },
      {
          title: 'Прочее',
          items: [
              {
                  title: 'МРТ молочных желез',
                  key: ''
              },
              {
                  title: 'Диффузионная МРТ всего тела',
                  key: ''
              },
              {
                  title: 'МРТ нижних конечностей',
                  key: ''
              },
              {
                  title: 'МРТ для полных',
                  key: ''
              },
              {
                  title: 'МРТ круглосуточно',
                  key: ''
              },
          ]
      }
  ]

  let screenWidth = $state(0)
</script>

<svelte:window bind:innerWidth={screenWidth}></svelte:window>
<svelte:head>
  <title>Магнитно-резонансная томография (МРТ)</title>
  <link rel="preload" as="image" href={PreviewImg.img.src} media="(min-width: 426px)"/>
  <link rel="preload" as="image" href={PreviewImgMobile.img.src} media="(max-width: 425px)"/>
</svelte:head>

<section class="page-container">
  <div class="breadcrumbs">
    <Breadcrumbs list={breadcrumbs}/>
  </div>

  <Preview title="Магнитно-резонансная томография (МРТ) в Москве" image={PreviewImg.img.src} imageMobile={PreviewImgMobile.img.src} contentWidth={screenWidth > 1024 ? 75 : 70}>
    <ul>
      <li>Где сделать МРТ — цены от 400 рублей, 80083 отзыва</li>
      <li>556 адресов и телефонов клиник Москвы</li>
    </ul>
  </Preview>
</section>

<section class="page-container page-section">
  <div class="types_list" style:--rows-count={Math.ceil(types.length / 4)}>
    {#each types as section}
      <div>
        <div class="icon"></div>
        <div class="title-1">{section.title}</div>
        {#each section.items as {title, key}}
          <a href={'/' + key}>{title}</a>
        {/each}
      </div>
    {/each}
  </div>
</section>

<section class="page-container page-section">
  <h2>Эффективность МРТ</h2>

  <p class="body-text-2">МРТ (Магнитно-резонансная томография) имеет очень широкие показания, но чаще всего магнитно-резонансная томография применяется для диагностики заболеваний центральной нервной системы (головной и спинной мозг), опорно-двигательного аппарата (позвоночник, мышечно-суставная система, суставы) и ряда внутренних органов.</p>
  <p class="body-text-2">Это связано с тем, что другие диагностические методы, например рентгенография, малоинформативны при указанных заболеваниях. МРТ очень эффективна для изучения динамических процессов в тканях и органах - например, состояния кровотока и результатов его нарушения.</p>
  <p class="body-text-2">Благодаря МРТ специалисты получают детальные изображения, позволяющие выявить мельчайшие нарушения в организме пациента.</p>
  <p class="body-text-2">При необходимости процедура проводится с введением контрастного вещества (магневист, гадовист), что увеличивает возможности получения диагностической информации. При этом современная компьютерная техника позволяет создать точную трехмерную модель любого органа, что помогает врачу получить максимум сведений о его состоянии и установить точный диагноз.</p>
</section>


<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .types_list  {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    font-weight: 600;
    line-height: 25.6px;

    a + a {
      display: block;
      margin-top: 4px;
    }

    .title-1 {
      margin-bottom: 16px;
    }

    .icon {
      background-color: #C4C4C4;
      width: 56px;
      height: 56px;
      border-radius: 12px;
      margin-bottom: 16px;
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-auto-flow: row;
    }

    @media (max-width: map.get(env.$screen-size, mobile)) {
      grid-template-columns: 1fr;
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