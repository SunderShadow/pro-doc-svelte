<script lang="ts">
    import ClientImage1 from "$lib/assets/images/clients/1.png?enhanced&format=webp"
    import ClientImage2 from "$lib/assets/images/clients/2.png?enhanced&format=webp"
    import ClientImage3 from "$lib/assets/images/clients/3.png?enhanced&format=webp"

    import ClientReview from "$lib/components/ClientReview.svelte"

    import LinkBlock from "$ui-kit/LinkBlock/LinkBlock.svelte"
</script>

<svelte:head>
    <link rel="preload" as="image" href={ClientImage1.img.src} />
    <link rel="preload" as="image" href={ClientImage2.img.src} />
    <link rel="preload" as="image" href={ClientImage3.img.src} />
</svelte:head>

<section class="page-container">
    <h2 id="reviews">Что говорят о нас наши клиенты</h2>
    <div class="reviews">
        <div class="left-comment">
            <ClientReview title="«Огромный выбор врачей, большой выбор‥»."
                          description="Самый продуманный и постоянно развивающийся сервис по поиску вр чей и онлайн записи к ним.
                   Есть все популярные клиники и даже государственные больницы,
                    много услуг, отзывы про врачей и негативные и позитивные —
                     можно составить своё сравнительно объективное мнение о враче и примерно
                      представлять что тебя ждёт."
                          author="Ирина Смирнова" authorImage={ClientImage1.img.src} />
        </div>
        <div class="left-comment">
            <ClientReview title="«Огромный выбор врачей, большой выбор‥»."
                          description="Самый продуманный и постоянно развивающийся сервис по поиску вр чей и онлайн записи к ним.
                   Есть все популярные клиники и даже государственные больницы,
                    много услуг, отзывы про врачей и негативные и позитивные —
                     можно составить своё сравнительно объективное мнение о враче и примерно
                      представлять что тебя ждёт."
                          author="Ирина Смирнова" authorImage={ClientImage2.img.src} />
        </div>
        <div class="right-comment">
            <ClientReview title="«Огромный выбор врачей, большой выбор‥»."
                          description="Самый продуманный и постоянно развивающийся сервис по поиску вр чей и онлайн записи к ним.
                   Есть все популярные клиники и даже государственные больницы,
                    много услуг, отзывы про врачей и негативные и позитивные —
                     можно составить своё сравнительно объективное мнение о враче и примерно
                      представлять что тебя ждёт."
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
    padding: 96px 0;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      padding: 64px 0;
    }

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