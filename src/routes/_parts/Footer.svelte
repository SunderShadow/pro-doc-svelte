<script lang="ts">
    import Logo from "$lib/assets/Logo.png"
    import Vk from "$ui-kit/icons/Vk.svelte";
    import Telegram from "$ui-kit/icons/Telegram.svelte";
</script>

<footer>
    <div class="page-container">
        <div class="contacts">
            <img src={Logo} alt="Logo" />
            <h5 class="title-3">Связаться с нами</h5>
            <div>
                <p class="body-text-4">Телефоны: </p>
                <a class="body-text-3 active">8 (800) 455-55-15</a>
            </div>
            <div>
                <p class="body-text-4">Адрес эл. почты</p>
                <a class="body-text-3 active">infodocpro@.gmail.ru</a>
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
                <a href="/" class="body-text-4">О компании</a>
                <a href="/" class="body-text-4">Карьера</a>
                <a href="/" class="body-text-4">Партнёры</a>
                <a href="/" class="body-text-4">Отзывы о нас</a>
                <a href="/" class="body-text-4">Пресса</a>
                <a href="/" class="body-text-4">Контакты</a>
            </div>
            <div class="patient">
                <h5 class="title-3">Пациенту</h5>
                <a href="/" class="body-text-4">Врачи</a>
                <a href="/" class="body-text-4">Клиники</a>
                <a href="/" class="body-text-4">Диагностика</a>
                <a href="/" class="body-text-4">Услуги</a>
                <a href="/" class="body-text-4">Медицинская библиотека</a>
                <a href="/" class="body-text-4">Как записаться</a>
                <a href="/" class="body-text-4">Защита данных пользователя</a>
                <a href="/" class="body-text-4">Как мы проверяем отзывы</a>
                <a href="/" class="body-text-4">Подписку «DocHeal»</a>

            </div>
            <div class="doctor">
                <h5 class="title-3">Клиникам и врачам</h5>
                <a href="/" class="body-text-4">Сотрудничество с врачами</a>
                <a href="/" class="body-text-4">Сотрудничество с клиниками</a>
                <a href="/" class="body-text-4">Правила сотрудничества</a>
                <a href="/" class="body-text-4">Персональные данные</a>
                <h5 class="title-3">Врачу и клинике</h5>
                <a href="/" class="body-text-4">Личный кабинет</a>
                <a href="/" class="body-text-4">Регистрация</a>
            </div>
        </nav>
    </div>
</footer>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

    footer {
      background-color: rgba(map.get(env.$color, primary), .1);

      margin-top: 98px;

      height: 458px;

      .page-container {
        display: flex;
        justify-content: space-between;
        padding: 6rem 0;

        .contacts {
          display: flex;
          flex-direction: column;
          gap: .5rem;

          > img {
            max-width: 136px;
            max-height: 54px;
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
          display: flex;
          gap: 4rem;

          > div {
            display: flex;
            flex-direction: column;
            gap: .25rem;

            &.about {
              padding-right: 2rem;
            }

            > h5 {
              margin-bottom: 8px;
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