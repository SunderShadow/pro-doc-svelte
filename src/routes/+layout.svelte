<script lang="ts">
  import "$lib/ui/bootstrap.scss"

  import Header from "./_parts/Header.svelte"
  import Footer from "./_parts/Footer.svelte"

  let page = $props()

</script>


<div class="safari_first_view_fix" >
  <Header />
  <slot />
  <Footer {...page.data.footer}/>
</div>

<style lang="scss">
  :global {
    :root {
      scroll-behavior: smooth;
    }
  }
</style>