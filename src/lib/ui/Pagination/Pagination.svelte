<script lang="ts">
    import SvgContainer from "$ui-kit/SvgContainer/SvgContainer.svelte";
    import Button from "$ui-kit/Button/Button.svelte";

    type Props = {
        total: number,
        value: number,
        visibleCount?: number
    }

    let {
        value = $bindable(1),
        total,
        visibleCount = 2
    }: Props = $props()

    let canGoPrev = $derived(value > 1)
    let canGoNext = $derived(value < total)

    let leftPagesCount = $derived(visibleCount >= value
        ? value - 1
        : visibleCount
    )

    let rightPagesCount = $derived(value + visibleCount > total
        ? total - value
        : visibleCount
    )

    let screenWidth = $state(0)
    function setPage(page: number) {
        value = page
    }

    function goNext() {
        value += 1
    }

    function goPrev() {
        value -= 1
    }
</script>

<svelte:window bind:innerWidth={screenWidth}></svelte:window>
<div class="pagination">
  <button class="control_arrow" onclick={goPrev} disabled={!canGoPrev}>
    <SvgContainer type="primary" size="sm">
      <svg class="fill-only" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.02422 12.0008C9.02422 11.8674 9.04922 11.7384 9.09922 11.6138C9.14922 11.4884 9.21589 11.3841 9.29922 11.3008L13.8992 6.70078C14.0826 6.51745 14.3159 6.42578 14.5992 6.42578C14.8826 6.42578 15.1159 6.51745 15.2992 6.70078C15.4826 6.88411 15.5742 7.11745 15.5742 7.40078C15.5742 7.68411 15.4826 7.91745 15.2992 8.10078L11.3992 12.0008L15.2992 15.9008C15.4826 16.0841 15.5742 16.3174 15.5742 16.6008C15.5742 16.8841 15.4826 17.1174 15.2992 17.3008C15.1159 17.4841 14.8826 17.5758 14.5992 17.5758C14.3159 17.5758 14.0826 17.4841 13.8992 17.3008L9.29922 12.7008C9.19922 12.6008 9.12855 12.4924 9.08722 12.3758C9.04522 12.2591 9.02422 12.1341 9.02422 12.0008Z"/>
      </svg>
    </SvgContainer>
  </button>

  {#if screenWidth > 425}
    {#if value > (visibleCount + 1)}
      <Button onclick={() => {setPage(1)}} type="icon" outline>1</Button>
    {/if}

    {#if value > (visibleCount + 2)}
      <div class="pagination-dots"><Button type="icon" outline disabled>...</Button></div>
    {/if}
  {/if}

  {#each Array(leftPagesCount) as i, k}
    {@const page = k + Math.max(1, value - visibleCount) }
    <Button onclick={() => {setPage(page)}} type="icon" outline>{page}</Button>
  {/each}

  <Button type="icon">{value}</Button>

  {#each Array(rightPagesCount) as i, k}
    {@const page = k + value + 1 }
    <Button onclick={() => {setPage(page)}} type="icon" outline>{page}</Button>
  {/each}

  {#if screenWidth > 425}
    {#if (rightPagesCount + value + 1) < total}
      <div class="pagination-dots"><Button type="icon" outline disabled>...</Button></div>
    {/if}

    {#if (rightPagesCount + value) < total}
      <Button onclick={() => {setPage(total)}} type="icon" outline>{total}</Button>
    {/if}
  {/if}
  <button class="control_arrow" onclick={goNext} disabled={!canGoNext}>
    <SvgContainer type="primary" size="sm">
      <svg class="fill-only" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.9758 11.9992C15.9758 12.1326 15.9508 12.2616 15.9008 12.3862C15.8508 12.5116 15.7841 12.6159 15.7008 12.6992L11.1008 17.2992C10.9174 17.4826 10.6841 17.5742 10.4008 17.5742C10.1174 17.5742 9.88411 17.4826 9.70078 17.2992C9.51745 17.1159 9.42578 16.8826 9.42578 16.5992C9.42578 16.3159 9.51745 16.0826 9.70078 15.8992L13.6008 11.9992L9.70078 8.09922C9.51745 7.91589 9.42578 7.68255 9.42578 7.39922C9.42578 7.11588 9.51745 6.88255 9.70078 6.69922C9.88411 6.51589 10.1174 6.42422 10.4008 6.42422C10.6841 6.42422 10.9174 6.51589 11.1008 6.69922L15.7008 11.2992C15.8008 11.3992 15.8714 11.5076 15.9128 11.6242C15.9548 11.7409 15.9758 11.8659 15.9758 11.9992Z"/>
      </svg>
    </SvgContainer>
  </button>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  $black-color: #000000;

  :global {
    .pagination button:not(.control_arrow) {
      border: 1px solid rgba(map.get(env.$color, primary), 0.1) !important;
    }

    .pagination button[disabled] {
      opacity: .5;
    }

    .pagination button.outline {
      color: #00000080;
    }
  }

  .pagination {
    display: flex;
    gap: 16px;
  }

  .control_arrow {
    background: 0;
    border: none;

    &:not([disabled]) {
      cursor: pointer;
    }

    &[disabled] {
      opacity: .5;
    }
  }
</style>