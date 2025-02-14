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
    <h2>{name}</h2>
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
    background-size: 100% 100%;

    border: 1px solid rgba(map.get(env.$color, primary), .1);
    border-radius: 12px;

    cursor: pointer;

    &.double {
      grid-column: span 2;
    }
  }
</style>