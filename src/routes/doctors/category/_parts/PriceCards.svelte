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
      <b>1 500 ₽</b>
    </div>
    <div class="price-card">
      <Online size="md" type="primary"/>
      <span class="title-2">Онлайн</span>
      <b>2 000 ₽</b>
    </div>
    <div class="price-card">
      <Ambulance size="md" type="primary"/>
      <span class="title-2">Вызов на дом</span>
      <b>от 3 500 ₽</b>
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

    &-price {
      font-weight: 600;
    }
  }
</style>