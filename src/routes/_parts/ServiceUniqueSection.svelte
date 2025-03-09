<script>
    import Election from "$ui-kit/icons/Election.svelte";
    import PhoneNotification from "$ui-kit/icons/PhoneNotification.svelte";
    import BookShelf from "$ui-kit/icons/BookShelf.svelte";
    import Comments from "$ui-kit/icons/Comments.svelte";
    import Money from "$ui-kit/icons/Money.svelte";
</script>

<section class="page-container">
  <h2>Чем уникален наш сервис</h2>
  <div class="cards">
    <article class="card triple">
      <div class="card-content">
        <div class="card-icon">
          <PhoneNotification type="primary" size="lg"/>
        </div>
        <div class="card-text">
          <h1 class="title-1">Мгновенная запись на конкретное время без звонка</h1>
          <div class="body-text-2">Мы подключаемся к информационным системам клиник</div>
        </div>
      </div>

      <span class="card-number">01</span>
    </article>

    <article class="card triple">
      <div class="card-content">
        <div class="card-icon">
          <Election type="primary" size="lg"/>
        </div>
        <div class="card-text">
          <h1 class="title-1">Выбор врача и клиники на все случаи жизни: от педиатра до онколога, от УЗИ до операций</h1>
          <div class="body-text-2">Цены не только частных, но и государственных клиник</div>
        </div>
      </div>

      <span class="card-number">02</span>
    </article>

    <article class="card">
      <div class="card-content">
        <div class="card-icon">
          <BookShelf type="primary" size="lg"/>
        </div>
        <div class="card-text">
          <h1 class="title-1">Медицинская библиотека, написанная врачами понятным языком</h1>
          <div class="body-text-2">Полезная информация о симптомах и болезнях</div>
        </div>
      </div>

      <span class="card-number">03</span>
    </article>
    <article class="card">
      <div class="card-content">
        <div class="card-icon">
          <Comments type="primary" size="lg"/>
        </div>
        <div class="card-text">
          <h1 class="title-1">Отзывы реальных пациентов, прошедшие проверку</h1>
          <div class="body-text-2">Отдел модерации проверяет все отзывы по 30+ параметрам</div>
        </div>
      </div>

      <span class="card-number">04</span>
    </article>
    <article class="card">
      <div class="card-content">
        <div class="card-icon">
          <Money type="primary" size="lg"/>
        </div>
        <div class="card-text">
          <h1 class="title-1">Сравнение цен, скидки и акции на медицинские услуги</h1>
          <div class="body-text-2">Мы подключаемся к информационным системам клиник</div>
        </div>
      </div>

      <span class="card-number">05</span>
    </article>
  </div>
</section>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  section {
    padding: 96px 0;

    @media (max-width: map.get(env.$screen-size, netbook)) {
      padding: 64px 0;
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 32px;
    margin-top: 4rem;

    @media (max-width: map.get(env.$screen-size, netbook)) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      margin-top: 2rem;
    }

    @media (max-width: 550px) {
      grid-template-columns: 1fr;
    }
  }

  .card {
    --number-size: 2rem;

    padding: 1.5rem 1.5rem 3.5rem;

    position: relative;
    min-height: 250px;
    border: 1px solid rgba(map.get(env.$color, primary), .1);
    border-radius: 12px;

    grid-column: span 2;

    @media (max-width: map.get(env.$screen-size, netbook)) {
      grid-column: span 1;
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      min-height: 200px;
    }

    @media (max-width: map.get(env.$screen-size, mobile)) {
      min-height: 220px;
    }

    .title-1 {
      color: #34343F;
      @media (max-width: map.get(env.$screen-size, netbook)) {
        font-size: 18px;
      }

      @media (max-width: map.get(env.$screen-size, tablet)) {
        font-size: 16px;
      }
    }

    .body-text-2 {
      line-height: 110%;

      @media (max-width: map.get(env.$screen-size, tablet)) {
          font-size: 14px;
      }
    }

    &:last-child {
      @media (max-width: map.get(env.$screen-size, netbook)) {
        grid-column: span 2;
      }

      @media (max-width: 550px) {
        grid-column: span 1;
      }

    }

    &.triple {
      grid-column: span 3;

      @media (max-width: map.get(env.$screen-size, netbook)) {
        grid-column: span 1;
      }
    }

    &-content {
      display: flex;
      gap: 16px;
    }

    &-text > * + * {
      margin-top: 16px;
    }

    &-number {
      position: absolute;
      right: 24px;
      bottom: 24px;

      font-size: 4rem;
      font-weight: 700;

      color: rgba(map.get(env.$color, primary), .08);

      @media (max-width: map.get(env.$screen-size, tablet)) {
        font-size: 2rem;
        right: 16px;
        bottom: 16px;
      }
    }
  }
</style>