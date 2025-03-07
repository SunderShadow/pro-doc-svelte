<script lang="ts">
    import type { Breadcrumbs as BreadcrumbsType } from "\$lib/types";
    import PreviewSection from "./_parts/PreviewSection.svelte"
    import QuestionAnswerSection from "./_parts/QuestionAnswerSection.svelte"
    import ClientsSection from "./_parts/ClientsReviewSection.svelte"
    import FreeRegistrationSection from "./_parts/FreeRegistrationSection.svelte"
    import Breadcrumbs from "$ui-kit/Breadcrumbs/Breadcrumbs.svelte"

    const breadcrumbs: BreadcrumbsType = [
        {
            title: 'Главная',
            href: '/',
        },
        {
            title: 'Клиникам',
            href: ''
        }
    ]
</script>

<svelte:head>
  <title>Главная</title>
</svelte:head>

<main>
  <div class="breadcrumbs page-container">
    <Breadcrumbs list={breadcrumbs} />
  </div>
  <PreviewSection />
  <FreeRegistrationSection />
  <ClientsSection />
  <QuestionAnswerSection />
</main>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  .breadcrumbs {
    margin-bottom: 32px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }
</style>