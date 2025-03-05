<script lang="ts">
  import {page} from "$app/state"
  import Logo from "$lib/assets/Logo.png"

  import PolyclinicIcon from "$ui-kit/icons/Polyclinic.svelte"
  import DoctorIcon from "$ui-kit/icons/Doctor.svelte"
  import DoorArrowRight from "$ui-kit/icons/DoorArrowRight.svelte"

  import Magnifier from "$ui-kit/icons/Magnifier.svelte"

  import MobileNav from "./Header/MobileNav.svelte"
  import SearchSection from "./Header/SearchSection.svelte"

  let headerHeight = $state(0)

  let toggleMobileMenuVisible = $state()
  let mobileNavVisible = $state(false)

  let mobileSearchVisible = $state(false)
  let screenWidth = $state(0)

  function toggleSearch(e) {
      e.stopPropagation()
      mobileSearchVisible = !mobileSearchVisible
  }

  let routes = [
      {
          href: '/doctors/works_with/adults',
          title: 'Врачи'
      },
      {
          href: '/c',
          title: 'Клиники'
      },
      {
          href: '/service/list',
          title: 'Услуги'
      },
      {
          href: '/service/diagnostic',
          title: 'Диагностика'
      },
      {
          href: '/c',
          title: 'Онлайн-консультации'
      },
      {
          href: '/library/advices/all/1',
          title: 'Библиотека'
      },
      {
          href: '/promotions',
          title: 'Акции'
      },
      {
          href: '/c',
          title: 'О нас'
      },
      {
          href: '/c',
          title: 'Контакты'
      },
  ]
</script>

<svelte:window bind:innerWidth={screenWidth}></svelte:window>
<header style:--height={headerHeight + 'px'}>
  <div class="layer_1">
    <div class="page-container">
      <div class="city">
        <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.2497 0.75L7.45801 11.25C7.43241 11.3058 7.39132 11.3532 7.33962 11.3864C7.28792 11.4195 7.22778 11.4372 7.16634 11.4372C7.10491 11.4372 7.04476 11.4195 6.99306 11.3864C6.94136 11.3532 6.90027 11.3058 6.87467 11.25L4.83301 7.16667L0.749675 5.125C0.693826 5.09941 0.646499 5.05832 0.613318 5.00661C0.580138 4.95491 0.5625 4.89477 0.5625 4.83333C0.5625 4.7719 0.580138 4.71176 0.613318 4.66005C0.646499 4.60835 0.693826 4.56726 0.749675 4.54167L11.2497 0.75Z"/>
        </svg>
        <span class="city-text">Город:</span>
        <span>Москва</span>
      </div>

      <div class="for">
        <a href="/register/clinics" class="for-item">
          <PolyclinicIcon type="primary" size="sm"/>
          <span>Клиникам</span>
        </a>
        <a href="/register/doctors" class="for-item">
          <DoctorIcon type="primary" size="sm"/>
          <span>Врачам</span>
        </a>
      </div>
      <div class="auth">
        <DoorArrowRight type="primary" size="sm"/>

        <a href="/account/profile">Вход</a>
        <a href="/">Регистрация</a>
      </div>
    </div>
  </div>

  <div class="layer_2-wrapper">
    <section class="layer_2 page-container" bind:clientHeight={headerHeight}>
      <a href="/">
        <img class="logo" src={Logo} alt="" style="aspect-ratio: 136 /59"/>
      </a>

      <div class="nav-icons">
        <button onclick={toggleSearch}>
          <Magnifier type="primary" size="md"/>
        </button>
        <button onclick={toggleMobileMenuVisible} >
          <div class="burger-icon" class:active={mobileNavVisible}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
      </div>

      <nav>
        {#each routes as route}
          <a class:active={page.url.pathname === route.href } href={route.href}>{route.title}</a>
        {/each}
      </nav>
    </section>
  </div>
  {#if mobileSearchVisible || screenWidth > 768}
    <SearchSection {headerHeight} closeHandler={toggleSearch}/>
  {/if}
</header>

{#if screenWidth <= 768}
  <MobileNav bind:toggleMobileMenuVisible bind:visible={mobileNavVisible} {headerHeight} {routes}/>
{/if}

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  .layer_1 {
    width: 100%;
    padding: 8px 0;

    color: map.get(env.$color, primary);

    font-size: .875rem;
    font-weight: 600;

    background-color: rgba(map.get(env.$color, primary), .1);

    .page-container {
      display: flex;
      gap: 32px;
    }
  }

  .city {
    display: flex;
    align-items: center;
    gap: 5px;

    color: map.get(env.$font-color, primary);

    svg {
      fill: map.get(env.$color, primary);
    }

    &-text {
      font-weight: 400;
      opacity: .5;
    }
  }

  .for {
    --gap: 8px;

    display: flex;
    align-items: center;
    gap: var(--gap);

    margin-left: auto;

    &-item {
      display: flex;
      align-items: center;
      gap: var(--gap);

      text-decoration: none;
    }

    &-item + &-item::before {
      content: "|";
      margin-left: var(--gap);
    }
  }

  .auth {
    --gap: 8px;

    display: flex;
    align-items: center;
    gap: var(--gap);

    a { text-decoration: none }

    a + a::before {
      content: "|";
      margin-right: var(--gap);
    }
  }

  .logo {
    width: 136px;
  }

  .layer_2 {
    position: relative;

    padding: 1rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 135px;

    background-color: #fff;

    @media (max-width: map.get(env.$screen-size, mobile)) {
      gap: 0;
    }

    &-wrapper {
      border-bottom: 1px solid rgba(map.get(env.$color, primary), .1);
    }
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0 1.5rem;

    > a {
      -webkit-tap-highlight-color: transparent;

      padding: .5em;
      line-height: 1.75rem;
      font-weight: 600;
    }
  }

  @media (min-width: (map.get(env.$screen-size, tablet) + 1px)) {
    .nav-icons {
      display: none;
    }
  }

  @media (max-width: map.get(env.$screen-size, tablet)) {
    header {
      margin-top: var(--height);
    }

    .layer_1 {
      display: none;
    }

    .layer_2 {
      position: fixed;
      width: 100%;
      top: 0;
      padding: .5em 20px;
      margin: 0;
      z-index: 6;
    }

    .layer_2 > nav {
      display: none;
    }

    .logo {
      width: 102px;
    }

    .nav-icons {
      display: flex;
      gap: 16px;

      > button {
        border: none;
        background: none;
        outline: none;

        @media (min-width: (map.get(env.$screen-size, tablet) + 1px)) {
          cursor: pointer;
        }
      }
    }

    .burger-icon {
      --size: 32px;
      --stroke-width: 3px;

      --padding-x: 2px;
      --padding-y: 5px;
      --gap: calc((var(--size) - var(--padding-y) * 2) / 3 + var(--stroke-width));

      position: relative;

      width: var(--size);
      height: var(--size);

      > div {
        position: absolute;

        width: calc(100% - var(--padding-x) * 2);

        left: var(--padding-x);
        height: var(--stroke-width);

        border-radius: 100em;

        background-color: map.get(env.$color, primary);

        transition-property: transform, top, opacity;
        transition-duration: 300ms;

        &:nth-child(1) {
          top: var(--padding-y);
        }

        &:nth-child(2) {
          top: calc(var(--padding-y) + var(--gap));
        }

        &:nth-child(3) {
          top: calc(var(--padding-y) + var(--gap) * 2);
        }
      }

      &.active {
        > div {
          &:nth-child(1) {
            top: calc(var(--padding-y) + var(--gap));
            transform: rotate(45deg);
          }

          &:nth-child(2) {
            opacity: 0;
          }

          &:nth-child(3) {
            top: calc(var(--padding-y) + var(--gap));
            transform: rotate(-45deg);
          }
        }
      }
    }

  }
</style>