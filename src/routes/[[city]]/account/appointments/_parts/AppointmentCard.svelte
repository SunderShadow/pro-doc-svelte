<script lang="ts">
  import ClinicPart from "./AppointmentCard/Clinic.svelte"
  import DoctorPart from "./AppointmentCard/Doctor.svelte"
  import Button from "$ui-kit/Button/Button.svelte"
  import {getContext} from "svelte";

  let screenWidth = $state(0)

  const setPageTitle: (title: string) => void = getContext('setPageTitle')

  setPageTitle('Мои записи')
  let date = new Date()
</script>

<svelte:window bind:innerWidth={screenWidth} />
<article>
  <div class="datetime">Дата записи {date.toLocaleDateString('ru-RU', { timezone: 'UTC'})} {date.getHours()}:{date.getMinutes()}</div>
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

  article {
    border: 1px solid rgba(map.get(env.$color, primary), .1);
    border-radius: 12px;
    padding: 32px;

    @media (max-width: map.get(env.$screen-size, mobile)) {
      padding: 16px;
    }
  }


  .datetime {
    margin-bottom: 16px;

    font-size: 14px;

    letter-spacing: .2em;
    text-transform: uppercase;
    color: map.get(env.$color, primary);
    font-weight: 700;
  }


  .wrapper {
    display: flex;
    gap: 32px;

    @media (max-width: 1300px) {
      flex-direction: column;
    }
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    margin-top: 32px;
    @media (max-width: 910px) {
      flex-direction: column;
    }
  }
</style>