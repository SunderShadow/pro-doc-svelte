<script lang="ts">
    import DropdownFilter from "../../../doctors/works_with/[age]/category/[category]/_parts/DropdownFilter.svelte"

    const filterSelectData = [
        {
            title: "по времени записи",
            id: 0
        },
        {
            title: "по времени записи",
            id: 1
        },
        {
            title: "по времени записи",
            id: 2
        },
        {
            title: "по времени записи",
            value: "price",
            id: 3
        },
        {
            title: "по времени записи",
            id: 4
        }
    ]

    let activeFilter = $state(0);

</script>

<section class="filter-mobile">
  <DropdownFilter bind:value={activeFilter} data={filterSelectData}/>
</section>
<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  .filter-mobile {
    display: flex;

    .filter-icon {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
</style>