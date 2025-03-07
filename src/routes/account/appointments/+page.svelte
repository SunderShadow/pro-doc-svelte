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

    border-radius: 12px;

    @media (min-width: (map.get(env.$screen-size, mobile) + 1px)) {
      border: 1px solid rgba(map.get(env.$color, primary), .1);
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
        padding: 16px;
    }

    @media (max-width: map.get(env.$screen-size, mobile)) {
      padding: 0;
    }
  }
</style>