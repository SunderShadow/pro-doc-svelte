<script lang="ts">
  import Preview from "$ui-kit/Preview/Preview.svelte"
  import PreviewImg from "./_assets/preview.jpeg?enhanced&format=webp"
  import PreviewImgMobile from "./_assets/preview-mobile.png?enhanced&format=webp"

  import Promotion from "./_parts/Promotion.svelte"
  import PromotionThumb from "./_assets/promition_thumb.jpeg?enhanced&format=webp"
  import Pagination from "$ui-kit/Pagination/Pagination.svelte";

  let screenWidth = $state(0)

  let pageNum = $state(1)
</script>

<svelte:head>
  <title>Акции</title>
</svelte:head>

<svelte:window bind:innerWidth={screenWidth}></svelte:window>
<section class="page-container">
  <Preview
      title="Акции и специальные предложения клиник Москвы"
      image={PreviewImg.img.src}
      imageMobile={PreviewImgMobile.img.src}
      contentWidth={screenWidth > 1024 ? 50 : 70}
      withGradient
      gradientWidth={5}
  />
</section>

<main class="page-container page-section">
  <div class="items">
    <Promotion thumbnail={PromotionThumb.img.src}></Promotion>
    <Promotion thumbnail={PromotionThumb.img.src}></Promotion>
  </div>
  <div class="pagination">
    <Pagination total={3} bind:value={pageNum}></Pagination>
  </div>
</main>

<style lang="scss">
  .items {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .pagination {
    margin-top: 32px;
  }
</style>