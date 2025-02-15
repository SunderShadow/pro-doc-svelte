<script lang="ts">
    import ArrowTopRight from "$ui-kit/icons/ArrowTopRight.svelte";

    type Props = {
        name: string,
        image: string,
        double?: boolean,
    }

    const {
        name,
        image,
        double,
    }: Props = $props()

</script>

<div class="card" class:double style:--img={`url(${image})`}>
    <h2 class="title-1">{name}</h2>
    <ArrowTopRight type="primal" size="sm" />
</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    max-width: 784px;
    height: 400px;

    padding: 1.5rem;

    background-image: var(--img);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    border: 1px solid rgba(map.get(env.$color, primary), .1);
    border-radius: 12px;

    cursor: pointer;

    @media (max-width: map.get(env.$screen-size, netbook)) {
      height: 200px;
    }

    &.double {
      grid-column: span 2;

      @media (min-width: map.get(env.$screen-size, netbook)) {
        background-position: right;
      }

      @media (max-width: map.get(env.$screen-size, tablet)) {
        grid-column: span 1;
      }
    }
  }
</style>