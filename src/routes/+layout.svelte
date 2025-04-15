<script lang="ts">
  import "$lib/ui/bootstrap.scss"

  import Header from "./_parts/Header.svelte"
  import Footer from "./_parts/Footer.svelte"

  let {
      children,
      data
  } = $props()

</script>

<svelte:head>
  <!--{@html data.meta}-->
</svelte:head>

<div class="safari_first_view_fix" >
  <Header />
  {@render children?.()}
  <Footer {...data.footer}/>
</div>

<style lang="scss">
  :global {
    :root {
      scroll-behavior: smooth;
    }
  }
</style>