<script lang="ts">
    import Logo from "$lib/assets/Logo.png"
    import Vk from "$ui-kit/icons/Vk.svelte";
    import Telegram from "$ui-kit/icons/Telegram.svelte";
</script>

<footer>
  <div class="page-container">
    <div class="contacts">
      <a class="logo" href="/">
        <img src={Logo} alt="Logo"/>
      </a>
      <h5 class="title-3">Связаться с нами</h5>
      <div>
        <p class="body-text-4">Телефоны: </p>
        <a href="tel:88004555515" class="body-text-3 active">8 (800) 455-55-15</a>
      </div>
      <div>
        <p class="body-text-4">Адрес эл. почты</p>
        <a href="mailto:infodocpro@.gmail.ru" class="body-text-3 active">infodocpro@.gmail.ru</a>
      </div>
      <h5 class="title-3">Мы в соц. сетях</h5>
      <div class="social">
        <a href="/">
          <Telegram type="primary"/>
        </a>
        <a href="/">
          <Vk type="primary"/>
        </a>
      </div>
    </div>
    <div class="nav-section about">
      <h5 class="title-3">О нас</h5>
      <a href="/" class="body-text-3">О компании</a>
      <a href="/" class="body-text-3">Карьера</a>
      <a href="/" class="body-text-3">Партнёры</a>
      <a href="/" class="body-text-3">Отзывы о нас</a>
      <a href="/" class="body-text-3">Пресса</a>
      <a href="/" class="body-text-3">Контакты</a>
    </div>
    <div class="nav-section patient">
      <h5 class="title-3">Пациенту</h5>
      <a href="/" class="body-text-3">Врачи</a>
      <a href="/" class="body-text-3">Клиники</a>
      <a href="/" class="body-text-3">Диагностика</a>
      <a href="/" class="body-text-3">Услуги</a>
      <a href="/" class="body-text-3">Медицинская библиотека</a>
      <a href="/" class="body-text-3">Как записаться</a>
      <a href="/" class="body-text-3">Защита данных пользователя</a>
      <a href="/" class="body-text-3">Как мы проверяем отзывы</a>
      <a href="/" class="body-text-3">Подписку «DocHeal»</a>

    </div>
    <div class="nav-section doctor">
      <h5 class="title-3">Клиникам и врачам</h5>

      <a href="/" class="body-text-3">Сотрудничество с врачами</a>
      <a href="/" class="body-text-3">Сотрудничество с клиниками</a>
      <a href="/" class="body-text-3">Правила сотрудничества</a>
      <a href="/" class="body-text-3">Персональные данные</a>

      <h5 class="nav-section__clynic_doctor title-3">Врачу и клинике</h5>
      <a href="/" class="body-text-3">Личный кабинет</a>
      <a href="/" class="body-text-3">Регистрация</a>
    </div>
  </div>
</footer>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  $mobile-adaptive: 600px;

  footer {
    background-color: rgba(map.get(env.$color, primary), .1);

    margin-top: 96px;

    height: 100%;

    @media (max-width: map.get(env.$screen-size, netbook)) {
      margin-top: 64px;
    }

    .body-text-3 {
      font-family: "Gilroy", sans-serif;
    }

    .page-container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 32px;

      padding: 6rem 0;

      @media (max-width: map.get(env.$screen-size, netbook)) {
        grid-template-columns: repeat(8, 1fr);
      }

      @media (max-width: $mobile-adaptive) {
        grid-template-columns: 1fr;
      }

      a {
        font-weight: 600;
      }

      .contacts {
        grid-column: span 2;

        display: flex;
        flex-direction: column;
        gap: .5rem;

        @media (max-width: $mobile-adaptive) {
          grid-column: span 1;
        }

        a {
          width: fit-content;
        }

        .logo img {
          width: 136px;
          height: 54px;
        }

        > h5 {
          margin-top: .5rem;
        }

        > div:not(:last-of-type) {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .social {
          display: flex;
          gap: 1rem;
        }
      }

      .about {
        grid-column: 7 / 9;

        @media (max-width: map.get(env.$screen-size, netbook)) {
          grid-column: span 2;
        }

        @media (max-width: $mobile-adaptive) {
          grid-column: span 1;
        }
      }

      .doctor,
      .patient {
        grid-column: span 2;

        @media (max-width: $mobile-adaptive) {
          grid-column: span 1;
        }
      }

      .nav-section {
        display: flex;
        flex-direction: column;
        gap: 4px;

        h5 {
          margin-bottom: 8px;
        }

        a {
          width: fit-content;
          line-height: 22.4px;
        }

        &__clynic_doctor {
          margin-top: 16px;
        }
      }
    }
  }
</style>