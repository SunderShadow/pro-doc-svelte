<script lang="ts">
    import Breadcrumbs from "$ui-kit/Breadcrumbs/Breadcrumbs.svelte";
    import Preview from "$ui-kit/Preview/Preview.svelte";
    import PreviewIcon from "./_assets/img/Preview.png?enhanced&format=webp"
    let breadcrumbs = [
        {
            title: 'Главная',
            href: '/'
        },
        {
            title: 'Библиотека',
            href: '/'
        },
        {
            title: 'Симптомы',
            href: ''
        }
    ]
</script>

<svelte:head>
  <link rel="preload" as="image" href={PreviewIcon.img.src} />
</svelte:head>

<main class="page-container">
  <div class="breadcrumbs">
    <Breadcrumbs list={breadcrumbs}/>
  </div>
  <div class="symptoms-preview">
    <Preview title="Симптомы" image={PreviewIcon.img.src} imageMobile={PreviewIcon.img.src}
             withGradient gradientWidth={45}/>
  </div>
  <section class="container">
    <aside>
      <div class="aside-content">
        <h4>Симптомы по частям тела</h4>
        <span class="body-text-3">Глаза и зрение</span>
        <span class="body-text-3">Живот</span>
        <span class="body-text-3">Спина и шея</span>
        <span class="body-text-3">Голова</span>
        <span class="body-text-3">Женские симптомы</span>
        <span class="body-text-3">Руки и ноги</span>
        <span class="body-text-3">Грудь, сердце</span>
        <span class="body-text-3">Кожа, ногти, волосы</span>
        <span class="body-text-3">Рот и язык</span>
        <span class="body-text-3">Уши и слух</span>
        <span class="body-text-3">Горло и глотка</span>
        <span class="body-text-3">Мужские симптомы</span>
      </div>
      <div class="aside-content">
        <h4>Общие симптомы</h4>
        <span class="body-text-3">Дрожание тела (тремор)</span>
        <span class="body-text-3">Кашель</span>
        <span class="body-text-3">Обезвоживание</span>
        <span class="body-text-3">Потеря памяти</span>
        <span class="body-text-3">Стул и задний проход</span>
        <span class="body-text-3">Храп</span>
        <span class="body-text-3">Головокружение</span>
        <span class="body-text-3">Изжога</span>
        <span class="body-text-3">Обморок</span>
        <span class="body-text-3">Пролежни</span>
        <span class="body-text-3">Запах и пот</span>
        <span class="body-text-3">Масса тела</span>
        <span class="body-text-3">Одышка</span>
        <span class="body-text-3">Рвота и тошнота</span>
        <span class="body-text-3">Желтуха</span>
        <span class="body-text-3">Моча и мочеиспускание</span>
        <span class="body-text-3">Отеки</span>
        <span class="body-text-3">Увеличенные лимфоузлы</span>
      </div>
    </aside>
    <div class="content">
      <div class="symptoms">
        <div>
          <h5>Глаза и зрение</h5>
          <span class="body-text-3">8 проблем на веках глаз</span>
        </div>
        <div>
          <h5>Голова</h5>
          <span class="body-text-3">Головные боли</span>
        </div>
        <div>
          <h4>Головокружение</h4>
          <span class="body-text-3">Головокружение</span>
        </div>
        <div>
          <h5>Горло и глотка</h5>
          <span class="body-text-3">Болит горло</span>
          <span class="body-text-3">Комок в горле (трудно глотать, дисфагия)</span>
        </div>
        <div>
          <h5>Грудь, сердце</h5>
          <span class="body-text-3">Болит грудь (молочная железа)</span>
          <span class="body-text-3">Боль в грудной клетке (в сердце, в груди)</span>
          <span class="body-text-3">Перебои в сердце, сердцебиение</span>
          <span class="body-text-3">Уплотнение в груди (молочной железе)</span>
        </div>
        <div>
          <h5>Дрожание тела (тремор)</h5>
          <span class="body-text-3">Тремор (трясутся руки, голова, тело)</span>
        </div>
        <div>
          <h5>Желтуха</h5>
          <span class="body-text-3">Желтуха</span>
        </div>
        <div>
          <h5>Женские симптомы</h5>
          <span class="body-text-3">Боль при месячных (дисменорея)</span>
          <span class="body-text-3">Выделения из влагалища</span>
          <span class="body-text-3">Задержка и отсутствие месячных (аменорея)</span>
          <span class="body-text-3">Кровь после секса</span>
          <span class="body-text-3">Маточное кровотечение</span>
          <span class="body-text-3">Нарушения менструального цикла</span>
          <span class="body-text-3">Нерегулярный цикл</span>
          <span class="body-text-3">Обильные месячные (меноррагия)</span>
        </div>
        <div>
          <h5>Запах и пот</h5>
          <span class="body-text-3">Болит живот</span>
          <span class="body-text-3">Неприятный запах пота</span>
          <span class="body-text-3">Потеют и неприятно пахнут ноги</span>
          <span class="body-text-3">Потливость (гипергидроз)</span>
        </div>
        <div>
          <h5>Изжога</h5>
          <span class="body-text-3">Изжога</span>
        </div>
        <div>
          <h5>Кашель</h5>
          <span class="body-text-3">Кашель</span>
          <span class="body-text-3">Кашель с кровью (кровохарканье)</span>
        </div>
      </div>
      <div class="symptoms">
        <div>
          <h5>Кожа, ногти, волосы</h5>
          <span class="body-text-3">Болезни ногтей</span>
          <span class="body-text-3">Выпадение волос (алопеция)</span>
          <span class="body-text-3">Жировик (липома)</span>
          <span class="body-text-3">Зуд (чешется кожа)</span>
          <span class="body-text-3">Нарыв, гнойник, чирей</span>
          <span class="body-text-3">Перхоть</span>
          <span class="body-text-3">Сыпь у новорожденных и грудных детей (+фото)</span>
          <span class="body-text-3">Сыпь у ребенка (+фото)</span>
          <span class="body-text-3">Цианоз (синие губы и кожа)</span>
          <span class="body-text-3">Шишки и уплотнения под кожей</span>
        </div>
        <div>
          <h5>Масса тела</h5>
          <span class="body-text-3">Лишний вес</span>
          <span class="body-text-3">Потеря веса</span>
        </div>
        <div>
          <h5>Моча и мочеиспускание</h5>
          <span class="body-text-3">Кровь в моче</span>
          <span class="body-text-3">Недержание мочи</span>
          <span class="body-text-3">Энурез у детей (ребенок писается)</span>
        </div>
        <div>
          <h5>Мужские симптомы</h5>
          <span class="body-text-3">Кровь в сперме</span>
        </div>
        <div>
          <h5>Нос</h5>
          <span class="body-text-3">Кровь из носа</span>
        </div>
        <div>
          <h5>Обезвоживание</h5>
          <span class="body-text-3">Обезвоживание</span>
        </div>
        <div>
          <h5>Обморок</h5>
          <span class="body-text-3">Обморок (потеря сознания)</span>
        </div>
        <div>
          <h5>Одышка</h5>
          <span class="body-text-3">Одышка и удушье</span>
        </div>
        <div>
          <h5>Отеки</h5>
          <span class="body-text-3">Отеки</span>
        </div>
        <div>
          <h5>Потеря памяти</h5>
          <span class="body-text-3">Потеря памяти (амнезия)</span>
        </div>
      </div>
      <div class="symptoms">
        <div>
          <h5>Пролежни</h5>
          <span class="body-text-3">Пролежни</span>
        </div>
        <div>
          <h5>Рвота и тошнота</h5>
          <span class="body-text-3">Рвота и понос у детей</span>
          <span class="body-text-3">Рвота и тошнота у взрослых</span>
          <span class="body-text-3">Рвота кровью</span>
          <span class="body-text-3">Рвота у детей</span>
          <span class="body-text-3">Срыгивание</span>
          <span class="body-text-3">Тошнота и рвота при беременности</span>
        </div>
        <div>
          <h5>Рвота и тошнота</h5>
          <span class="body-text-3">Головокружение</span>
        </div>
        <div>
          <h5>Рот и язык</h5>
          <span class="body-text-3">Белый налет на языке</span>
          <span class="body-text-3">Болит зуб</span>
          <span class="body-text-3">Болит язык: пятна, прыщики, язвочки на языке и др.</span>
          <span class="body-text-3">Сухость во рту и жажда</span>
          <span class="body-text-3">Язвочки во рту</span>
        </div>
        <div>
          <h5>Руки и ноги</h5>
          <span class="body-text-3">Болит кисть руки и запястье</span>
          <span class="body-text-3">Болит колено</span>
          <span class="body-text-3">Болит пятка</span>
          <span class="body-text-3">Болит стопа</span>
          <span class="body-text-3">Боль в бедре и тазобедренном суставе</span>
          <span class="body-text-3">Боль в руке и локте</span>
          <span class="body-text-3">Боль в суставах (артралгия)</span>
          <span class="body-text-3">Болят ноги у ребенка (болезнь роста)</span>
          <span class="body-text-3">Косолапость</span>
          <span class="body-text-3">Косточка на ноге (вальгусная деформация)</span>
          <span class="body-text-3">Судороги ног</span>
          <span class="body-text-3">Шишка на запястье (гигрома)</span>
        </div>
        <div>
          <h5>Спина и шея</h5>
          <span class="body-text-3">Болит шея</span>
          <span class="body-text-3">Боль в спине и пояснице</span>
        </div>
        <div>
          <h5>Стул и задний проход</h5>
          <span class="body-text-3">Боль в заднем проходе (прямой кишке)</span>
          <span class="body-text-3">Запор</span>
          <span class="body-text-3">Кал с кровью (кровь из заднего прохода)</span>
          <span class="body-text-3">Понос (диарея)</span>
        </div>
        <div>
          <h5>Увеличенные лимфоузлы</h5>
          <span class="body-text-3">Увеличенные лимфоузлы (лимфаденопатия)</span>
        </div>
        <div>
          <h5>Усталость и слабость</h5>
          <span class="body-text-3">Усталость: 10 медицинских причин</span>
          <span class="body-text-3">Хроническая усталость (упадок сил, СХУ)</span>
        </div>
        <div>
          <h5>Уши и слух</h5>
          <span class="body-text-3">Болит ухо</span>
          <span class="body-text-3">Нарушение слуха (тугоухость, глухота)</span>
          <span class="body-text-3">Шум в ушах (шум в голове)</span>
        </div>
        <div>
          <h5>Храп</h5>
          <span class="body-text-3">Храп</span>
        </div>
      </div>
    </div>
  </section>
</main>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  $mobile-adaptive: 426px;

  h4 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 150%;

    @media (max-width: map.get(env.$screen-size, netbook)) {
      font-size: 1.1rem;
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      font-size: 1rem;
    }
  }

  h5 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 150%;

    @media (max-width: map.get(env.$screen-size, netbook)) {
      font-size: 1.5rem;
    }
    @media (max-width: map.get(env.$screen-size, tablet)) {
      font-size: 1.1rem;
    }
  }

  .body-text-3 {
    font-weight: 500;
    line-height: 160%;
  }

  .breadcrumbs {
    margin-bottom: 32px;
  }

  .symptoms-preview {
    :global {
      .preview {
        background-size: contain;
      }
    }
  }

  .container {
    display: flex;
    gap: 32px;

    margin-top: 32px;

    > aside {
      display: flex;
      flex-direction: column;
      gap: 42px;
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      flex-direction: column;

      > aside {
        gap: 29px;
      }
    }
  }

  .aside-content {
    display: flex;
    flex-direction: column;
    gap: 8px;

    padding: 2rem;

    border: 1px solid rgba(map.get(env.$color, primary), 0.1);
    border-radius: 12px;
  }

  .content {
    display: flex;
    gap: 32px;

    padding: 2rem;

    border: 1px solid rgba(map.get(env.$color, primary), 0.1);
    border-radius: 12px;

    max-width: 1190px;

    @media (max-width: $mobile-adaptive) {
      flex-direction: column;
    }
  }

  .symptoms {
    display: flex;
    flex-direction: column;
    gap: 32px;

    > div {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
</style>