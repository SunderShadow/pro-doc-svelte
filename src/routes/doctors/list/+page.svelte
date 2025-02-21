<script lang="ts">
    import DoctorListPreview from "../../_parts/assets/doctor-list-preview.png?enhanced&format=webp"
    import Preview from "$ui-kit/Preview/Preview.svelte";

</script>

<svelte:head>
  <link rel="preload" as="image" href={DoctorListPreview.img.src} />
</svelte:head>

<Preview title="Неврологи в Москве" image={DoctorListPreview.img.src} height={1000}>
  <p class="body-text-1">Невролог — врач, который диагностирует и проводит лечение заболеваний
    центральной и периферической нервной системы — спинного и головного мозга,
    а также нервных волокон.</p>
</Preview>


<style lang="scss">
    .page-container {
      .body-text-1 {
        line-height: 28.8px;
      }
    }
</style>