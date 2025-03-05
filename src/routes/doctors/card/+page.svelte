<script lang="ts">
  import Breadcrumbs from "$ui-kit/Breadcrumbs/Breadcrumbs.svelte";
  import Accordion from "$ui-kit/Accordion/Accordion.svelte";
  import Card from "./_parts/Card.svelte";
  import MobileCard from "./_parts/MobileCard.svelte";

  let breadcrumbs = [
      {
          title: 'Главная',
          href: '/'
      },
      {
          title: 'Врачи',
          href: '/'
      },
      {
          title: 'Взрослый врач Невролог',
          href: '/'
      },
      {
          title: 'Горбунов Алексей Викторович',
          href: ''
      }
  ]

  let screenWidth = $state(0);

</script>

<svelte:window bind:innerWidth={screenWidth}></svelte:window>

<main class="page-container">
  <Breadcrumbs list={breadcrumbs} />
  <div class="desktop-card">
    <Card/>
  </div>
  <div class="mobile-card">
    <MobileCard/>
  </div>
  {#if screenWidth > 400}
    <section class="accordion-container">
      <h2>Вопросы и ответы</h2>
      <div class="accordion-content">
        <Accordion title="Какой рейтинг и отзывы?">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, ut!
        </Accordion>
        <Accordion title="Где работает Горбунов Алексей Викторович?">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, corporis?
        </Accordion>
        <Accordion title="Какая стоимость приёма?">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, non!
        </Accordion>
        <Accordion title="Какие преимущества врача?">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, vel?
        </Accordion>
      </div>
    </section>
  {/if}
</main>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  .desktop-card {
    @media (max-width: map.get(env.$screen-size, netbook)) {
      display: none;
    }
  }

  .mobile-card {
    @media (max-width: map.get(env.$screen-size, netbook)) {
      display: block;
    }
  }

  .accordion-container {
    padding-top: 12rem;

    @media (max-width: map.get(env.$screen-size, netbook)) {
      padding-top: 6rem;
    }

    > h2 {
      margin-bottom: 64px;
    }
  }

  .accordion-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
</style>