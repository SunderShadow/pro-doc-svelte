<script lang="ts">
  import "$lib/ui/bootstrap.scss"

  import Header from "./_parts/Header.svelte"
  import Footer from "./_parts/Footer.svelte"
</script>

<div class="safari_first_view_fix" >
  <Header />
  <slot />
  <Footer />
</div>
