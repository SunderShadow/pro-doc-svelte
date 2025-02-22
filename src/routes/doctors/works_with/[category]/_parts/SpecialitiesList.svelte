<script lang="ts">
  import type {Doctor} from "$lib/types"

  type Props = {
      specialities: Array<Doctor.Speciality>;
  }

  const {
      specialities
  } = $props()
</script>

<section class="page-container page-section">
  <h2 class="speciality_list-title">Все специальности взрослых врачей</h2>

  <div class="speciality_list" style:--rows-count={Math.ceil(specialities.length / 3)}>
    {#each specialities as {title, key}}
      <div>
        <a href={'/' + key}>{title}</a>
      </div>
    {/each}
  </div>
</section>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .speciality_list-title {
    margin-bottom: 64px;
  }

  .speciality_list {
    display: grid;
    gap: 8px 32px;

    font-weight: 600;

    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(var(--rows-count), 1fr);

    @media (max-width: map.get(env.$screen-size, mobile)) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-auto-flow: row;
    }
  }
</style>