<script lang="ts">
  import "$lib/ui/bootstrap.scss"

  import toasts from "$lib/storage/toasts"

  import Header from "./_parts/Header.svelte"
  import Footer from "./_parts/Footer.svelte"
  import Toast from "$ui-kit/Toast/Toast.svelte"
  import ToastList from "$lib/components/ToastList.svelte"

  let {
      children,
      data
  } = $props()
</script>

<svelte:head>
  <!--{@html data.meta}-->
</svelte:head>

<div class="safari_first_view_fix" >
  <ToastList>
    {#each $toasts as toast}
      <Toast type={toast.type}>{toast.message}</Toast>
    {/each}
  </ToastList>

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