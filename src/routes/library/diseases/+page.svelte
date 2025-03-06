<script lang="ts">
  import Breadcrumbs from "$ui-kit/Breadcrumbs/Breadcrumbs.svelte";

  let breadcrumbs = [
      {
          title: 'Главная',
          href: '/'
      },
      {
          title: 'Библиотека',
          href: '/'
      },
      {
          title: 'Заболевания',
          href: ''
      }
  ]
</script>

<main class="page-container">
  <div class="breadcrumbs">
    <Breadcrumbs list={breadcrumbs}/>
  </div>

</main>

<style lang="scss">

</style>