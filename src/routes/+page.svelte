<script lang="ts">
    import SliderSection from "./_parts/SliderSection.svelte"
    import ServiceUniqueSection from "./_parts/ServiceUniqueSection.svelte"
    import ServicesSection from "./_parts/ServicesSection.svelte"
    import QuestionAnswerSection from "./_parts/QuestionAnswerSection.svelte";
</script>

<svelte:head>
  <title>Главная</title>
</svelte:head>

<main>
  <SliderSection />
  <ServicesSection />
  <ServiceUniqueSection />
  <QuestionAnswerSection />
</main>

