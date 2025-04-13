<script lang="ts">
  import "$lib/ui/bootstrap.scss"

  import Header from "./_parts/Header.svelte"
  import Footer from "./_parts/Footer.svelte"
  import {beforeNavigate} from "$app/navigation"
  import {getPageMeta} from "$api/local-server"

  let page = $props()

  let meta = $state(page.data.meta);

  beforeNavigate(async (pageData) => {
      if (pageData.to) {
          const uri = pageData.to.url.pathname
          meta = await getPageMeta(uri).catch(err => {
              if (err.status === 404) {
                  return ''
              }
          })
      }
  })
</script>

<svelte:head>
  {@html meta}
</svelte:head>

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