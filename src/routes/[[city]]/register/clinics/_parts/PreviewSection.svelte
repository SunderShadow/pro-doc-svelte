<script lang="ts">
  import PreviewImgSrc       from "../_assets/preview.png?enhanced&format=webp"
  import PreviewImgMobileSrc from "../_assets/preview-mobile.png?enhanced&format=webp"

  import Preview from "$ui-kit/Preview/Preview.svelte"
  import Button from "$ui-kit/Button/Button.svelte"

  let {
      modalVisible = $bindable()
  } = $props()
  let screenSize = $state(0)
</script>

<svelte:window bind:innerWidth={screenSize}></svelte:window>
<svelte:head>
  <link rel="preload" as="image" href={PreviewImgSrc.img.src} media="(min-width: 551px)">
  <link rel="preload" as="image" href={PreviewImgMobileSrc.img.src} media="(max-width: 550px)">
</svelte:head>

<section class="page-container">

  <div id="clinic_register_preview">
    <Preview
        title="Регистрация клиники"
        image={screenSize > 700 ? PreviewImgSrc.img.src : ''}
        imageMobile={PreviewImgMobileSrc.img.src}
        withGradient={true}
        gradientWidth={45}
        contentWidth={screenSize > 700 ? 60 : 90}
    >
      <p class="body-text-2">Если вы представитель клиники,пройдите бесплатную регистрации управляйте страницей мед. центра</p>
      <Button onclick={() => {modalVisible = true}} fullWidth={screenSize <= 500}>Зарегистрироваться как врач</Button>
    </Preview>
  </div>

  <div class="statistics">
    <div class="statistic">
      <div>16,5 млн</div>
      <div class="body-text-2">Пациентов записывались через наш сервис</div>
    </div>
    <div class="statistic">
      <div>666 809</div>
      <div class="body-text-2">Отзывов оставили на сайте</div>
    </div>
    <div class="statistic">
      <div>521 308</div>
      <div class="body-text-2">Практикующих врачей в нашей базе</div>
    </div>
    <div class="statistic">
      <div>7 037</div>
      <div class="body-text-2">клиник по подключению к сервису</div>
    </div>
  </div>
</section>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  .statistics {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    gap: 0 min(220px, 10vw);
    margin-top: 2rem;

    border: 1px solid rgba(map.get(env.$color, primary), .1);
    border-radius: .75rem;
    padding: 2rem;

    @media (max-width: map.get(env.$screen-size, netbook)) {
      gap: 0 27px;
    }

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
</style>