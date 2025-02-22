<script lang="ts">
    import Like from "$ui-kit/icons/Like.svelte";
    import Star from "$ui-kit/icons/Star.svelte";
    import Link from "$ui-kit/Link/Link.svelte";
    import Clinic from "$ui-kit/icons/Clinic.svelte";
    import Online from "$ui-kit/icons/Online.svelte";
    import Ambulance from "$ui-kit/icons/Ambulance.svelte";

    type Props = {
        name: string,
        image: string,
    }

    const {
        name,
        image,
    }: Props = $props();
</script>

<div class="card-container">
    <div class="doctor-info">
        <div class="doctor-image" style:--img={`url(${image})`}>
            <Like size="sm"/>
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
                <li class="body-text-3">невролог<hr></li>
                <li class="body-text-3">рефлексотерапевт</li>
            </ul>
            <ul>
                <li class="body-text-3">взрослый</li>
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
                    <b class="title-2">1 500 ₽</b>
                </div>
                <div class="price-card">
                    <Online size="md" type="primary"/>
                    <span class="title-2">Онлайн</span>
                    <b class="title-2">2 000 ₽</b>
                </div>
                <div class="price-card">
                    <Ambulance size="md" type="primary"/>
                    <span class="title-2">Вызов на дом</span>
                    <b class="title-2">от 3 500 ₽</b>
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  .card-container {
    display: flex;
    flex-direction: column;
    gap: 32px;

    padding: 2rem;
    margin-top: 32px;

    border: 1px solid rgba(map.get(env.$color, primary), 0.1);
    border-radius: 12px;

    .doctor-info {
      display: flex;
      gap: 16px;

      .doctor-image {
        width: 180px;
        height: 180px;

        padding-top: .75rem;
        padding-left: .75rem;

        background-image: var(--img);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        border: 1px solid rgba(map.get(env.$color, primary), 0.1);
        border-radius: 12px;
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

          > li {
            display: flex;

            color: map.get(env.$color, primary);
            line-height: 22.4px;

            list-style-type: none;

            > hr {
              margin: 0 8px;
            }
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

          > span {
            font-weight: 400;
          }
        }
      }
    }
  }
</style>