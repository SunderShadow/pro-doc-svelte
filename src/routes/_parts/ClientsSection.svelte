<script lang="ts">
    import ClientImage1 from "$lib/assets/images/clients/1.png"
    import ClientImage2 from "$lib/assets/images/clients/2.png"
    import ClientImage3 from "$lib/assets/images/clients/3.png"
    import ClientReview from "./ClientReview.svelte";
</script>

<svelte:head>
    <link rel="preload" as="image" href={ClientImage1} />
    <link rel="preload" as="image" href={ClientImage2} />
    <link rel="preload" as="image" href={ClientImage3} />
</svelte:head>

<section class="page-container">
    <h2>Что говорят о нас наши клиенты</h2>
    <div class="reviews">
        <div class="left-comment">
            <ClientReview title="«Огромный выбор врачей, большой выбор‥»."
                          description="Самый продуманный и постоянно развивающийся сервис по поиску вр чей и онлайн записи к ним.
                   Есть все популярные клиники и даже государственные больницы,
                    много услуг, отзывы про врачей и негативные и позитивные —
                     можно составить своё сравнительно объективное мнение о враче и примерно
                      представлять что тебя ждёт."
                          author="Ирина Смирнова" authorImage={ClientImage1} />
        </div>
        <div class="left-comment">
            <ClientReview title="«Огромный выбор врачей, большой выбор‥»."
                          description="Самый продуманный и постоянно развивающийся сервис по поиску вр чей и онлайн записи к ним.
                   Есть все популярные клиники и даже государственные больницы,
                    много услуг, отзывы про врачей и негативные и позитивные —
                     можно составить своё сравнительно объективное мнение о враче и примерно
                      представлять что тебя ждёт."
                          author="Ирина Смирнова" authorImage={ClientImage2} />
        </div>
        <div class="right-comment">
            <ClientReview title="«Огромный выбор врачей, большой выбор‥»."
                          description="Самый продуманный и постоянно развивающийся сервис по поиску вр чей и онлайн записи к ним.
                   Есть все популярные клиники и даже государственные больницы,
                    много услуг, отзывы про врачей и негативные и позитивные —
                     можно составить своё сравнительно объективное мнение о враче и примерно
                      представлять что тебя ждёт."
                          author="Ирина Смирнова" authorImage={ClientImage3} />
        </div>
        <div class="all-reviews">
            <h4 class="title-1">Посмотреть все отзывы</h4>
        </div>
    </div>

</section>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

    section {
      padding-top: 192px;

      .reviews {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(6, 1fr);
        grid-auto-flow: column;
        column-gap: 32px;
        row-gap: 32px;

        margin-top: 64px;

        > div {
          grid-column: span 4;
          grid-row: span 3;

          &.left-comment {
            grid-column: span 8;
          }

          &.right-comment {
            grid-row: span 4;
          }
        }

        .all-reviews {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          grid-row: span 2;

          padding: 1.5rem;

          background-color: map.get(env.$color, primary);

          border-radius: 12px;

          cursor: pointer;

          > h4 {
            color: map.get(env.$color, secondary);
          }
        }
      }
    }
</style>