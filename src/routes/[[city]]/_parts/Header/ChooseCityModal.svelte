<script lang="ts">
    import cities, {currentCity, setCurrentCity} from "$lib/storage/cities"

  import Modal from "$ui-kit/Modal/Modal.svelte"
  import PlusIcon from "$ui-kit/icons/Plus.svelte"
  import type {DocPro} from "$lib/types"
    import {goto} from "$app/navigation";
    import {page} from "$app/state";

  type Props = {
      isActive: boolean
  }

  let {
      isActive = $bindable(),
  }: Props = $props()

  let formattedCities = []

  cities.subscribe(st => {
      let prevCity = {
          Name: '_'
      }
      for (const city of st) {
          if (prevCity.Name[0] !== city.Name[0]) {
              formattedCities.push({
                  isHeader: true,
                  Name: city.Name[0]
              })
          }

          formattedCities.push({
              isHeader: false,
              ...city
          })

          prevCity = city
      }
  })

  const cityRows = Math.ceil($cities.length / 3)

  function close() {
      isActive = false
  }

  function chooseCity(city: DocPro.City) {
      goto('/' + city.Alias + page.url.pathname.substring($currentCity.Alias.length + 1), {
          replaceState: true
      })

      close()
  }
</script>

<Modal bind:isActive>
  <div class="cities_modal">
    <header>
      <h3>Выберете ваш город</h3>
      <button onclick={close} class="close"><PlusIcon /></button>
    </header>

    <div class="cities" style:--rows={cityRows}>
      {#each formattedCities as city, i}
        {#if city.isHeader}
          <span class="firstLetter">{city.Name}</span>
        {:else}
          <button onclick={() => {chooseCity(city)}} class="link">{city.Name}</button>
        {/if}
      {/each}
    </div>
  </div>
</Modal>

<style lang="scss">
  @use "$ui-kit/env";
  @use "sass:map";

  header {
    display: flex;
    gap: 15px;
    justify-content: space-between;

    margin-bottom: 15px;
  }

  .close {
    flex-shrink: 0;
    transform: rotate(45deg);
    :global(.svg-icon-container) {
      --color: #{map.get(env.$color, primary)};
    }
  }

  .cities {
    display: grid;
    grid-template-rows: repeat(var(--rows), 1fr);
    grid-auto-flow: column dense;
    gap: 8px 30px;
  }

  .firstLetter {
    font-weight: 600;
  }

  button {
    font: inherit;
    display: block;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
  }
</style>