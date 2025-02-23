<script lang="ts">
    type Props = {
        title: string;
        name: string;
        isActive: boolean;
        setActive: Function;
    }

    const {
        title,
        name,
        isActive,
        setActive,
    }: Props = $props()

</script>

<div class="filter-option body-text-3" class:active={isActive}
onclick={() => {setActive(name)}}>
    {title}
</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  .filter-option {
    display: flex;

    font-weight: 600;
    font-family: "Gilroy", sans-serif;

    list-style-type: none;
    cursor: pointer;

    &.active {
      color: map.get(env.$color, primary);
    }
  }
</style>