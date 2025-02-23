<script lang="ts">
    import Like from "$ui-kit/icons/Like.svelte";
    import Star from "$ui-kit/icons/Star.svelte";
    import Link from "$ui-kit/Link/Link.svelte";
    import Clinic from "$ui-kit/icons/Clinic.svelte";
    import Online from "$ui-kit/icons/Online.svelte";
    import Ambulance from "$ui-kit/icons/Ambulance.svelte";
    import DoctorLocationTimetable from "./DoctorLocationTimetable.svelte";

    type Props = {
        name: string,
        image: string,
    }

    const {
        name,
        image,
    }: Props = $props();
</script>

<div class="doctor-card">
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
        <div>
          <div class="rating title-3">
            <Star/>
            <span>4.9</span>
          </div>
          <a href="" class="link-font-1">4 отзыва</a>
        </div>
        <ul>
          <li><a href="" class="active body-text-3">невролог</a></li>
          <li><a href="" class="active body-text-3">рефлексотерапевт</a></li>
        </ul>
        <ul>
          <li><a href="" class="active body-text-3">взрослый</a></li>
        </ul>
        <p class="body-text-3">Стаж 24 года, высшая категория, доктор медицинских наук, профессор</p>
      </div>
    </div>
    <div class="card-content">
      <div class="about">
        <h4 class="title-1">О враче</h4>
        <p class="body-text-2">Невролог, гирудотерапевт. Проводит диагностику и лечение болей в спине,
          головных болей, инсультов и его остаточных явлений,
          атеросклеротических поражений, невритов, невралгий, нарушений памяти и сна.
          При лечении неврологических заболеваний активно применяет гирудотерапию.
          Автор 10 публикаций.</p>
        <Link href="">Узнать подробнее о враче</Link>
      </div>
      <div class="reviews">
        <h4 class="title-1">Отзывы</h4>
        <p class="body-text-2">«Спасибо Алексею Викторовичу за то, что помог разобраться в моей проблеме.
          До него я был у многих врачей и от них информации не добыл!
          Алексей Викторович помог мне в лечении, которое я ему накручивал до его посещения».</p>
        <Link href="">Узнать подробнее</Link>
      </div>
      <div class="price">
        <h4 class="title-1">Приём невролога</h4>
        <div class="price-container">
          <div class="price-card">
            <Clinic size="md" type="primary"/>
            <span class="title-2">В клинике</span>
            <span class="price-card_price">1 500 ₽</span>
          </div>
          <div class="price-card">
            <Online size="md" type="primary"/>
            <span class="title-2">Онлайн</span>
            <b class="price-card_price">2 000 ₽</b>
          </div>
          <div class="price-card">
            <Ambulance size="md" type="primary"/>
            <span class="title-2">Вызов на дом</span>
            <b class="price-card_price">от 3 500 ₽</b>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DoctorLocationTimetable/>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  .doctor-card {
    display: flex;
    gap: 160px;

    padding: 2rem;
    margin-top: 32px;

    border: 1px solid rgba(map.get(env.$color, primary), 0.1);
    border-radius: 12px;

    .card-container {
      display: flex;
      flex-direction: column;
      gap: 32px;



      .doctor-info {
        display: flex;
        gap: 16px;

        .doctor-image {
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
          }
        }

        .doctor-stats {
          display: flex;
          flex-direction: column;
          gap: 8px;

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

          > ul {
            display: flex;

            li {
              display: flex;

              color: map.get(env.$color, primary);
              line-height: 22.4px;

              list-style-type: none;

              > hr {
                margin: 0 8px;
              }
            }

            li + li::before {
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
        }
      }
      .card-content {
        display: flex;
        flex-direction: column;
        gap: 32px;

        > div {
          display: flex;
          flex-direction: column;
          gap: 8px;

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

      .price {
        display: flex;
        flex-direction: column;
        gap: 16px;

        .price-container {
          display: flex;
          gap: 16px;

          .price-card {
            display: flex;
            flex-direction: column;
            gap: 8px;

            width: 100%;

            padding: 1rem;

            border: 1px solid rgba(map.get(env.$color, primary), 0.1);
            border-radius: 12px;

            .title-2 {
              font-weight: 400;
              line-height: 27px;
            }

            &-price {
              font-weight: 600;
            }
          }
        }
      }
    }
  }
</style>