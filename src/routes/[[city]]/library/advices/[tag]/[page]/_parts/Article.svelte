<script lang="ts">
  import Link from "$ui-kit/Link/Link.svelte"
  import type { Blog } from "$lib/types"

  const {
      thumbnail,
      title,
      excerpt,
      slug
  }: Blog.Advice = $props()

  const href = '/library/advices/article/' + slug
</script>
<article>
  <img src={thumbnail} alt="" loading="lazy">

  <div class="body">
    <h1 class="title-1">{title}</h1>

    <p class="body-text-2">{excerpt}</p>

    <div class="link"><Link {href} primary stretched>Узнать больше</Link></div>
  </div>
</article>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  article {
    display: flex;
    flex-direction: column;
    position: relative;

    border: 1px solid rgba(map.get(env.$color, primary), .1);
    border-radius: 12px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      &:first-child .link {
        margin-left: auto;
      }
    }
  }

  img {
    width: 100%;
    aspect-ratio: 512 / 250;
    object-fit: cover;

    @media (max-width: map.get(env.$screen-size, netbook)) {
      aspect-ratio: 448 / 250;
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      aspect-ratio: 329 / 250;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: 16px;

    flex-grow: 1;

    padding: 32px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      padding: 16px;
    }
  }

  .link {
    margin-top: auto;
  }
</style>