<script lang="ts">
    import { slide } from 'svelte/transition';
    import ArrowDown from "$ui-kit/icons/ArrowDown.svelte";

    type Props = {
      value: number;
      data: Array<{
          id: any,
          title: string
      }>,
    }

    let {
      value = $bindable(),
      data,
    }: Props = $props()

    value = value ?? data[0].id

    let isActiveDropdown = $state(false);

    const toggleDropdown = (e) => {
        e.stopPropagation()
        isActiveDropdown = !isActiveDropdown;
    }

    const closeDropdown = () => {
        isActiveDropdown = false
    }

    const getActiveFilterName = () => {
        const filter = data.find((filter) => filter.id === value);
        return filter?.title ?? ''
    }

    const handleActiveFilter = (id) => {
        value = id;
    }

</script>
<svelte:window onclick={closeDropdown}></svelte:window>
<div class="dropdown link-font-2" onclick={toggleDropdown}>
  <div class="dropdown-header">
    {getActiveFilterName()}
    <div class="dropdown-icon" class:active={isActiveDropdown}>
      <ArrowDown size="sm"/>
    </div>
  </div>
  {#if isActiveDropdown}
    <div class="dropdown-content" transition:slide>
      {#each data as filter}
        <button onclick={() => handleActiveFilter(filter.id)}>{filter.title}</button>
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
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 8px;

    position: absolute;
    top: 100%;

    padding: .25rem;

    text-align: center;

    background-color: map.get(env.$bg-color, primary);
    border: 1px solid rgba(map.get(env.$color, primary), .1);
    border-radius: 8px;
    z-index: 5;
  }

  .dropdown-icon {
    transition-property: transform, opacity;
    transition-duration: 300ms;
    transform-origin: center center;

    &.active {
      transform: rotateX(180deg);
    }
  }

  button {
    background: none;
    padding: .25em .5em;
    border: none;
    font: inherit;
    color: inherit;
  }
</style>