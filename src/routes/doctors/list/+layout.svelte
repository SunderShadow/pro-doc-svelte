<script lang="ts">
  import Breadcrumbs from "$ui-kit/Breadcrumbs/Breadcrumbs.svelte"
  import type {Snippet} from "svelte"

  let breadcrumbs = [
      {
          title: 'Главная',
          href: '/'
      },
      {
          title: 'Врачи',
          href: '/doctors/list'
      }
  ]

  type Props = {
      children: Snippet
  }

  const {
      children,
  }: Props = $props()
</script>

<div class="page-container">
  <div class="breadcrumbs">
    <Breadcrumbs list={breadcrumbs}/>
  </div>

  {@render children?.()}
</div>


<style lang="scss">
  .breadcrumbs {
      margin-bottom: 40px;
  }
</style>