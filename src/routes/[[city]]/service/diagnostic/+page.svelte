<script lang="ts">
  import Doctors      from "$lib/assets/images/services/doctors.png?enhanced&format=webp"
  import Services     from "$lib/assets/images/services/services.jpg?enhanced&format=webp"
  import Diagnostics  from "$lib/assets/images/services/diagnostics.jpg?enhanced&format=webp"
  import Consultation from "$lib/assets/images/services/consultation.jpg?enhanced&format=webp"
  import Pediatrician from "$lib/assets/images/services/pediatrician.jpg?enhanced&format=webp"
  import Directory    from "$lib/assets/images/services/directory.png?enhanced&format=webp"

  import Breadcrumbs from "$ui-kit/Breadcrumbs/Breadcrumbs.svelte"
  import Preview     from "$ui-kit/Preview/Preview.svelte"

  import PreviewImg         from "./_assets/img/preview.jpg?enhanced&format=webp"
  import PreviewImgMobile   from "./_assets/img/preview-mobile.png?enhanced&format=webp"

  import Card from "$ui-kit/ServiceCard/ServiceCard.svelte"

  let breadcrumbs = [
      {
          title: 'Главная',
          href: '/'
      },
      {
          title: 'Диагностика',
          href: ''
      }
  ]

</script>

<svelte:head>
  <title>Диагностика</title>
  <link rel="preload" as="image" href={PreviewImg.img.src} />
  <link rel="preload" as="image" href={PreviewImgMobile.img.src} />
</svelte:head>

<section class="page-container">
  <div class="breadcrumbs">
    <Breadcrumbs list={breadcrumbs}/>
  </div>

  <div id="dignostic_page_preview">
    <Preview title="Диагностика в клиниках Москвы" image={PreviewImg.img.src} imageMobile={PreviewImgMobile.img.src} />
  </div>
</section>

<section class="page-container page-section">
  <div class="cards">
    <div class="double">
      <Card href="/service/diagnostic/endoscopy" name="Эндоскопия" image={Doctors.img.src} double>
        На нашем портале вы можете выбрать врача из лучших клиник Москвы и получить скидку до 65%.
      </Card>
    </div>
    <div class="ultrasound">
      <Card href="/service/diagnostic/usr" name="УЗИ" image={Services.img.src} >
        На нашем портале вы можете выбрать врача из лучших клиник Москвы
      </Card>
    </div>
    <div>
      <Card href="/service/diagnostic/mri" name="МРТ" image={Diagnostics.img.src}>
        На нашем портале вы можете выбрать врача из лучших клиник Москвы
      </Card>
    </div>
    <div id="online_consulting_card_wrapper">
      <Card href="/service/diagnostic/tomography" name="КТ" image={Consultation.img.src}>
        На нашем портале вы можете выбрать врача из лучших клиник Москвы
      </Card>
    </div>
    <div>
      <Card href="/service/diagnostic/x-ray" name="Рентген" image={Pediatrician.img.src}>
        На нашем портале вы можете выбрать врача из лучших клиник Москвы
      </Card>
    </div>
    <div id="medicine_book_card_wrapper" class="double">
      <Card href="/service/diagnostic/functional" name="Функциональная диагностика" image={Directory.img.src} double>
        На нашем портале вы можете выбрать врача из лучших клиник Москвы и получить скидку до 65%.
      </Card>
    </div>
  </div>
</section>


<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  :global {
    @media (max-width: 500px) {
      #dignostic_page_preview .preview {
        background-size: cover;
      }
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

  .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;

    @media (min-width: (map.get(env.$screen-size, tablet) + 1px)) {
      > div:not(.double) {
        aspect-ratio: 1 / 1;
      }
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      > div {
        aspect-ratio: 1 / 1;
      }
    }

    @media (max-width: 480px) {
      > div {
        aspect-ratio: 328 / 200;
      }
    }

    > .double {
      grid-column: span 2;

      @media (max-width: 1000px) {
        grid-column: span 1;
      }
    }

    > .ultrasound {
      :global {
        @media (max-width: 475px) {
          .card-image_wrapper {
            background-size: contain;
            background-position: right;
          }
        }
      }
    }

    @media (max-width: 1000px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: (map.get(env.$screen-size, tablet) - 100px)) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }
</style>