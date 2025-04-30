<script lang="ts">
    import SliderSection from "./_parts/SliderSection.svelte"
    import ServiceUniqueSection from "./_parts/ServiceUniqueSection.svelte"
    import ServicesSection from "./_parts/ServicesSection.svelte"
    import AboutUsSection from "./_parts/AboutUsSection.svelte"
    import NewsLetterSection from "./_parts/NewsLetterSection.svelte"
    import QuestionAnswerSection from "./_parts/QuestionAnswerSection.svelte"
    import ClientsSection from "./_parts/ClientsReviewSection.svelte"
    import {getHomePageLayout} from "$api/local-server";

    let {
        data
    } = $props()

    console.log(data.qa)
</script>

<svelte:head>
  <title>Главная</title>
</svelte:head>

<main>
  <SliderSection slides={data.slider ?? []}/>
  <ServicesSection />
  <ServiceUniqueSection />
  <AboutUsSection />
  <NewsLetterSection />
  <QuestionAnswerSection items={data.qa}/>
  <ClientsSection />
</main>

