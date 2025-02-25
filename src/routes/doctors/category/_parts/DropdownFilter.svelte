<script lang="ts">
    import ArrowDown from "$ui-kit/icons/ArrowDown.svelte";

    type Props = {
      value: number;
      data: Array<any>,
    }

    let {
      value = $bindable(),
      data,
    }: Props = $props()

    let isActiveDropdown = $state(false);

    const toggleDropdown = () => {
        isActiveDropdown = !isActiveDropdown;
    }

    const getActiveFilter = () => {
        const filter = data.find((filter) => filter.id === value);
        return filter ? filter.title : '';
    }

    const handleActiveFilter = (id) => {
        value = id;
    }
</script>

<div class="dropdown link-font-2" onclick={toggleDropdown}>
  <div class="dropdown-header">
    {getActiveFilter()}
    <ArrowDown size="sm"/>
  </div>
  {#if isActiveDropdown}
    <div class="dropdown-content">
      {#each data as filter}
        <span onclick={() => handleActiveFilter(filter.id)}>{filter.title}</span>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  .dropdown {
    display: flex;
    justify-content: end;

    min-width: 145px;

    position: relative;

    color: map.get(env.$color, primary);
  }

  .dropdown-header {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .dropdown-content {
    display: flex;
    flex-direction: column;
    gap: 8px;

    position: absolute;
    top: 100%;

    padding: .25rem;

    width: 100%;

    text-align: center;

    background-color: map.get(env.$bg-color, primary);
    border: 1px solid rgba(map.get(env.$color, primary), .1);
    border-radius: 8px;
  }
</style>