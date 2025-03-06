<script>

  import Link from "$ui-kit/Link/Link.svelte"
  import Button from "$ui-kit/Button/Button.svelte"
  import MagnifierIcon from "$ui-kit/icons/Magnifier.svelte"

  import ClinicIconImg from "../_assets/clinic_icon.png?enhanced&format=webp"
  import ClinicImg from "../_assets/clinic_img.png?enhanced&format=webp"

  import RightPart from "./RightPart.svelte";
  import Like from "$ui-kit/icons/Like.svelte";
  import Star from "$ui-kit/icons/Star.svelte";

  let screenSize = $state(0)

</script>

<svelte:window bind:innerWidth={screenSize}></svelte:window>

<div class="info">
  <div class="thumbnail">
    <img src={ClinicImg.img.src} alt="" loading="lazy">
    <div class="favorite_icon">
      <Like size="sm"/>
    </div>
  </div>
  <div class="stats">
    <img class="icon" src={ClinicIconImg.img.src} alt="" loading="lazy">
    <h3>Университетская клиника неврологии</h3>
    <div class="capital">
      <div class="rating title-3">
        <Star/>
        <span>4.9</span>
      </div>
      <a href="/clinics/some_clinic_slug/reviews/clinic" class="link-font-1">4 отзыва</a>
    </div>
  </div>
</div>
<div class="show_on_map_btn">
  <Button fullWidth>
    <MagnifierIcon size="sm" />
    Показать на карте
  </Button>
</div>

<h2 class="title-1">О клинике</h2>
<p class="body-text-2">
  Медицинский Центр «ДЧ Клиника» находится в 16-м микрорайоне города Мытищи, на территории Московской области. Мы осуществляем современную диагностику и врачебные услуги для всей семьи.
  Это современная компания узкоспециализированного профиля. Наши врачи и медицинский персонал каждый год наши врачи проходят дополнительные обучающие курсы и повышают квалификацию...
</p>

<div class="links">
  <Link href="/clinics/some_clinic_slug/about" primary>Узнать подробнее о клинике</Link>
</div>

<h2 class="title-1">Отзывы</h2>
<p class="body-text-2">
  «Спасибо Алексею Викторовичу за то, что помог разобраться в моей проблеме. До него я был у многих врачей и от них информации не добыл! Алексей Викторович помог мне в лечении, которое я ему накручивал до его посещения».
</p>

<div class="links">
  <Link href="/clinics/some_clinic_slug/reviews/clinic" primary>Узнать поподробнее</Link>
</div>

{#if screenSize < 1360}
  <div class="right_part">
      <RightPart />
  </div>
{/if}

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  p {
    white-space: pre-line;
  }

  .right_part {
    margin-top: 32px;
  }

  .info {
    display: flex;
    gap: 16px;

    .thumbnail {
      display: flex;

      position: relative;
      flex-shrink: 0;

      width: 180px;
      height: 180px;

      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      border: 1px solid rgba(map.get(env.$color, primary), 0.1);
      border-radius: 12px;

      @media (max-width: map.get(env.$screen-size, netbook)) and (min-width: map.get(env.$screen-size, tablet)) {
        width: 278px;
        height: 278px;
      }

      @media (max-width: map.get(env.$screen-size, mobile)) {
        width: 130px;
        height: 130px;
      }

      .favorite_icon {
        position: absolute;
        top: 8px;
        left: 8px;

        background-color: #fff;
        border-radius: 100%;

        cursor: pointer;

      }

      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        flex-shrink: 0;
      }
    }

    .stats {
      display: flex;
      flex-direction: column;
      gap: 8px;

      .icon {
        width: 70px;
        height: 70px;

        @media (max-width: map.get(env.$screen-size, tablet)) {
          width: 40px;
          height: 40px;
        }
      }

      .capital {
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

      @media (max-width: map.get(env.$screen-size, tablet)) {
        > h3 {
          font-size: 18px;
        }
      }
    }
  }

  .show_on_map_btn {
    margin: 32px 0;
  }

  h2 {
    margin-top: 32px;
  }

  h2 + p {
    margin-top: 16px;
  }

  .links {
    display: flex;
    align-items: center;
    margin-top: 16px;

    gap: 16px;

    flex-wrap: wrap;

    &-social {
      display: flex;
      align-items: center;
      gap: 16px;

      margin-left: auto;

      @media (max-width: map.get(env.$screen-size, mobile)) {
        margin-left: 0;
      }
    }
  }

  .diagnostic {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    margin-top: 16px;

    font-size: 14px;

    > * {
      padding: 4px 8px;
      flex-shrink: 0;

      border: 1px solid rgba(#000, .1);
      color: rgba(#000, .5);
      border-radius: 8px;
    }
  }

  .pros {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;

    margin-top: 16px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }
    > div {
      > div:first-child {
        width: 32px;
        height: 32px;
        background-color: #D9D9D9;
        border-radius: 8px;
      }

      > div:last-child {
        margin-top: 8px;
        font-weight: 600;
        line-height: 1.5em;
      }
    }
  }

  .license_img {
    width: 100%;
    border-radius: 12px;
    aspect-ratio: 292 / 366;
  }
</style>