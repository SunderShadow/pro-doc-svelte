<script lang="ts">
    import type {Snippet} from "svelte";

    type Props = {
        children: Snippet,
        title: string;
        image: string;
        height: number;
    }

    let {
        children,
        title,
        image,
        height,
    }: Props = $props()

</script>

<div class="preview" style:--img={`url(${image})`} style:--height={height}>
    <div class="preview-content">
        <h1>{title}</h1>
        {@render children?.()}
    </div>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  .preview {
    display: flex;
    align-items: center;

    background-image: linear-gradient(to right, map.get(env.$bg-color, primary) 45%, transparent 60%), var(--img);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;

    width: 100%;
    height: 610px;

    padding: 17.5rem 8.5rem;

    border: 1px solid rgba(map.get(env.$color, primary), .1);;
    border-radius: 12px;

    .preview-content {
      display: flex;
      flex-direction: column;
      gap: 32px;

      width: 650px;

      > h1 {
        line-height: 70.4px;
      }
    }
  }
</style>