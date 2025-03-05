<script lang="ts">
  import DoctorCard from "$lib/components/DoctorCard.svelte"

  import DoctorImg from "./_assets/img/doctor.png?enhanced&format=webp"
  import Search from "$ui-kit/Form/Search/Search.svelte";


  let screenWidth = $state(0)
  const searchPlaceholder = $derived(screenWidth > 425 ? 'Поиск по ФИО врача, специальности или услуге' : 'Поиск...')

  searchPlaceholder
</script>

<svelte:window bind:innerWidth={screenWidth} />
<Search placeholder={searchPlaceholder}></Search>

<DoctorCard name="Горбунов Алексей Викторович" image={DoctorImg.img.src}/>
<DoctorCard name="Горбунов Алексей Викторович" image={DoctorImg.img.src}/>

