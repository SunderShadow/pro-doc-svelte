<script>
  import '@splidejs/svelte-splide/css/core'

  import Link from "$ui-kit/Link/Link.svelte"
  import Telegram from "$ui-kit/icons/Telegram.svelte"
  import Button from "$ui-kit/Button/Button.svelte"
  import MagnifierIcon from "$ui-kit/icons/Magnifier.svelte"
  import Vk from "$ui-kit/icons/Vk.svelte"

  import SliderImg from "../_assets/slider.png?enhanced&format=webp"
  import LicenseImg from "../_assets/license.png?enhanced&format=webp"

  import {Splide, SplideSlide, SplideTrack} from "@splidejs/svelte-splide"
  import RightPart from "./RightPart.svelte";
  import CertificateSlider from "./CertificateSlider.svelte";

  const sliderOptions = {
      perPage: 1,
  }

  let screenSize = $state(0)
</script>

<svelte:window bind:innerWidth={screenSize}></svelte:window>

<Splide hasTrack={false} options={sliderOptions}>
  <SplideTrack>
    {#each Array(5) as _}
      <SplideSlide>
        <img class="slider_img" src={SliderImg.img.src} alt="">
      </SplideSlide>
    {/each}
  </SplideTrack>
  <div class="slider-control">
    <div class="splide__arrows">
      <button class="splide__arrow splide__arrow--prev">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.0333 16.0036C12.0333 15.8259 12.0667 15.6539 12.1333 15.4876C12.2 15.3205 12.2889 15.1814 12.4 15.0703L18.5333 8.93698C18.7778 8.69253 19.0889 8.57031 19.4667 8.57031C19.8444 8.57031 20.1556 8.69253 20.4 8.93698C20.6444 9.18142 20.7667 9.49253 20.7667 9.87031C20.7667 10.2481 20.6444 10.5592 20.4 10.8036L15.2 16.0036L20.4 21.2036C20.6444 21.4481 20.7667 21.7592 20.7667 22.137C20.7667 22.5148 20.6444 22.8259 20.4 23.0703C20.1556 23.3148 19.8444 23.437 19.4667 23.437C19.0889 23.437 18.7778 23.3148 18.5333 23.0703L12.4 16.937C12.2667 16.8036 12.1724 16.6592 12.1173 16.5036C12.0613 16.3481 12.0333 16.1814 12.0333 16.0036Z" />
        </svg>
      </button>

      <ul id="clinics_about_splide_pagination" class="splide__pagination-main-slider splide__pagination splide__pagination--ltr" role="tablist" aria-label="Select a slide to show">
      </ul>
      <button class="splide__arrow splide__arrow--next" >
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.9667 16.0042C19.9667 16.1819 19.9333 16.3539 19.8667 16.5202C19.8 16.6873 19.7111 16.8264 19.6 16.9375L13.4667 23.0708C13.2222 23.3153 12.9111 23.4375 12.5333 23.4375C12.1556 23.4375 11.8444 23.3153 11.6 23.0708C11.3556 22.8264 11.2333 22.5153 11.2333 22.1375C11.2333 21.7597 11.3556 21.4486 11.6 21.2042L16.8 16.0042L11.6 10.8042C11.3556 10.5597 11.2333 10.2486 11.2333 9.87083C11.2333 9.49306 11.3556 9.18194 11.6 8.9375C11.8444 8.69306 12.1556 8.57083 12.5333 8.57083C12.9111 8.57083 13.2222 8.69306 13.4667 8.9375L19.6 15.0708C19.7333 15.2042 19.8276 15.3486 19.8827 15.5042C19.9387 15.6597 19.9667 15.8264 19.9667 16.0042Z"/>
        </svg>
      </button>
    </div>
  </div>
</Splide>

<div class="show_on_map_btn">
  <Button fullWidth>
    <MagnifierIcon size="sm" />
    Показать на карте
  </Button>
</div>
{#if screenSize < 1200}
  <RightPart />
{/if}
<h2 class="title-1">О клинике</h2>
<p class="body-text-2">
  Медицинский Центр «ДЧ Клиника» находится в 16-м микрорайоне города Мытищи, на территории Московской области. Мы осуществляем современную диагностику и врачебные услуги для всей семьи.
  Это современная компания узкоспециализированного профиля. Наши врачи и медицинский персонал каждый год наши врачи проходят дополнительные обучающие курсы и повышают квалификацию.
  Мы специализируемся на врачебных услугах в области гинекологии, неврологии, ультразвуковой диагностики и педиатрии. А так же предоставляем широкий спектр услуг диагностического характера, включая все виды УЗИ диагностики и более 2000 тысяч видов лабораторных исследований.
  Успешная деятельность клиники опирается на 3 базовых фактора: многолетний опыт специалистов, экспертный уровень оборудования, современную автоматизацию рабочих процессов. Деятельность организации лицензирована.
  Приём пациентов осуществляется 7 дней в неделю: в будние дни — с 7:00 до 19:30, в выходные — с 7:00 до 16:00.
</p>

<div class="links">
  <Link href="" primary>Перейти на официальный сайт</Link>

  <div class="links-social">
    <a href=""><Telegram type="primary"/></a>
    <a href=""><Vk type="primary"/></a>
  </div>
</div>

<h2 class="title-1">Главный врач</h2>
<p class="body-text-2">
  Чередниченко Андрей Николаевич
</p>

<h2 class="title-1">Принимает</h2>
<p class="body-text-2">
  Взрослых и детей
</p>

<h2 class="title-1">Форма собственности</h2>
<p class="body-text-2">
  Частная
</p>

<h2 class="title-1">Диагностика</h2>
<div class="diagnostic">
  <div>КТ</div>
  <div>МРТ</div>
  <div>Рентген</div>
  <div>УЗИ</div>
</div>

<h2 class="title-1">Преимущества</h2>
<div class="pros">
  <div>
    <div></div>
    <div>Есть парковка</div>
  </div>
  <div>
    <div></div>
    <div>Принимаем карты</div>
  </div>
  <div>
    <div></div>
    <div>Проводим диагностику</div>
  </div>
  <div>
    <div></div>
    <div>Своя лаборатория</div>
  </div>
  <div>
    <div></div>
    <div>Бесплатный Wi-Fi</div>
  </div>
  <div>
    <div></div>
    <div>Есть стационар</div>
  </div>
</div>

<h2 class="title-1">Лицензия</h2>

<div class="license_slider">
  <CertificateSlider />
</div>
<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  :global {
    #clinics_about_splide_pagination {
      gap: 8px;
    }

    #clinics_about_splide_pagination button {
      width: 8px;
      height: 8px;
      border: none;
      border-radius: 100%;

      transition: background 300ms;
      &.is-active {
        background: map.get(env.$color, primary);
      }
    }
  }

  .show_on_map_btn {
    margin: 32px 0;
  }

  .splide__arrows {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 16px;

    .splide__arrow {
      width: 32px;
      height: 32px;

      border: none;
      background: none;

      opacity: .3;

      &:not([disabled]) {
        opacity: 1;
        cursor: pointer;
      }

      svg {
        fill: map.get(env.$color, primary);
      }
    }
  }

  .slider_img {
    width: 100%;
    aspect-ratio: 752 / 300;
    object-fit: cover;
    border-radius: 12px;

    @media (max-width: map.get(env.$screen-size, mobile)) {
      height: 200px;
    }
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