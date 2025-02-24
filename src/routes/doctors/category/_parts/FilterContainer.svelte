<script lang="ts">
    import FilterOption from "../../../_parts/FilterOption.svelte";

    type filterOption = "popularity" | "rating" | "reviews" | "price" | "experience";

    let activeFilter:filterOption = $state("popularity");

    const handleActiveFilter = (filter:filterOption) => {
        activeFilter = filter;
    }
</script>

<section class="filter-options">
  <p class="link-font-2">Сортировать:</p>
  <div>
    <FilterOption title="по популярности" isActive={activeFilter === "popularity"} onclick={() => handleActiveFilter("popularity")}/>
    <FilterOption title="по рейтингу" isActive={activeFilter === "rating"} onclick={() => handleActiveFilter("rating")}/>
    <FilterOption title="по отзывам" isActive={activeFilter === "reviews"} onclick={() => handleActiveFilter("reviews")}/>
    <FilterOption title="по цене" isActive={activeFilter === "price"} onclick={() => handleActiveFilter("price")}/>
    <FilterOption title="по стажу" isActive={activeFilter === "experience"} onclick={() => handleActiveFilter("experience")}/>
  </div>
</section>
<style lang="scss">
  $black-color: #000000;

  .filter-options {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 8px;

    padding-top: 4rem;

    > div {
      display: flex;
      gap: 8px;
    }

    :global {
      .filter-option:not(:first-child)::before {
        content: "|";

        margin-right: 8px;

        height: 24px;

        color: $black-color;
        opacity: .15;
      }
    }
  }
</style>