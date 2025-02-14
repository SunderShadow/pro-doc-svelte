<script lang="ts">
  import PolyclinicIcon from "$ui-kit/icons/Polyclinic.svelte"
  import DoctorIcon from "$ui-kit/icons/Doctor.svelte"
  import DoorArrowRight from "$ui-kit/icons/DoorArrowRight.svelte";
  import LogoBlue from "$ui-kit/images/LogoBlue.png";
  import InputGroup from "$ui-kit/Form/Group/Group.svelte";
  import Tag from "$ui-kit/Tag/Tag.svelte";
  import Select from "$ui-kit/Form/Select/Select.svelte";
  import Button from "$ui-kit/Button/Button.svelte";
</script>
<header>
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
        <a href="/" class="for-item">
          <PolyclinicIcon type="primary" size="sm"/>
          <span>Клиникам</span>
        </a>
        <a href="/" class="for-item">
          <DoctorIcon type="primary" size="sm"/>
          <span>Врачам</span>
        </a>
      </div>
      <div class="auth">
        <DoorArrowRight type="primary" size="sm"/>

        <a href="/">Вход</a>
        <a href="/">Регистрация</a>
      </div>
    </div>
  </div>
  <section class="navigation page-container">
    <a href="/">
      <img class="logo" src={LogoBlue} alt=""/>
    </a>
    <nav>
      <a href="/">Врачи</a>
      <a href="/">Клиники</a>
      <a href="/">Диагностика</a>
      <a href="/">Онлайн-консультации</a>
      <a href="/">Библиотека</a>
      <a href="/">Акции</a>
      <a href="/">О нас</a>
      <a href="/">Контакты</a>
    </nav>
  </section>
  <section class="search-container page-container">
    <h3>Выберете клинику или запишитесь на приём</h3>

    <InputGroup>
      <Select placeholder="Врач, клиника, болезнь, услуга" />
      <Select placeholder="Метро, район, округ, город МО" />
      <Select placeholder="Дата приёма" />
      <Button>Найти</Button>
    </InputGroup>

    <div class="tags">
      <Tag>Простуда</Tag>
      <Tag>Женское здоровье</Tag>
      <Tag>Мужское здоровье</Tag>
      <Tag>Заболел ребёнок</Tag>
      <Tag>Аллергия и сыпь</Tag>
      <Tag>Травма</Tag>
      <Tag>Головная боль</Tag>
      <Tag>Тревога и депрессия</Tag>
      <Tag>Расстройство пищеварения</Tag>
      <Tag>Расшифровка анализов</Tag>
      <Tag>Проблемы с сердцем</Tag>
    </div>
  </section>
</header>

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

  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 135px;

    padding: 2rem 0;

    border-bottom: 1px solid rgba(map.get(env.$color, primary), .1);

    .logo {
      width: 8.5rem;
      height: 3.5rem;
    }

    > nav {
      display: flex;
      flex-wrap: wrap;
      gap: 0 1.5rem;

      > a {
        line-height: 1.75rem;
        font-weight: 600;
      }
    }
  }

  .search-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 2rem;
    margin-bottom: 2rem;

    > h3 {
      font-weight: 600;
      font-size: 1rem;
    }

    .tags {
      width: 75%;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
</style>