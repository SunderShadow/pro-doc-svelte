<script lang="ts">
    import Search from "$ui-kit/Search/Search.svelte";
</script>

<div class="search-group">
    <Search placeholder="Врач, клиника, болезнь, услуга" />
    <hr/>
    <Search placeholder="Метро, район, округ, город МО" />
    <hr/>
    <Search placeholder="Дата приёма" />
    <button>Найти</button>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

    .search-group {
      display: flex;

      width: 100%;

      border: 1px solid rgba(map.get(env.$color, primary), .1);
      border-radius: 12px;

      & > button {
        width: 100%;
        max-width: 111px;

        background-color: map.get(env.$color, primary);

        font-weight: 600;
        font-size: 1rem;
        line-height: 27.2px;
        color: map.get(env.$bg-color, primary);

        cursor: pointer;
        border: none;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
      }

      > hr {
        margin: auto 0;

        height: 1.5rem;

        color: rgba(map.get(env.$color, primary), .1);
      }
    }
</style>