<script>
  import Preview from "$ui-kit/Preview/Preview.svelte"
  import PreviewImg from "./_assets/preview.png?enhanced&format=webp"
  import PreviewImgMobile from "./_assets/preview-mobile.png?enhanced&format=webp"
  import IllnessImg from "./_assets/cards/illness.png?enhanced&format=webp"
  import AdvicesImg from "./_assets/cards/advices.png?enhanced&format=webp"
  import SymptomsImg from "./_assets/cards/symptoms.png?enhanced&format=webp"
  import Card from "$ui-kit/ServiceCard/ServiceCard.svelte"
  import Breadcrumbs from "$ui-kit/Breadcrumbs/Breadcrumbs.svelte";

  let screeWidth = $state(0)

  const breadcrumbs = [
      {
          title: 'Главная',
          href: '/',
      },
      {
          title: 'Библиотека',
          href: '',
      }
  ]
</script>

<svelte:window bind:innerWidth={screeWidth}/>
<svelte:head>
  <title>Библиотека</title>
</svelte:head>

<section class="page-container">
  <div class="breadcrumbs"><Breadcrumbs list={breadcrumbs} /></div>

  <Preview
      title="Справочник болезней и симптомов"
      contentWidth={screeWidth > 1024 ? 60 : 70}
      image={PreviewImg.img.src}
      imageMobile={PreviewImgMobile.img.src}
  />
</section>

<section class="page-container page-section">
  <div class="cards">
    <div>
      <Card href="/library/diseases" name="Заболевания" image={IllnessImg.img.src}>
        Справочник заболеваний
      </Card>
    </div>
    <div>
      <Card href="/library/advices/all/1" name="Советы" image={AdvicesImg.img.src}>
        Статьи с советами на все случаи жизни
      </Card>
    </div>
    <div>
      <Card href="/library/symptoms" name="Симптомы" image={SymptomsImg.img.src} >
        Справочник симптомов
      </Card>
    </div>
  </div>
</section>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .breadcrumbs {
    margin-bottom: 32px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      margin-top: 16px;
      margin-bottom: 16px ;
    }
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;

    > * {
      aspect-ratio: 512 / 410;
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;

      > * {
        aspect-ratio: 328 / 200;
      }
    }
  }
</style>