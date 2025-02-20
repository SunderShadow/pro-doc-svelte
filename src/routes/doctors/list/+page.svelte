<script lang="ts">
    import Preview from "$ui-kit/Preview/Preview.svelte";
    import DoctorListPreview from "../../_parts/assets/doctor-list-preview.png?enhanced&format=webp"
</script>

<svelte:head>
    <link rel="preload" as="image" href={DoctorListPreview.img.src} />
</svelte:head>

<main class="page-container">
    <Preview title="Неврологи в Москве" image={DoctorListPreview.img.src} isGradient>
        <p class="body-text-1">Невролог — врач, который диагностирует и проводит лечение заболеваний
            центральной и периферической нервной системы — спинного и головного мозга,
            а также нервных волокон.</p>
    </Preview>
</main>

<style lang="scss">
    .page-container {
      .body-text-1 {
        line-height: 28.8px;
      }
    }
</style>