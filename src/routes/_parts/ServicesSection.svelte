<script lang="ts">
    import Doctors      from "$lib/assets/images/services/doctors.png?enhanced&format=webp"
    import Services     from "$lib/assets/images/services/services.jpg?enhanced&format=webp"
    import Diagnostics  from "$lib/assets/images/services/diagnostics.jpg?enhanced&format=webp"
    import Consultation from "$lib/assets/images/services/consultation.jpg?enhanced&format=webp"
    import Pediatrician from "$lib/assets/images/services/pediatrician.jpg?enhanced&format=webp"
    import Directory    from "$lib/assets/images/services/directory.png?enhanced&format=webp"
    import Card         from "$ui-kit/ServiceCard/ServiceCard.svelte"
</script>

<svelte:head>
  <link rel="preload" as="image" href={Doctors.img.src}>
  <link rel="preload" as="image" href={Services.img.src}>
  <link rel="preload" as="image" href={Diagnostics.img.src}>
  <link rel="preload" as="image" href={Consultation.img.src}>
  <link rel="preload" as="image" href={Pediatrician.img.src}>
  <link rel="preload" as="image" href={Directory.img.src}>
</svelte:head>

<section class="page-container">
  <h2>Услуги и направления</h2>
  <div class="cards">
    <div class="double">
      <Card name="Врачи" image={Doctors.img.src} double>
        На нашем портале вы можете выбрать врача из лучших клиник Москвы и получить скидку до 65%.
      </Card>
    </div>
    <div>
      <Card name="Услуги" image={Services.img.src}>
        На нашем портале вы можете выбрать врача из лучших клиник Москвы и получить скидку до 65%.
      </Card>
    </div>
    <div>
      <Card name="Диагностика" image={Diagnostics.img.src}>
        На нашем портале вы можете выбрать врача из лучших клиник Москвы и получить скидку до 65%.
      </Card>
    </div>
    <div id="online_consulting_card_wrapper">
      <Card name="Онлайн-консультация" image={Consultation.img.src}>
        На нашем портале вы можете выбрать врача из лучших клиник Москвы и получить скидку до 65%.
      </Card>
    </div>
    <div>
      <Card name="Детский врач" image={Pediatrician.img.src}>
        На нашем портале вы можете выбрать врача из лучших клиник Москвы и получить скидку до 65%.
      </Card>
    </div>
    <div id="medicine_book_card_wrapper" class="double">
      <Card name="Медицинский справочник" image={Directory.img.src} double>
        На нашем портале вы можете выбрать врача из лучших клиник Москвы и получить скидку до 65%.
      </Card>
    </div>
  </div>
</section>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  :global {
    #medicine_book_card_wrapper .card-image_wrapper {
      background-size: 100%;
    }

    #online_consulting_card_wrapper .card-image_wrapper {
      background-size: 100%;
    }
  }

  .cards {
    @media (min-width: map.get(env.$screen-size, tablet) + 1px) {
      > div:not(.double) {
        aspect-ratio: 1 / 1;
      }
    }

    > .double {
      grid-column: span 2;

      @media (max-width: map.get(env.$screen-size, tablet)) {
        grid-column: span 1;
      }
    }
  }

  section {
    padding: 96px 0;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      padding: 64px 0;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px;

      margin-top: 64px;

      @media (max-width: map.get(env.$screen-size, tablet)) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (max-width: (map.get(env.$screen-size, tablet) - 100px)) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: map.get(env.$screen-size, tablet)) {
        margin-top: 32px;
      }

      @media (max-width: 480px) {
        grid-template-columns: 1fr;
      }
    }
  }
</style>