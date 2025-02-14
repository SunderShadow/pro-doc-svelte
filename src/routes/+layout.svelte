<script lang="ts">
  import "$lib/ui/bootstrap.scss"

  import Header from "./_parts/Header.svelte"
  import Footer from "./_parts/Footer.svelte"
</script>

<Header />
<slot />
<Footer />

<style lang="scss">
</style>