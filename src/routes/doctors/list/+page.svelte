<script lang="ts">
    import DoctorListPreview from "../../_parts/assets/doctor-list-preview.png?enhanced&format=webp"
    import Preview from "$ui-kit/Preview/Preview.svelte"
    import FilterForm from "../_parts/FilterForm.svelte"

</script>

<svelte:head>
  <title>Врачи</title>
  <link rel="preload" as="image" href={DoctorListPreview.img.src} />
</svelte:head>

<Preview title="Неврологи в Москве" image={DoctorListPreview.img.src} height={1000}>
  <p class="body-text-1">Невролог — врач, который диагностирует и проводит лечение заболеваний
    центральной и периферической нервной системы — спинного и головного мозга,
    а также нервных волокон.</p>
</Preview>

<section class="page-container page-section">
  <h1>Запись к врачу в Москве</h1>

  <div class="main-wrapper">
    <div class="filter-section">
      <FilterForm />
    </div>
    <main></main>
  </div>
</section>

<style lang="scss">
  .filter-section {
    width: 240px;
  }

  .main-wrapper {
    display: flex;
  }

  .page-container {
    .body-text-1 {
      line-height: 28.8px;
    }
  }
</style>