<script lang="ts">
    import type {Snippet} from "svelte";

    type Props = {
        children: Snippet,
        title: string;
        image: string;
        isGradient: boolean;
    }

    let {
        children,
        title,
        image,
        isGradient,
    }: Props = $props()

</script>

<div class="preview" style:--img={`url(${image})`} class:gradient={isGradient}>
    <div class="preview-content">
        <h1>{title}</h1>
        {@render children?.()}
    </div>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  $mobile-adaptive: 600px;

  .preview {
    display: flex;
    align-items: center;

    background-image: var(--img);
    background-size: cover;
    background-repeat: no-repeat;


    width: 100%;
    height: 610px;

    padding: 13rem 8.5rem;

    border: 1px solid rgba(map.get(env.$color, primary), .1);;
    border-radius: 12px;

    &.gradient {
      background-image: linear-gradient(to right, map.get(env.$bg-color, primary) 45%, transparent 60%), var(--img);
      background-position: right;
      background-size: contain;

      @media (max-width: map.get(env.$screen-size, netbook)) {
        background-image: linear-gradient(to right, map.get(env.$bg-color, primary) 45%, transparent 65%), var(--img);
      }
    }

    .preview-content {
      display: flex;
      flex-direction: column;
      gap: 32px;

      width: 650px;

      > h1 {
        line-height: 70.4px;
      }
    }
    @media (max-width: map.get(env.$screen-size, netbook)) {
      height: 410px;
      padding: 4.875rem;

      .preview-content {
        width: 450px;

        > h1 {
          font-size: 3rem;

          line-height: 52.8px;
        }
      }
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      height: 310px;
      padding: 4rem;

      .preview-content {
        width: 320px;

        gap: 16px;

        > h1 {
          font-size: 1.5rem;

          line-height: 26.4px;
        }
      }

    }

    @media (max-width: $mobile-adaptive) {
      height: 450px;
      padding: 1.5rem 1rem;

      background-image: linear-gradient(to top, map.get(env.$bg-color, primary) 60%, transparent 80%), var(--img);
      background-position: top;

      align-items: end;

      .preview-content {
        width: 100%;

        gap: 16px;
      }
    }
  }
</style>