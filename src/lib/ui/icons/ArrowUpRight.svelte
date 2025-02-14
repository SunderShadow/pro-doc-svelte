<script lang="ts">
    import SvgContainer from "$ui-kit/SvgContainer/SvgContainer.svelte"

    let props = $props()
</script>

<SvgContainer {...props}>
  <svg class="stroke-only" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.875 6.875H17.625V16.625M6.375 18.125L17.625 6.875" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</SvgContainer>