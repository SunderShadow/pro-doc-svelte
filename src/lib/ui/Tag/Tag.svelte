<script lang="ts">
    type Props = {
        tag: string
    }

    const {
        tag,
    }: Props = $props()
</script>

<div class="tag">{tag}</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

    .tag {
      font-weight: 600;
      font-size: .9rem;
      line-height: 22.4px;
      color: map.get(env.$color, primary);

      padding: 0.25rem .5rem;

      width: fit-content;

      border: 1px solid rgba(map.get(env.$color, primary), .1);
      border-radius: 8px;

      cursor: pointer;
    }
</style>