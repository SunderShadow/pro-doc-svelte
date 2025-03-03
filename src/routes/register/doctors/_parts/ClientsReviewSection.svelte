<script lang="ts">
    import ClientImage1 from "$lib/assets/images/clients/1.png?enhanced&format=webp"
    import ClientImage2 from "$lib/assets/images/clients/2.png?enhanced&format=webp"
    import ClientImage3 from "$lib/assets/images/clients/3.png?enhanced&format=webp"

    import ClientReview from "./ClientReviewSection/ClientReview.svelte"

    import LinkBlock from "$ui-kit/LinkBlock/LinkBlock.svelte"
</script>

<svelte:head>
    <link rel="preload" as="image" href={ClientImage1.img.src} />
    <link rel="preload" as="image" href={ClientImage2.img.src} />
    <link rel="preload" as="image" href={ClientImage3.img.src} />
</svelte:head>

<section class="page-container page-section">
    <h2>Отзывы врачей</h2>
    <div class="reviews">
        <div class="left-comment">
            <ClientReview title="«Больше пациентов»"
                          description="Взаимодействие с проектом положительно сказалось на количестве пациентов, планирую дальнейшее сотрудничество"
                          author="Ирина Смирнова" authorImage={ClientImage1.img.src} />
        </div>
        <div class="left-comment">
            <ClientReview title="«Пошла слава»."
                          description="Сайтом довольна, пациентов стало больше. Правда, пошла слава как о спасительнице женщин, хотя амбулаторной урологией особо не занималась. Пришлось)"
                          author="Ирина Смирнова" authorImage={ClientImage2.img.src} />
        </div>
        <div class="right-comment">
            <ClientReview title="«Стало проще‥»."
                          description="Сервис однозначно нравится. Реал-тайм запись увеличила число пациентов, а Календарь. НаПоправку помог сэкономить время и сделать работу проще"
                          author="Ирина Смирнова" authorImage={ClientImage3.img.src} />
        </div>
        <div class="all-reviews">
            <LinkBlock />
        </div>
    </div>

</section>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  section {
    .reviews {
      display: grid;
      grid-template-columns: repeat(12, 1fr);

      gap: 32px;

      margin-top: 64px;

      @media (min-width: (map.get(env.$screen-size, netbook) + 1px)) {
        grid-template-rows: repeat(6, 1fr);
        grid-auto-flow: column;
      }

      @media (max-width: map.get(env.$screen-size, netbook)) {
        grid-template-columns: 1fr;
      }

      @media (max-width: map.get(env.$screen-size, tablet)) {
        margin-top: 32px;
      }

      > div {
        grid-column: span 4;
        grid-row: span 3;

        @media (max-width: map.get(env.$screen-size, netbook)) {
          grid-column: span 1 !important;
          grid-row: span 1 !important;
        }

        &.left-comment {
          grid-column: span 8;
        }

        &.right-comment {
          grid-row: span 4;
        }
      }

      .all-reviews {
        grid-row: span 2;

        @media (max-width: map.get(env.$screen-size, netbook)) {
          height: 150px;
        }
      }
    }
  }
</style>