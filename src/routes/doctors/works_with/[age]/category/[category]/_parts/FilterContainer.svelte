<script lang="ts">
    import FilterOption from "$lib/../routes/_parts/FilterOption.svelte";
    import FiltersIcon from "$ui-kit/icons/Filters.svelte";
    // import DropdownFilter from "./DropdownFilter.svelte";
    import Filters from "../../../_parts/Filters.svelte";

    const filterSelectData = [
        {
            title: "по популярности",
            id: 0
        },
        {
            title: "по рейтингу",
            id: 1
        },
        {
            title: "по отзывам",
            id: 2
        },
        {
            title: "по цене",
            value: "price",
            id: 3
        },
        {
            title: "по стажу",
            id: 4
        }
    ]

    let activeFilter = $state(0);
    let openFilters = $state()

    const handleActiveFilter = (id:number) => {
        activeFilter = id;
    }

</script>

<section class="filter-options">
  <span class="link-font-2">Сортировать:</span>
  <div>
    {#each filterSelectData as filter}
      <FilterOption title={filter.title} isActive={activeFilter === filter.id}
                    onclick={() => handleActiveFilter(filter.id)}/>
    {/each}
  </div>
</section>
<section class="filter-mobile">
  <Filters bind:open={openFilters}/>
  <div class="filter-icon" onclick={openFilters}>
    <FiltersIcon size="sm"/>
    <span class="link-font-2">Фильтр</span>
  </div>
<!--  <DropdownFilter bind:value={activeFilter} data={filterSelectData}/>-->
</section>
<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

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

    @media (max-width: map.get(env.$screen-size, tablet)) {
      display: none;
    }
  }

  .filter-mobile {
    display: none;

    padding-top: 2rem;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      display: flex;
      justify-content: space-between;
    }

    .filter-icon {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
</style>