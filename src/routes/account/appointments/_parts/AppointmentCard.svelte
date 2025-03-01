<script lang="ts">
  import ClinicPart from "./AppointmentCard/Clinic.svelte"
  import DoctorPart from "./AppointmentCard/Doctor.svelte"
  import Button from "$ui-kit/Button/Button.svelte"

  let screenWidth = $state(0)
</script>

<svelte:window bind:innerWidth={screenWidth} />
<article>
  <div class="wrapper">
    <ClinicPart />
    <DoctorPart />
  </div>

  <div class="actions">
    <Button fullWidth={screenWidth <= 1024}>Записаться повторно</Button>
    <Button fullWidth={screenWidth <= 1024} outline>Отменить запись</Button>
  </div>
</article>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .wrapper {
    display: flex;
    gap: 32px;

    @media (max-width: map-get(env.$screen-size, netbook)) {
      flex-direction: column;
    }
  }

  .actions {
    display: flex;
    gap: 16px;

    margin-top: 32px;
    @media (max-width: 910px) {
      flex-direction: column;
    }
  }
</style>