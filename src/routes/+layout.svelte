<script lang="ts">
  import "$lib/ui/bootstrap.scss"

  import Header from "./_parts/Header.svelte"
  import Footer from "./_parts/Footer.svelte"
  import {onMount} from "svelte";

  let pageVisibility = false;

  onMount(() => {
      pageVisibility = true
  })
</script>

<div class="safari_first_view_fix" class:visible={pageVisibility}>
  <Header />
  <slot />
  <Footer />
</div>
