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

    <section class="stats">
        <h2>Найдено <span>6340</span> врачей и <span>5373</span> отзывов пациентов</h2>
        <ul>
            <li class="body-text-1">Найдите хорошего невролога и запишитесь на приём</li>
            <li class="body-text-1">Цена приёма от 100 до 34500 рублей (средняя 2900 рублей)</li>
        </ul>
    </section>
</main>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  $default-text: #000000;
  $mobile-adaptive: 600px;

  .page-container {
    .body-text-1 {
      line-height: 28.8px;
    }

    .stats {
      display: flex;
      flex-direction: column;
      gap: 32px;

      padding-top: 96px;

      width: 100%;

      @media (max-width: $mobile-adaptive) {
        gap: 16px;
      }

      > h2 {
        line-height: 52.8px;

        @media (max-width: map.get(env.$screen-size, netbook)) {
          font-size: 2rem;
          line-height: 32.2px;
        }

        @media (max-width: map.get(env.$screen-size, tablet)) {
          font-size: 1.5rem;
          line-height: 26.4px;
        }

        > span {
          color: map.get(env.$color, primary);
        }
      }

      > ul {
        > li {
          display: flex;

          color: $default-text;

          list-style-type: none;

          &::before {
            content: "•";
            color: map.get(env.$color, primary);

            font-size: 1.75rem;

            margin-right: 8px;
          }

          @media (max-width: map.get(env.$screen-size, tablet)) {
            font-size: 1rem;
          }
        }
      }
    }
  }
</style>