<script lang="ts">
  import DoctorCard from "$lib/components/DoctorCard.svelte"

  import DoctorImg from "./_assets/img/doctor.png?enhanced&format=webp"
  import Search from "$ui-kit/Form/Search/Search.svelte"
  import FilterContainer from "./_parts/Filters.svelte"


  let screenWidth = $state(0)
  const searchPlaceholder = $derived(screenWidth > 425 ? 'Поиск по ФИО врача, специальности или услуге' : 'Поиск...')

  searchPlaceholder
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div class="sort_filter">
  <FilterContainer/>
</div>

<div class="search">
  <Search placeholder={searchPlaceholder} />
</div>

<div class="cards">
  <DoctorCard name="Горбунов Алексей Викторович" image={DoctorImg.img.src}/>
  <DoctorCard name="Горбунов Алексей Викторович" image={DoctorImg.img.src}/>
</div>

<style lang="scss">
  .search {
    margin-top: 16px;
  }

  .cards {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
</style>