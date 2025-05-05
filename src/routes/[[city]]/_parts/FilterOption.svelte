<script lang="ts">
    type Props = {
        title: string;
        isActive: boolean;
        onclick: () => void;
    }

    const {
        title,
        isActive,
        onclick,
    }: Props = $props()

</script>

<div class="filter-option body-text-3" class:active={isActive} {onclick}>
    {title}
</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  .filter-option {
    display: flex;

    font-weight: 600;
    font-family: "Gilroy", sans-serif;
    line-height: 22.4px;

    list-style-type: none;
    cursor: pointer;

    &.active {
      color: map.get(env.$color, primary);
    }
  }
</style>