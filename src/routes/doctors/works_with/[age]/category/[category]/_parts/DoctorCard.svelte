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

    const {
        name,
        image,
    }: Props = $props();
</script>

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
        <div class="doctor-links">
          <a href="" class="active body-text-3">невролог</a>
          <a href="" class="active body-text-3">рефлексотерапевт</a>
        </div>
        <div class="doctor-links">
          <a href="" class="active body-text-3">взрослый</a>
        </div>
        <p class="body-text-3">Стаж 24 года, высшая категория, доктор медицинских наук, профессор</p>
      </div>
    </div>
    <div class="mobile-doctor-info">
      <div class="doctor-info-container">
        <div class="doctor-image">
          <img src={image} alt="" loading="lazy">
          <div class="favorite_icon">
            <Like size="sm"/>
          </div>
        </div>
        <div class="doctor-stats">
          <h3>{name}</h3>
          <div>
            <div class="rating title-3">
              <Star/>
              <span>4.9</span>
            </div>
            <a href="/doctors/card" class="link-font-1">4 отзыва</a>
          </div>
        </div>
      </div>
      <div class="doctor-links">
        <a href="" class="active body-text-3">невролог</a>
        <a href="" class="active body-text-3">рефлексотерапевт</a>
      </div>
      <div class="doctor-links">
        <a href="" class="active body-text-3">взрослый</a>
      </div>
      <p class="body-text-3">Стаж 24 года, высшая категория, доктор медицинских наук, профессор</p>
    </div>
    <div class="card-content">
      <div class="about">
        <h4 class="title-1">О враче</h4>
        <p class="body-text-2">Невролог, гирудотерапевт. Проводит диагностику и лечение болей в спине,
          головных болей, инсультов и его остаточных явлений,
          атеросклеротических поражений, невритов, невралгий, нарушений памяти и сна.
          При лечении неврологических заболеваний активно применяет гирудотерапию.
          Автор 10 публикаций.</p>
        <Link href="/doctors/card" primary>Узнать подробнее о враче</Link>
      </div>
      <div class="reviews">
        <h4 class="title-1">Отзывы</h4>
        <p class="body-text-2">«Спасибо Алексею Викторовичу за то, что помог разобраться в моей проблеме.
          До него я был у многих врачей и от них информации не добыл!
          Алексей Викторович помог мне в лечении, которое я ему накручивал до его посещения».</p>
        <Link href="/doctors/card" primary>Узнать подробнее</Link>
      </div>
      <h4 class="title-1">Приём невролога</h4>
      <PriceCards/>
    </div>
  </div>
  <DoctorLocationTimetable/>
</section>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  $mobile-adaptive: 330px;

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
      gap: 32px;

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

        @media (max-width: map.get(env.$screen-size, mobile)) {
          display: none;
        }

        .doctor-links {
          a {
            color: map.get(env.$color, primary);
            line-height: 22.4px;
          }

          a + a::before {
            content: "|";
            margin: 0 8px;

            color: rgba(map.get(env.$color, primary), 0.1);
          }
        }
      }

      .mobile-doctor-info {
        display: none;
        gap: 8px;

        .doctor-info-container {
          display: flex;
          gap: 16px
        }

        .doctor-image {
          display: flex;

          position: relative;
          width: 130px;
          height: 130px;

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          border: 1px solid rgba(map.get(env.$color, primary), 0.1);
          border-radius: 12px;

          .favorite_icon {
            position: absolute;
            top: 8px;
            left: 8px;

            :global {
              > * {
                display: none;
              }
            }
          }

          > img {
            width: 100%;
            height: 100%;
            object-fit: cover;

            flex-shrink: 0;
          }

          @media (max-width: map.get(env.$screen-size, mobile)) {
            min-width: 130px;
            max-height: 130px;
          }
        }

        .doctor-stats {
          display: flex;
          flex-direction: column;
          gap: 8px;

          > h3 {
            font-size: 1.2rem;
          }

          > div {
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
        }

        .doctor-links {
          display: flex;

          a {
            display: flex;

            color: map.get(env.$color, primary);
            line-height: 22.4px;
          }

          a + a::before {
            content: "";
            height: 24px;
            width: 1px;
            margin: 0 8px;

            background: rgba(map.get(env.$color, primary), .1);
          }
        }

        > p {
          line-height: 22.4px;
        }

        @media (max-width: map.get(env.$screen-size, mobile)) {
          display: flex;
          flex-direction: column;
        }
      }

      .card-content {
        display: flex;
        flex-direction: column;
        gap: 32px;

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