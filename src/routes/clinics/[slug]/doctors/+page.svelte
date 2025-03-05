<script lang="ts">
  import DoctorCard from "$lib/components/DoctorCard.svelte"

  import DoctorImg from "./_assets/img/doctor.png?enhanced&format=webp"
  import Input from "$ui-kit/Form/Input.svelte"
  import Magnifier from "$ui-kit/icons/Magnifier.svelte"

  let screenWidth = $state(0)
  const searchPlaceholder = $derived(screenWidth > 425 ? 'Поиск по ФИО врача,специальности или услуге' : 'Поиск...')

  searchPlaceholder
</script>

<svelte:window bind:innerWidth={screenWidth} />
{#snippet searchMagnifierIcon()}
  <div class="magnifier">
    <Magnifier size="sm"/>
  </div>
{/snippet}
<div class="search">
  <Input placeholder={searchPlaceholder} preIcon={searchMagnifierIcon} />
</div>

<DoctorCard name="Горбунов Алексей Викторович" image={DoctorImg.img.src}/>
<DoctorCard name="Горбунов Алексей Викторович" image={DoctorImg.img.src}/>

<style lang="scss">
  .magnifier {
    opacity: .5;
  }

  .search {
    margin-top: 32px;
  }
</style>