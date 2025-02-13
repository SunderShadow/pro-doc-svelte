<script lang="ts">
    import ArrowDown from "$ui-kit/icons/ArrowDown.svelte";

    type Props = {
        placeholder: string,
    }

    const {
        placeholder,
    }: Props = $props()
</script>

<label class="search">
    <input placeholder={placeholder} />
    <ArrowDown type="primary" size="sm" />
</label>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  .search {
    display: flex;
    justify-content: space-between;

    max-width: 25rem;
    padding: 1rem 1.5rem;

    width: inherit;

    > input {
      border: none;
      outline: none;
      width: 100%;

      &::placeholder {
        font-size: 1rem;
        font-weight: 400;
        text-overflow: ellipsis;
      }
    }
  }
</style>