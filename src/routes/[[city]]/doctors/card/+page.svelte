<script lang="ts">
  import Breadcrumbs from "$ui-kit/Breadcrumbs/Breadcrumbs.svelte";
  import Accordion from "$ui-kit/Accordion/Accordion.svelte";
  import Card from "./_parts/Card.svelte";

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

<svelte:head>
  <title>Карточка врача</title>
</svelte:head>
<svelte:window bind:innerWidth={screenWidth}></svelte:window>

<main class="page-container">
  <div class="breadcrumbs">
    <Breadcrumbs list={breadcrumbs} />
  </div>
  <Card/>
  {#if screenWidth > 400}
    <section class="accordion-container">
      <h2>Вопросы и ответы</h2>
      <div class="accordion-content">
        <Accordion title="Какой рейтинг и отзывы?">
          <p class="body-text-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, ut!</p>
        </Accordion>
        <Accordion title="Где работает Горбунов Алексей Викторович?">
          <p class="body-text-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, ut!</p>
        </Accordion>
        <Accordion title="Какая стоимость приёма?">
          <p class="body-text-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, ut!</p>
        </Accordion>
        <Accordion title="Какие преимущества врача?">
          <p class="body-text-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, ut!</p>
        </Accordion>
      </div>
    </section>
  {/if}
</main>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  .breadcrumbs {
    @media (max-width: map.get(env.$screen-size, netbook)) {
      margin-top: 16px;
    }
  }

  .desktop-card {
    @media (max-width: map.get(env.$screen-size, netbook)) {
      display: none;
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