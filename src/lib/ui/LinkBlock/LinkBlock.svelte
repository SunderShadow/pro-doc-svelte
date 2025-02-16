<script lang="ts">
    import ArrowTopRight from "$ui-kit/icons/ArrowTopRight.svelte";
</script>

<button>
    <span class="title-1">Посмотреть все отзывы</span>
    <span class="icon">
        <ArrowTopRight size="sm" type="secondary" />
    </span>
</button>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

    button {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: left;

      padding: 1.5rem;

      height: 100%;
      width: 100%;

      background-color: map.get(env.$color, primary);

      border: none;
      border-radius: 12px;

      outline: none;
      cursor: pointer;

      transition: background-color 0.3s;

      > span {
        color: map.get(env.$color, secondary);

        align-self: start;
      }

      .icon {
        align-self: end;
        stroke-width: 2 ;
      }

      &:hover {
        background-color: map.get(env.$color, primary-hover);
      }

      &:active {
        background-color: map.get(env.$color, primary-active);
      }
    }
</style>