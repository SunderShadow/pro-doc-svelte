<script lang="ts">
  import ClientImage1 from "./_assets/img/clients/1.png?enhanced&format=webp"
  import ClientImage2 from "./_assets/img/clients/2.png?enhanced&format=webp"
  import ClientImage3 from "./_assets/img/clients/3.png?enhanced&format=webp"

  import ClientReview from "$lib/components/ClientReview.svelte"
  import Pagination from "$ui-kit/Pagination/Pagination.svelte"
  import CategorySwitcher from "./_parts/CategorySwitcher.svelte";

  let page = $state(1)
  let screenWidth = $state(0)
</script>

<svelte:window bind:innerWidth={screenWidth}></svelte:window>
<div class="switcher">
  <CategorySwitcher />
</div>

<div class="reviews">
  <ClientReview 
      title="«Спасибо Алексею Викторовичу за то, что помог разобраться‥»."
      description="Спасибо Алексею Викторовичу за то, что помог разобраться в моей проблеме. До него я был у многих врачей и от них информации не добыл! Алексей Викторович помог мне в лечении, которое я ему накручивал до его посещения."
      author="Пациент"
      authorImage={ClientImage1.img.src}
  />
  {#if screenWidth > 425}
    <ClientReview
        title="«Спасибо Алексею Викторовичу за то, что помог разобраться‥»."
        description="Спасибо Алексею Викторовичу за то, что помог разобраться в моей проблеме. До него я был у многих врачей и от них информации не добыл! Алексей Викторович помог мне в лечении, которое я ему накручивал до его посещения."
        author="Пациент"
        authorImage={ClientImage2.img.src}
    />
    <ClientReview
        title="«Спасибо Алексею Викторовичу за то, что помог разобраться‥»."
        description="Спасибо Алексею Викторовичу за то, что помог разобраться в моей проблеме. До него я был у многих врачей и от них информации не добыл! Алексей Викторович помог мне в лечении, которое я ему накручивал до его посещения."
        author="Пациент"
        authorImage={ClientImage3.img.src}
    />
  {/if}
</div>

<div class="pagination">
  <Pagination total={3} bind:value={page}/>
</div>

<style lang="scss">
  .switcher {
    width: 100%;
    margin-bottom: 16px;
    overflow-x: auto;
  }

  .reviews {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .pagination {
    margin-top: 32px;
  }
</style>