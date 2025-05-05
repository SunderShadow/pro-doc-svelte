<script lang="ts">
    import Like from "$ui-kit/icons/Like.svelte";
    import Star from "$ui-kit/icons/Star.svelte";
    import Link from "$ui-kit/Link/Link.svelte";
    import DoctorLocationTimetable from "./DoctorLocationTimetable.svelte";
    import PriceCards from "./PriceCards.svelte";

    type Props = {
        name: string,
        image: string,
    }

    let screenWidth = $state(0)
    const {
        name,
        image,
    }: Props = $props();
</script>

<svelte:window bind:innerWidth={screenWidth} />

{#snippet stats()}
  <div class="doctor-links">
    <a href="" class="active body-text-3">невролог</a>
    <a href="" class="active body-text-3">рефлексотерапевт</a>
  </div>
  <div class="doctor-links">
    <a href="" class="active body-text-3">взрослый</a>
  </div>
  <p class="body-text-3">Стаж 24 года, высшая категория, доктор медицинских наук, профессор</p>
{/snippet}

<section class="doctor-card">
  <div class="card-container">
    <div class="doctor-info">
      <div class="doctor-image">
        <img src={image} alt="" loading="lazy">
        <div class="favorite_icon">
          <Like size="sm"/>
        </div>
      </div>
      <div class="doctor-stats">
        <h3>{name}</h3>
        <div class="doctor-capital">
          <div class="rating title-3">
            <Star/>
            <span>4.9</span>
          </div>
          <a href="" class="link-font-1">4 отзыва</a>
        </div>
        {#if screenWidth > 425}
          {@render stats()}
        {/if}
      </div>
    </div>
      {#if screenWidth <= 425}
        {@render stats()}
      {/if}
    <div class="card-content">
      <h4 class="title-1">О враче</h4>
      <p class="body-text-2">Невролог, гирудотерапевт. Проводит диагностику и лечение болей в спине,
        головных болей, инсультов и его остаточных явлений,
        атеросклеротических поражений, невритов, невралгий, нарушений памяти и сна.
        При лечении неврологических заболеваний активно применяет гирудотерапию.
        Автор 10 публикаций.
      </p>
      <div>
        <Link href="/doctors/card" primary>Узнать подробнее о враче</Link>
      </div>

      <h4 class="title-1">Отзывы</h4>
      <p class="body-text-2">«Спасибо Алексею Викторовичу за то, что помог разобраться в моей проблеме.
        До него я был у многих врачей и от них информации не добыл!
        Алексей Викторович помог мне в лечении, которое я ему накручивал до его посещения».
      </p>
      <div><Link href="/doctors/card" primary>Узнать подробнее</Link></div>

      <h4 class="title-1">Приём невролога</h4>
      <div>
        <PriceCards/>
      </div>
    </div>
  </div>
  <DoctorLocationTimetable/>
</section>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  $mobile-adaptive: 330px;


  * + h4 {
    margin-top: 32px;
  }

  .doctor-info {
    @media (max-width: map.get(env.$screen-size, mobile)) {
      margin-bottom: 16px;
    }
  }

  @media (max-width: map.get(env.$screen-size, mobile)) {
    .doctor-links + .doctor-links {
      margin-top: 8px;
    }
    .doctor-links + * {
      margin-top: 8px;
    }
  }

  .doctor-links {
    display: flex;
    align-items: center;

    a {
      display: inline-flex;
      color: map.get(env.$color, primary);
      line-height: 22.4px;
    }

    a:first-child {
      position: relative;
      top: -1px;
    }

    a + a::before {
      content: "";
      height: 24px;
      width: 1px;
      margin: 0 8px;

      background: rgba(map.get(env.$color, primary), .1);
    }
  }

  .doctor-card {
    display: flex;
    gap: min(160px, 10vw);

    padding: 2rem;
    margin-top: 32px;

    border: 1px solid rgba(map.get(env.$color, primary), 0.1);
    border-radius: 12px;

    @media (max-width: 1200px) {
      flex-direction: column;
      gap: 32px;
    }

    @media (max-width: $mobile-adaptive) {
      padding: .75rem;
    }

    .card-container {
      display: flex;
      flex-direction: column;

      .doctor-info {
        display: flex;
        gap: 16px;

        .doctor-image {
          display: flex;

          flex-shrink: 0;
          position: relative;

          width: 180px;
          height: 180px;

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          border: 1px solid rgba(map.get(env.$color, primary), 0.1);
          border-radius: 12px;

          @media (max-width: 500px) {
            width: 130px;
            height: 130px;
          }

          .favorite_icon {
            position: absolute;
            top: 8px;
            left: 8px;
          }

          > img {
            width: 100%;
            height: 100%;
            object-fit: cover;

            flex-shrink: 0;
          }
        }

        .doctor-stats {
          display: flex;
          flex-direction: column;
          gap: 8px;

          .doctor-capital {
            display: flex;
            align-items: center;
            gap: 8px;

            .rating {
              display: flex;
              align-items: center;
              gap: 4px;
            }

            > a {
              color: rgba(map.get(env.$color, primary), 0.5);
              text-decoration: underline;
              text-underline-offset: 4px;
            }

            :global {
              .svg-icon-container {
                --size: 14px;
                --color: #FFCC00;
              }
            }
          }

          @media (max-width: map.get(env.$screen-size, netbook)) {
            > h3 {
              font-size: 1.5rem;
            }
          }
        }
      }

      .card-content {
        margin-top: 32px;
        display: flex;
        flex-direction: column;

        h4 + p {
          margin-top: 8px;
        }

        h4 + div {
          margin-top: 16px;
        }

        p  + * {
          margin-top: 16px;
        }

        > div {
          display: flex;
          flex-direction: column;
          gap: 16px;

          > p {
            margin-bottom: 8px;

            line-height: 25.6px;
          }

          :global {
            .article-link {
              gap: 4px;

              .svg-icon-container {
                --size: 16px;
              }
            }
          }
        }
      }
    }
  }
</style>