<script>
    import LeftPart from "./_parts/LeftPart.svelte"
    import RightPart from "./_parts/RightPart.svelte"

    let screenSize = $state(0)
</script>

<svelte:window bind:innerWidth={screenSize}></svelte:window>

<div class="wrapper">
  <div>
    <LeftPart />
  </div>
  {#if screenSize > 1200}
    <div class="right">
      <RightPart />
    </div>
  {/if}
</div>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  $netbook-breakpoint: 1200px;

  .wrapper {
    display: flex;
    gap: 10vw;

    border: 1px solid rgba(map.get(env.$color, primary), .1);
    border-radius: 12px;

    padding: 32px;
    margin-top: 16px;

    @media (max-width: $netbook-breakpoint) {
      flex-direction: column;
    }

    @media (max-width: map.get(env.$screen-size, netbook)) {
      padding: 16px;
    }

    @media (max-width: map.get(env.$screen-size, mobile)) {
      padding: 0;
      border: none;
    }
  }

  .right {
    width: 330px;
    flex-shrink: 0;
  }

</style>