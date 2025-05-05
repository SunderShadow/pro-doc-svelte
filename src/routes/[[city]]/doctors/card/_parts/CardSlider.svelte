<script lang="ts">
    import CertificateSlider from "./CertificateSlider.svelte";
    import ReviewSlider from "./ReviewSlider.svelte";

</script>

<section class="reviews">
  <h4>Отзывы о враче</h4>
  <div class="reviews-container">
    <ReviewSlider />
  </div>
</section>
<section class="documents">
  <h4>Документы и фотографии</h4>
  <div class="documents-content">
    <CertificateSlider />
  </div>
</section>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  h4 {
    font-size: 1.5rem;
    line-height: 36px;
    font-weight: 600;
  }

  .reviews {
    display: flex;
    flex-direction: column;

    padding-top: 2rem;

    > h4 {
      margin-bottom: 16px;
    }
  }

  .documents {
    padding-top: 2rem;

    > h4 {
      margin-bottom: 16px;
    }
  }

  .documents-content {
    display: flex;
    gap: 28px;

    margin-bottom: 32px;

    overflow-x: hidden;
  }
</style>