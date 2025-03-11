<script lang="ts">
    import Input from "$ui-kit/Form/Input.svelte"
    import Magnifier from "$ui-kit/icons/Magnifier.svelte"
    let props = $props()
</script>
{#snippet searchMagnifierIcon()}
  <div class="magnifier">
    <Magnifier size="sm"/>
  </div>
{/snippet}
<div class="search">
  <Input {...props} preIcon={searchMagnifierIcon} />
</div>

<style lang="scss">
  .magnifier {
    opacity: .5;
  }
</style>