<script lang="ts">
    type Props = {
        content: string,
    }

    const {
        content,
    }: Props = $props()

</script>

<button class="accordion title-1">{content}</button>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

    .accordion {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;

      padding: 1.5rem;

      background-color: map.get(env.$bg-color, primary);

      border: 1px solid rgba(map.get(env.$color, primary), 0.1);
      border-radius: 20px;

      font-family: "Gilroy", sans-serif;
      font-weight: 600;
      line-height: 36px;
    }
</style>