<script lang="ts">
    import type {Snippet} from "svelte";

    type Props = {
        children?: Snippet,
        title: string,
        image: string,
        imageMobile: string,
        withGradient?: boolean,
        mobileGradient?: boolean,
        contentWidth?: number,
        gradientWidth?: number|null
    }

    let {
        children,
        title,
        image,
        imageMobile,
        withGradient,
        mobileGradient = true,
        contentWidth = 50,
        gradientWidth = null,
    }: Props = $props()

</script>

<div class="preview"
     class:with_gradient={withGradient}
     class:with_mobile_gradient={mobileGradient}
     style:--img={`url(${image})`}
     style:--img-mobile={`url(${imageMobile})`}
     style:--content-width={contentWidth + '%'}
     style:--gradient-cover-size={(gradientWidth ?? contentWidth) + '%'}
>
    <div class="preview-content">
        <h1>{title}</h1>
        {@render children?.()}
    </div>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  $mobile-breakpoint: 500px;

  .preview {
    --gradient-cover-size: 50%;
    position: relative;

    width: 100%;

    background-image: var(--img);

    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;

    border: 1px solid #ededfa;
    border-radius: 12px;

    &.with_gradient {
      background-image:
          linear-gradient(to right, map.get(env.$bg-color, primary) var(--gradient-cover-size), transparent calc(var(--gradient-cover-size) + 10%)),
          var(--img);

      @media (max-width: $mobile-breakpoint) {
        background-image: var(--img-mobile);
      }
    }

    &.with_mobile_gradient {
      @media (max-width: $mobile-breakpoint) {
        background-image:
            linear-gradient(to bottom, transparent 105px, map.get(env.$bg-color, primary) 210px),
            var(--img-mobile);
      }
    }

    @media (max-width: map.get(env.$screen-size, tablet)) and (min-width: $mobile-breakpoint) {
      height: 310px;
    }

    @media (min-width: $mobile-breakpoint) {
      aspect-ratio: 1600 / 610;
    }

    @media (max-width: $mobile-breakpoint) {
      background-image: var(--img-mobile);

      background-position: top;
      background-size: contain;
    }

    @media (max-width: 360px) {
      background-size: auto 210px;
    }
  }

  .preview-content {
    --left-offset: 8%;

    position: absolute;
    top: 50%;
    left: var(--left-offset);
    transform: translateY(-50%);

    width: calc(var(--content-width) - var(--left-offset));

    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      gap: 16px;
    }

    @media (max-width: $mobile-breakpoint) {
      margin-top: 210px;

      background: #fff;

      width: 100%;
      padding: 24px 16px;
      position: static;
      transform: none;
    }
  }
</style>