<script lang="ts">
    import Doctors from "$lib/assets/images/doctors.png"
    import Services from "$lib/assets/images/services.jpg"
    import Diagnostics from "$lib/assets/images/diagnostics.jpg"
    import Consultation from "$lib/assets/images/consultation.jpg"
    import Pediatrician from "$lib/assets/images/pediatrician.jpg"
    import Directory from "$lib/assets/images/directory.png"
    import Card from "./Card.svelte"
</script>

<section class="services-container page-container">
    <h2>Услуги и направления</h2>
    <div class="cards">
      <Card name="Врачи" image={Doctors} double/>
      <Card name="Услуги" image={Services}/>
      <Card name="Диагностика" image={Diagnostics}/>
      <Card name="Онлайн-консультация" image={Consultation}/>
      <Card name="Детский врач" image={Pediatrician}/>
      <Card name="Медицинский справочник" image={Directory} double/>
    </div>
  </section>

<style lang="scss">
  .services-container {
    .cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px;

      margin-top: 64px;
    }
  }
</style>