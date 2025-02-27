<script>
  import {getContext} from "svelte"
  import Card from "./_parts/DoctorsCard.svelte";

  let setPageTitle = getContext('setPageTitle')
  setPageTitle('Избранное')

</script>

<div class="switcher">
  <a class="active" href="/account/favorite/doctors" data-sveltekit-noscroll>Врачи</a>
  <a href="/account/favorite/clinics" data-sveltekit-noscroll>Клиники</a>
</div>

<div class="wrapper">
  <Card />
  <Card />
</div>
<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    padding: 32px;

    border: 1px solid rgba(map.get(env.$color, primary), .1);
    border-radius: 12px;
  }

  .switcher {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;

    margin-top: 32px;

    font-weight: 600;

    a {
      transition-property: border-color, color;
      padding-bottom: 4px;

      border-bottom: 1px solid transparent;

      @media (max-width: map.get(env.$screen-size, mobile)) {
        text-align: center;
        width: 100%;
      }
    }

    a:hover {
      border-bottom: 1px solid;
    }

    a.active {
      border-bottom: 2px solid;
    }
  }
</style>