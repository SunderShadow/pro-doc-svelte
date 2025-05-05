<script lang="ts">
import Link from "$ui-kit/Link/Link.svelte"
import type {DocPro} from "$lib/types"

type Props = {
    img: string,
    title: string,
    href: string,
}

const {
    img,
    title,
    href,
}: Props = $props()
</script>

<div class="speciality_card">
  <img src={img} alt="" loading="lazy">
  <Link {href} stretched>{title}</Link>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .speciality_card {
    position: relative;
  }

  :global {
    @media (max-width: map.get(env.$screen-size, mobile)) {
      .speciality_card a {
        font-size: 14px
      }
    }
  }

  @media (max-width: map.get(env.$screen-size, netbook)) {
    img {
      object-fit: cover;
      aspect-ratio: 208 / 180;
    }
  }

  img {
    width: 100%;

    border-radius: 12px;
    margin-bottom: 14px;
  }
</style>