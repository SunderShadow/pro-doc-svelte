<script lang="ts">
    import ArrowTopRight from "$ui-kit/icons/ArrowTopRight.svelte";

    type Props = {
        name: string,
        image: string,
        double?: boolean,
    }

    const {
        name,
        image,
        double,
    }: Props = $props()

</script>

<div class="card" class:double>
    <div class="card-content">
      <h2 class="card-title title-1">{name}</h2>
      <p class="card-body body-text-2">
        На нашем портале вы можете выбрать врача из лучших клиник Москвы и получить скидку до 65%.
      </p>
    </div>

    <div class="card-link_icon">
      <ArrowTopRight type="primal" size="sm" />
    </div>

  <div class="card-image_wrapper" style:--img={`url(${image})`}></div>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  $content-color-hover: #fff;

  :global {
    @media (min-width: (map.get(env.$screen-size, tablet) + 1px)) {
      .card:hover .card-link_icon .svg-icon-container {
        --color: #{$content-color-hover};
      }
    }
  }

  .card {
    -webkit-tap-highlight-color: transparent;

    --border-offset: 24px;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    max-width: 784px;
    height: 400px;

    padding: var(--border-offset);

    border: 1px solid rgba(map.get(env.$color, primary), .1);
    border-radius: 12px;
    overflow: hidden;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      --border-offset: 16px;
    }

    &-body,
    &-title {
      transition-property: color;
      transition-duration: 300ms;
    }

    &-title {
      @media (max-width: map.get(env.$screen-size, netbook)) {
        font-size: 16px
      }
    }

    &-body {
      margin-top: 16px;
      opacity: 0;
      transition-property: color, opacity;

      @media (max-width: map.get(env.$screen-size, netbook)) {
        margin-top: 8px;

        font-size: 14px
      }
    }

    &-content {
      position: absolute;
      padding: var(--border-offset);

      > * {
        max-width: 270px;
      }

      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      border-radius: 12px;

      transition-property: background;
      transition-duration: 300ms;
    }

    &:not(.double) &-content {
      z-index: 3;
    }

    &-image_wrapper {
      position: absolute;
      top: 0; left: 0; bottom: 0; right: 0;

      background-image: var(--img);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      transition-property: opacity;
      transition-duration: 300ms;
      z-index: 2;
    }
    
    &-link_icon {
      position: absolute;

      left: var(--border-offset);
      bottom: var(--border-offset);

      stroke-width: 2px;
      transition-property: transform;
      transition-duration: 300ms;

      z-index: 4;
    }

    @media (min-width: (map.get(env.$screen-size, tablet) + 1px)) {
      &:hover &-link_icon {
        transform: rotate(45deg);
      }

      &:hover &-body,
      &:hover &-title {
        opacity: 1;
        color: $content-color-hover;
      }

      &:hover &-content {
        background-color: map.get(env.$color, primary-hover);
      }

      &:active &-content {
        background-color: map.get(env.$color, primary-active);
      }

      &:hover &-image_wrapper {
        opacity: 0;
      }

      @media (min-width: 1600px) {
        &.double:hover &-image_wrapper {
          opacity: 1;
        }
      }
    }

    @media (max-width: map.get(env.$screen-size, netbook)) {
      height: 200px;
    }
  }
</style>