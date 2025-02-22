<script lang="ts">
    import Preview from "$ui-kit/Preview/Preview.svelte";
    import DoctorListPreview from "../../_parts/assets/doctor-list-preview.png?enhanced&format=webp"
    import FilterOption from "../../_parts/FilterOption.svelte";
    import Button from "$ui-kit/Button/Button.svelte";
    import Tag from "$ui-kit/Tag/Tag.svelte";
    import Magnifier from "$ui-kit/icons/Magnifier.svelte";
    import DoctorCard from "../../_parts/DoctorCard.svelte";
    import DoctorImage from "./_parts/assets/img/doctor.png?enhanced&format=webp"

    type filterOption = "popularity" | "rating" | "reviews" | "price" | "experience";
    type filterTag = "today" | "next" | "weekends" | "face-to-face" | "online" | "registration" | "rating" | "clinic"

    let activeFilter:filterOption = $state("popularity");
    let activeTag:filterTag = $state("face-to-face")

    const handleActiveFilter = (filter:filterOption) => {
        activeFilter = filter;
    }

    const handleActiveTag = (tag:filterTag) => {
        activeTag = tag;
    }
</script>

<svelte:head>
    <link rel="preload" as="image" href={DoctorListPreview.img.src} />
    <link rel="preload" as="image" href={DoctorImage.img.src} />
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
    <section class="filter-options">
        <p class="link-font-2">Сортировать:</p>
        <div>
            <FilterOption title="по популярности" name="popularity"
                          isActive={activeFilter === "popularity"} setActive={handleActiveFilter} />
            <hr>
            <FilterOption title="по рейтингу" name="rating"
                          isActive={activeFilter === "rating"} setActive={handleActiveFilter}/>
            <hr>
            <FilterOption title="по отзывам" name="reviews"
                          isActive={activeFilter === "reviews"} setActive={handleActiveFilter}/>
            <hr>
            <FilterOption title="по цене" name="price"
                          isActive={activeFilter === "price"} setActive={handleActiveFilter}/>
            <hr>
            <FilterOption title="по стажу" name="experience"
                          isActive={activeFilter === "experience"} setActive={handleActiveFilter}/>
        </div>
    </section>
    <section class="filter-tags">
        <div class="tags">
            <Tag isActive={activeTag === "today"} name="today"
                 setActive={handleActiveTag}>Сегодня 12 дек.</Tag>
            <Tag isActive={activeTag === "next"} name="next"
                 setActive={handleActiveTag}>Ближайшие 3 дня</Tag>
            <Tag isActive={activeTag === "weekends"} name="weekends"
                 setActive={handleActiveTag}>Выходные 17 дек.- 18 дек.</Tag>
            <Tag isActive={activeTag === "face-to-face"} name="face-to-face"
                 setActive={handleActiveTag}>Очные Консультации</Tag>
            <Tag isActive={activeTag === "online"} name="online"
                 setActive={handleActiveTag}>Онлайн Консультации</Tag>
            <Tag isActive={activeTag === "registration"} name="registration"
                 setActive={handleActiveTag}>Есть онлайн-запись</Tag>
            <Tag isActive={activeTag === "rating"} name="rating"
                 setActive={handleActiveTag}>С рейтингом выше 4 звёзд</Tag>
            <Tag isActive={activeTag === "clinic"} name="clinic"
                 setActive={handleActiveTag}>Приём в клинике</Tag>
        </div>
        <div class="button link-font-1">
            <Button><Magnifier size="sm" type="secondary"/> Показать на карте</Button>
        </div>
    </section>
    <section class="doctor-card">
        <DoctorCard name="Горбунов Алексей Викторович" image={DoctorImage.img.src}/>
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
    .filter-options {
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 8px;

      padding-top: 4rem;

      > div {
        display: flex;

        > hr {
          margin: 0 8px;
        }
      }
    }

    .filter-tags {
      display: flex;
      flex-direction: column;
      gap: 32px;

      padding-top: 1rem;

      .tags {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;

        padding: 2rem 1.5rem;

        border: 1px solid rgba(map.get(env.$color, primary), .1);
        border-radius: 12px;
      }
    }

    :global {
      .button {
        > button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;

          width: 100%;
        }
      }
    }
  }
</style>