<script>
import Vk from "$ui-kit/icons/Vk.svelte"
import ArrowRight from "$ui-kit/icons/ArrowRight.svelte"
import Account from "$ui-kit/icons/Account.svelte"
import Telegram from "$ui-kit/icons/Telegram.svelte"
import {PreventScrolling, ReEnableScrolling} from "prevent-scrolling"

let {
    visible = $bindable(false),
    toggleMobileMenuVisible = $bindable(),
    headerHeight,
} = $props()

let mobileNav = $state()

toggleMobileMenuVisible = () => {
    visible = !visible

    if (visible) {
        PreventScrolling(mobileNav)
    } else {
        ReEnableScrolling()
    }
}
</script>

<div class="mobile-nav" class:visible style:--top={headerHeight + 'px'} bind:this={mobileNav}>
  <div class="mobile-nav__layer_1">
    <div class="city">
      <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.2497 0.75L7.45801 11.25C7.43241 11.3058 7.39132 11.3532 7.33962 11.3864C7.28792 11.4195 7.22778 11.4372 7.16634 11.4372C7.10491 11.4372 7.04476 11.4195 6.99306 11.3864C6.94136 11.3532 6.90027 11.3058 6.87467 11.25L4.83301 7.16667L0.749675 5.125C0.693826 5.09941 0.646499 5.05832 0.613318 5.00661C0.580138 4.95491 0.5625 4.89477 0.5625 4.83333C0.5625 4.7719 0.580138 4.71176 0.613318 4.66005C0.646499 4.60835 0.693826 4.56726 0.749675 4.54167L11.2497 0.75Z"/>
      </svg>
      <span class="city-text">Город:</span>
      <span>Москва</span>
    </div>

    <div class="auth">
      <Account type="primary" size="sm"/>

      <a href="/">Вход</a>
      <a href="/">Регистрация</a>
    </div>
  </div>

  <nav>
    <a href="/">Врачи <ArrowRight /></a>
    <a href="/">Клиники <ArrowRight /></a>
    <a href="/">Диагностика <ArrowRight /></a>
    <a href="/">Онлайн-консультации <ArrowRight /></a>
    <a href="/">Библиотека <ArrowRight /></a>
    <a href="/">Акции <ArrowRight /></a>
    <a href="/">О нас <ArrowRight /></a>
    <a href="/">Контакты <ArrowRight /></a>

    <hr>
    <a href="/">Клиникам <ArrowRight /></a>
    <a href="/">Врачам <ArrowRight /></a>
    <hr>
  </nav>

  <div class="mobile-nav__info">
    <span class="title-3">Телефоны</span>
    <a class="active" href="tel:88004555515">8 (800) 455-55-15</a>
  </div>
  <div class="mobile-nav__info">
    <span class="title-3">Адрес электронной почты</span>
    <a class="active" href="mailto  :infodoc.pro@gmail.ru  ">infodoc.pro@gmail.ru</a>
  </div>
  <hr>
  <div class="mobile-nav__social">
    <a href="/"><Telegram type="primary"/></a>
    <a href="/"><Vk type="primary"/></a>
  </div>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  @media (min-width: (map.get(env.$screen-size, tablet) + 1px)) {
    .nav-icons {
      display: none;
    }
  }
  .mobile-nav:not(.visible) {
    --shadow-color: transparent;
    transform: translateX(-100%);
  }

  .mobile-nav {
    --shadow-color: #{rgba(#000, .5)};
    display: block;
    position: fixed;
    overflow-y: scroll;

    top: var(--top);
    left: 0;
    width: 300px;
    height: calc(100vh - var(--top));
    background-color: #fff;
    z-index: 5;

    box-shadow: 0 0 0 100vw var(--shadow-color);

    transition-property: transform, box-shadow;
    transition-duration: 500ms;

    &__layer_1 {
      background-color: rgba(map.get(env.$color, primary), .1);
      opacity: 1;

      & > * {
        padding: .5rem 1rem;
      }
    }

    hr {
      border-color: rgba(map.get(env.$color, primary), .1);
    }

    &__info {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: .5em 1.5em;

      a {
        font-weight: 600;
      }
    }

    &__social {
      display: flex;
      gap: 16px;
      padding: .5em 1.5em;
    }

    nav {
      padding: .5em 1em;
      flex-direction: column;

      a {
        font-weight: 600;
        padding: .5em;
        line-height: 1.75rem;
        display: flex;
        justify-content: space-between;
      }
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
</style>