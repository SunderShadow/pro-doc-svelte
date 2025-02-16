<script lang="ts">
    import Logo from "$lib/assets/Logo.png"
    import Vk from "$ui-kit/icons/Vk.svelte";
    import Telegram from "$ui-kit/icons/Telegram.svelte";
</script>

<footer>
    <div class="page-container">
        <div class="contacts">
            <a class="logo" href="/">
              <img src={Logo} alt="Logo" />
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
                <a href="/"><Telegram type="primary"/></a>
                <a href="/"><Vk type="primary"/></a>
            </div>
        </div>
        <nav>
            <div class="about">
                <h5 class="title-3">О нас</h5>
                <a href="/" class="body-text-3">О компании</a>
                <a href="/" class="body-text-3">Карьера</a>
                <a href="/" class="body-text-3">Партнёры</a>
                <a href="/" class="body-text-3">Отзывы о нас</a>
                <a href="/" class="body-text-3">Пресса</a>
                <a href="/" class="body-text-3">Контакты</a>
            </div>
            <div class="patient">
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
            <div class="doctor">
                <h5 class="title-3">Клиникам и врачам</h5>
                <a href="/" class="body-text-3">Сотрудничество с врачами</a>
                <a href="/" class="body-text-3">Сотрудничество с клиниками</a>
                <a href="/" class="body-text-3">Правила сотрудничества</a>
                <a href="/" class="body-text-3">Персональные данные</a>
                <h5 class="title-3">Врачу и клинике</h5>
                <a href="/" class="body-text-3">Личный кабинет</a>
                <a href="/" class="body-text-3">Регистрация</a>
            </div>
        </nav>
    </div>
</footer>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  $mobile-adaptive: 600px;

    footer {
      background-color: rgba(map.get(env.$color, primary), .1);

      margin-top: 98px;

      height: 100%;

      .body-text-3 {
        font-family: "Gilroy", sans-serif;
      }

      .page-container {
        display: flex;
        justify-content: space-between;
        padding: 6rem 0;

        @media (max-width: map.get(env.$screen-size, netbook)) {
          justify-content: normal;
          gap: 96px;
        }

        @media (max-width: map.get(env.$screen-size, tablet)) {
          justify-content: normal;
          gap: 32px;
        }

        @media (max-width: $mobile-adaptive) {
          justify-items: normal;
          flex-direction: column;
        }

        .contacts {
          display: flex;
          flex-direction: column;
          gap: .5rem;

          .logo img{
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

        > nav {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          column-gap: 32px;

          @media (max-width: $mobile-adaptive) {
            grid-template-columns: 1fr;
          }

          > div {
            display: flex;
            flex-direction: column;
            gap: .25rem;

            grid-column: span 2;

            > h5 {
              margin-bottom: 8px;
            }

            > a {
              font-weight: 600;
            }
          }
        }

        .doctor {
          > h5:last-of-type {
            margin-top: 16px;
          }
        }
      }
    }
</style>