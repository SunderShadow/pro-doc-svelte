<script lang="ts">
    import AppointmentCard from "./_parts/AppointmentCard.svelte"
</script>

<div class="wrapper">
  <AppointmentCard />
</div>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 32px;

    border: 1px solid rgba(map.get(env.$color, primary), .1);
    border-radius: 12px;

    @media (max-width: map.get(env.$screen-size, netbook)) {
        grid-template-columns: 1fr;
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
        padding: 16px;
    }
  }
</style>