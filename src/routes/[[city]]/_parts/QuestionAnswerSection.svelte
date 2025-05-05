<script lang="ts">
    import Accordion from "$ui-kit/Accordion/Accordion.svelte"
    import type {Layout} from "$lib/types"

    type Props = {
        items: Layout.Home['qa']
    }
    let {
        items = []
    }: Props = $props()
</script>

<section class="page-container">
    <h2>Вопросы и ответы</h2>
    <div class="accordion-container">
      {#each items as item}
        <Accordion title={item.title}>
            <p class="body-text-2">{item.description}</p>
        </Accordion>
      {/each}
    </div>
</section>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  section {
    padding: 96px 0;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      padding: 64px 0;
    }
  }

  .accordion-container {
    margin-top: 64px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      margin-top: 32px;
    }
  }
</style>