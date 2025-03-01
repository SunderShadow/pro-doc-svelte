<script lang="ts">
  import Breadcrumbs from "$ui-kit/Breadcrumbs/Breadcrumbs.svelte";

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
</script>

<main class="page-container">
  <Breadcrumbs list={breadcrumbs} />
</main>

<style lang="scss">

</style>