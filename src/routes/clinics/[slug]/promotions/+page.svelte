<script lang="ts">
import Promotion from "./_parts/Promotion.svelte"
import Thumbnail from "./_assets/promition_thumb.jpeg?enhanced&format=webp"
import Pagination from "$ui-kit/Pagination/Pagination.svelte"

let page = $state(1)
</script>

<div class="items">
  <Promotion thumbnail={Thumbnail.img.src}/>
  <Promotion thumbnail={Thumbnail.img.src}/>
</div>

<div class="pagination">
  <Pagination total={3} bind:value={page}/>
</div>

<style lang="scss">
  .items {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .pagination {
    margin-top: 32px;
  }
</style>