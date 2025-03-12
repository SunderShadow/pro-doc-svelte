<script lang="ts">
  import type {Doctor} from "$lib/types"

  type Props = {
      specialities: Array<Doctor.Speciality>;
  }

  const {
      specialities
  } = $props()

  const COLUMNS = 3

  let specialitiesInColumnCount = Math.ceil(specialities.length / COLUMNS)

  let slicedSpecialities = []

  for (let i = 0; i < COLUMNS; i++) {
      slicedSpecialities.push(specialities.slice(i + (specialitiesInColumnCount * i), (i + 1) * specialitiesInColumnCount))
  }
</script>

<section class="page-container page-section">
  <h2 class="speciality_list-title">Все специальности взрослых врачей</h2>

  <div class="speciality_list">
    {#each slicedSpecialities as column}
      <div>
        {#each column as {title, key}}
          <a href={'/' + key}>{title}</a>
        {/each}
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

  a {
    display: block;
  }


  a + a {
    margin-top: 8px;
  }

  .speciality_list {
    display: grid;
    gap: 8px 32px;

    font-weight: 600;

    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: map.get(env.$screen-size, mobile)) {
      grid-template-columns: 1fr;

    }
  }
</style>