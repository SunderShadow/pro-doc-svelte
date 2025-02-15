<script lang="ts">
  import '@splidejs/svelte-splide/css/core'

  import SliderImgSrc from "$lib/assets/images/slider/1.webp?enhanced&quality=80&format=webp"
  import SliderImgMobileSrc from "$lib/assets/images/slider/mobile.png?enhanced&quality=80&format=webp"
  import {Splide, SplideSlide, SplideTrack} from '@splidejs/svelte-splide'
  import Button from "$ui-kit/Button/Button.svelte"


  const sliderOptions = {
      type: 'loop',
      perPage: 1,
  }
</script>

<svelte:head>
  <link rel="preload" as="image" href={SliderImgSrc.img.src} media="(min-width: 361px)">
  <link rel="preload" as="image" href={SliderImgMobileSrc.img.src} media="(max-width: 360px)">
</svelte:head>

<section class="page-container">
  <Splide hasTrack={false} options={sliderOptions}>
    <SplideTrack>
      <SplideSlide>
        <div class="slider-slide" style:--img={`url(${SliderImgSrc.img.src})`} style:--img-mobile={`url(${SliderImgMobileSrc.img.src})`} >
          <div class="slider-info">
            <div>
              <h2 class="slider-title">Найти врача за 5 минут <br> в твоём городе</h2>
              <div class="slider-subtitle title-2">Мы поможем вам подобрать специалиста и записаться на приём</div>
            </div>
            <div class="slider-button">
              <Button>Выбрать врача</Button>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="slider-slide" style:--img={`url(${SliderImgSrc.img.src})`} style:--img-mobile={`url(${SliderImgMobileSrc.img.src})`} >
          <div class="slider-info">
            <div>
              <h2 class="slider-title">Найти врача за 5 минут <br> в твоём городе</h2>
              <div class="slider-subtitle title-2">Мы поможем вам подобрать специалиста и записаться на приём</div>
            </div>
            <div class="slider-button">
              <Button>Выбрать врача</Button>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="slider-slide" style:--img={`url(${SliderImgSrc.img.src})`} style:--img-mobile={`url(${SliderImgMobileSrc.img.src})`} >
          <div class="slider-info">
            <div>
              <h2 class="slider-title">Найти врача за 5 минут <br> в твоём городе</h2>
              <div class="slider-subtitle title-2">Мы поможем вам подобрать специалиста и записаться на приём</div>
            </div>
            <div class="slider-button">
              <Button>Выбрать врача</Button>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="slider-slide" style:--img={`url(${SliderImgSrc.img.src})`} style:--img-mobile={`url(${SliderImgMobileSrc.img.src})`} >
          <div class="slider-info">
            <div>
              <h2 class="slider-title">Найти врача за 5 минут <br> в твоём городе</h2>
              <div class="slider-subtitle title-2">Мы поможем вам подобрать специалиста и записаться на приём</div>
            </div>
            <div class="slider-button">
              <Button>Выбрать врача</Button>
            </div>
          </div>
        </div>
      </SplideSlide>
    </SplideTrack>

    <div class="slider-control">
      <ul class="splide__pagination-main-slider splide__pagination splide__pagination--ltr" role="tablist" aria-label="Select a slide to show">
      </ul>

      <div class="splide__arrows">
        <Button _class="splide__arrow splide__arrow--prev" type="icon">
          <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.00446 -0.00384712C4.87639 -0.00428295 4.74984 0.0239763 4.63412 0.0788527C4.51841 0.13373 4.41646 0.21383 4.33577 0.313267L0.195025 5.45564C0.068932 5.60899 0 5.80136 0 5.99987C0 6.19839 0.068932 6.39075 0.195025 6.54411L4.48151 11.6865C4.62703 11.8615 4.83613 11.9716 5.06282 11.9925C5.28952 12.0134 5.51523 11.9434 5.6903 11.7979C5.86537 11.6524 5.97547 11.4434 5.99637 11.2167C6.01727 10.9901 5.94726 10.7645 5.80175 10.5894L1.96963 5.99559L5.67315 1.40173C5.77799 1.27593 5.84458 1.12274 5.86505 0.960284C5.88552 0.797829 5.85902 0.63291 5.78867 0.485043C5.71833 0.337175 5.60708 0.212549 5.46811 0.125909C5.32913 0.0392675 5.16823 -0.00576019 5.00446 -0.00384712Z" fill="white"/>
          </svg>
        </Button>
        <Button _class="splide__arrow splide__arrow--next" type="icon">
          <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.995538 -0.00384712C1.12361 -0.00428295 1.25016 0.0239763 1.36588 0.0788527C1.48159 0.13373 1.58354 0.21383 1.66423 0.313267L5.80498 5.45564C5.93107 5.60899 6 5.80136 6 5.99987C6 6.19839 5.93107 6.39075 5.80498 6.54411L1.51849 11.6865C1.37297 11.8615 1.16387 11.9716 0.937177 11.9925C0.710485 12.0134 0.484775 11.9434 0.3097 11.7979C0.134626 11.6524 0.0245285 11.4434 0.00362778 11.2167C-0.0172729 10.9901 0.0527353 10.7645 0.198252 10.5894L4.03037 5.99559L0.326847 1.40173C0.222013 1.27593 0.155421 1.12274 0.13495 0.960284C0.114478 0.797829 0.140983 0.63291 0.211329 0.485043C0.281675 0.337175 0.392918 0.212549 0.531895 0.125909C0.670871 0.0392675 0.831765 -0.00576019 0.995538 -0.00384712Z" fill="white"/>
          </svg>
        </Button>
      </div>
    </div>
  </Splide>

  <div class="statistics">
    <div class="statistic">
      <div>16,5 млн</div>
      <div>Пациентов записывались через наш сервис</div>
    </div>
    <div class="statistic">
      <div>666 809</div>
      <div>Отзывов оставили на сайте</div>
    </div>
    <div class="statistic">
      <div>521 308</div>
      <div>Практикующих врачей в нашей базе</div>
    </div>
    <div class="statistic">
      <div>7 037</div>
      <div>клиник по подключению к сервесу</div>
    </div>
  </div>
</section>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  $mobile-screen: 550px;
  
  section {
    padding: 96px 0;

    @media (max-width: map.get(env.$screen-size, netbook)) {
      padding: 64px 0;
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      padding: 32px 0;
    }
  }

  .statistics {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    gap: 0 27px;
    margin-top: 2rem;

    border: 1px solid rgba(map.get(env.$color, primary), .1);
    border-radius: .75rem;
    padding: 2rem;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      grid-template-columns: 1fr;
      gap: 64px;
    }
  }

  .statistic {
    div:first-child {
      font-size: 2rem;
      font-weight: 600;

      color: map.get(env.$color, primary);
    }
  }

  .slider-control {
    display: flex;
    gap: 20px;

    position: absolute;

    bottom: 96px;
    right: 136px;

    @media (max-width: map.get(env.$screen-size, netbook)) {
      bottom: 60px;
      right: 80px;
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      bottom: 60px;
      right: 60px;
    }
  }

  :global {
    .splide__pagination-main-slider {
      display: flex;
      gap: 16px;

      @media (max-width: $mobile-screen) {
        gap: 8px;
      }

      .splide__pagination__page {
        width: 8px;
        height: 8px;

        background-color: map.get(env.$bg-color, primary);
        border-radius: 100%;
        border: none;
        outline: none;

        &.is-active {
          background-color: map.get(env.$color, primary);
        }

        @media (max-width: $mobile-screen) {
          &:not(.is-active) {
            background-color: rgba(map.get(env.$color, primary), .1);
          }
        }
      }
    }

    @media (max-width: $mobile-screen) {
      .slider-control {
        position: static !important;
        width: fit-content;
        margin-left: auto;
        margin-right: auto;

        .splide__arrows {
          display: none !important;
        }
      }
    }
  }

  .splide__arrows {
    display: flex;
    gap: 16px;
  }

  .slider {
    &-slide {
      background-image: var(--img);
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;

      border-radius: 12px;

      @media (max-width: map.get(env.$screen-size, netbook)) {
        background-size: 120% 100%;
      }

      @media (max-width: map.get(env.$screen-size, netbook)) {
        background-size: 130% 100%;
      }

      @media (max-width: $mobile-screen) {
        background: var(--img-mobile) no-repeat;
        background-size: 100% 210px;
        background-position: top;
      }
    }

    &-info {
      padding: 160px 136px;

      @media (max-width: map.get(env.$screen-size, netbook)) {
        padding: 60px 30% 60px 80px;
      }

      @media (max-width: map.get(env.$screen-size, tablet)) {
        padding: 60px 30% 60px 60px;
      }

      @media (max-width: $mobile-screen) {
        padding: 234px 16px 0;
      }
    }

    &-title {
      font-weight: 600;
      @media (max-width: $mobile-screen) {
        font-size: 1.5rem;
      }
    }

    &-subtitle {
      font-size: 1.2rem;
      opacity: .5;

      line-height: 28.8px;

      @media (max-width: map.get(env.$screen-size, netbook)) {
        margin-right: 60px;
      }

      @media (max-width: map.get(env.$screen-size, tablet)) {
        font-size: 1rem;
      }
    }

    &-title + &-subtitle {
      margin-top: 2rem;
      font-weight: 400;

      @media (max-width: map.get(env.$screen-size, tablet)) {
        margin-top: 1rem;
      }
    }

    * + &-button {
      margin-top: 2rem;

      @media (max-width: map.get(env.$screen-size, tablet)) {
        margin-top: 1.5rem;
      }
    }
  }

  :global {
    @media (max-width: $mobile-screen) {
      .slider-button button{
        width: 100%;
      }
    }
  }
</style>