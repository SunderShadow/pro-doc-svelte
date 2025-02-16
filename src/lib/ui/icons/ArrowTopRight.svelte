<script lang="ts">
    import SvgContainer from "$ui-kit/SvgContainer/SvgContainer.svelte"

    let props = $props()
</script>

<SvgContainer {...props}>
    <svg class="stroke-only" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.49422 5.17578H18.9742V17.6558M4.57422 19.5758L18.9742 5.17578" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</SvgContainer>