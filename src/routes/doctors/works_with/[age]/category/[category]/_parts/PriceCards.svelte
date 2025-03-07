<script>
    import Online from "$ui-kit/icons/Online.svelte";
    import Ambulance from "$ui-kit/icons/Ambulance.svelte";
    import Clinic from "$ui-kit/icons/Clinic.svelte";
</script>

<div class="price">
  <div class="price-container">
    <div class="price-card">
      <Clinic size="md" type="primary"/>
      <span class="title-2">В клинике</span>
      <bspan class="price">1 500 ₽</bspan>
    </div>
    <div class="price-card">
      <Online size="md" type="primary"/>
      <span class="title-2">Онлайн</span>
      <span class="price">2 000 ₽</span>
    </div>
    <div class="price-card">
      <Ambulance size="md" type="primary"/>
      <span class="title-2">Вызов на дом</span>
      <span class="price">от 3 500 ₽</span>
    </div>
  </div>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  .price {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .price-container {
      display: flex;
      gap: 16px;

      @media (max-width: map.get(env.$screen-size, mobile)) {
        flex-direction: column;

        padding-top: .5rem;
      }
    }
  }

  .price-card {
    display: flex;
    flex-direction: column;
    gap: 8px;

    width: 100%;

    padding: 1rem;

    border: 1px solid rgba(map.get(env.$color, primary), 0.1);
    border-radius: 12px;

    .title-2 {
      font-weight: 400;
      line-height: 27px;
    }

    .price {
      font-size: 1.125rem;
      font-weight: 700;
    }
  }
</style>