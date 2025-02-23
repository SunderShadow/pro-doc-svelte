<script lang="ts">
import Link from "$ui-kit/Link/Link.svelte"

type Props = {
    img: string,
    title: string,
    href: string,
}

const {
    img,
    title,
    href
}: Props = $props()
</script>

<div class="speciality_card">
  <img src={img} alt="" loading="lazy">
  <Link {href} stretched>{title}</Link>
</div>

<style lang="scss">
  .speciality_card {
    position: relative;
  }

  img {
    max-width: 100%;

    border-radius: 12px;
    margin-bottom: 14px;
  }
</style>