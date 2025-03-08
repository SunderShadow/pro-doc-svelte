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
            href: '/library'
        },
        {
            title: 'Симптомы',
            href: ''
        }
    ]
</script>

<svelte:head>
  <link rel="preload" as="image" href={PreviewIcon.img.src} />
  <title>Симптомы</title>
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
        <a href="#vision" class="body-text-3">Глаза и зрение</a>
        <a href="" class="body-text-3">Живот</a>
        <a href="#neck" class="body-text-3">Спина и шея</a>
        <a href="#head" class="body-text-3">Голова</a>
        <a href="#women" class="body-text-3">Женские симптомы</a>
        <a href="#legs" class="body-text-3">Руки и ноги</a>
        <a href="#breast" class="body-text-3">Грудь, сердце</a>
        <a href="#leather" class="body-text-3">Кожа, ногти, волосы</a>
        <a href="#mouth" class="body-text-3">Рот и язык</a>
        <a href="#hearing" class="body-text-3">Уши и слух</a>
        <a href="#throat" class="body-text-3">Горло и глотка</a>
        <a href="#men" class="body-text-3">Мужские симптомы</a>
      </div>
      <div class="aside-content">
        <h4>Общие симптомы</h4>
        <a href="#tremor" class="body-text-3">Дрожание тела (тремор)</a>
        <a href="#cough" class="body-text-3">Кашель</a>
        <a href="#dehydration" class="body-text-3">Обезвоживание</a>
        <a href="#amnesia" class="body-text-3">Потеря памяти</a>
        <a href="#anus" class="body-text-3">Стул и задний проход</a>
        <a href="#snore" class="body-text-3">Храп</a>
        <a href="#dizziness" class="body-text-3">Головокружение</a>
        <a href="#heartburn" class="body-text-3">Изжога</a>
        <a href="#fainting" class="body-text-3">Обморок</a>
        <a href="#bedsores" class="body-text-3">Пролежни</a>
        <a href="#smell" class="body-text-3">Запах и пот</a>
        <a href="#weight" class="body-text-3">Масса тела</a>
        <a href="#dyspnea" class="body-text-3">Одышка</a>
        <a href="#vomit" class="body-text-3">Рвота и тошнота</a>
        <a href="#icterus" class="body-text-3">Желтуха</a>
        <a href="#urine" class="body-text-3">Моча и мочеиспускание</a>
        <a href="#swelling" class="body-text-3">Отеки</a>
        <a href="#lymph nodes" class="body-text-3">Увеличенные лимфоузлы</a>
      </div>
    </aside>
    <div class="content">
      <div class="symptoms">
        <div id="vision">
          <h5>Глаза и зрение</h5>
          <a href="" class="body-text-3">8 проблем на веках глаз</a>
        </div>
        <div id="head">
          <h5>Голова</h5>
          <a href="" class="body-text-3">Головные боли</a>
        </div>
        <div id="dizziness">
          <h4>Головокружение</h4>
          <a href="" class="body-text-3">Головокружение</a>
        </div>
        <div id="throat">
          <h5>Горло и глотка</h5>
          <a href="" class="body-text-3">Болит горло</a>
          <a href="" class="body-text-3">Комок в горле (трудно глотать, дисфагия)</a>
        </div>
        <div id="breast">
          <h5>Грудь, сердце</h5>
          <a href="" class="body-text-3">Болит грудь (молочная железа)</a>
          <a href="" class="body-text-3">Боль в грудной клетке (в сердце, в груди)</a>
          <a href="" class="body-text-3">Перебои в сердце, сердцебиение</a>
          <a href="" class="body-text-3">Уплотнение в груди (молочной железе)</a>
        </div>
        <div id="tremor">
          <h5>Дрожание тела (тремор)</h5>
          <a href="" class="body-text-3">Тремор (трясутся руки, голова, тело)</a>
        </div>
        <div id="icterus">
          <h5>Желтуха</h5>
          <a href="" class="body-text-3">Желтуха</a>
        </div>
        <div id="women">
          <h5>Женские симптомы</h5>
          <a href="" class="body-text-3">Боль при месячных (дисменорея)</a>
          <a href="" class="body-text-3">Выделения из влагалища</a>
          <a href="" class="body-text-3">Задержка и отсутствие месячных (аменорея)</a>
          <a href="" class="body-text-3">Кровь после секса</a>
          <a href="" class="body-text-3">Маточное кровотечение</a>
          <a href="" class="body-text-3">Нарушения менструального цикла</a>
          <a href="" class="body-text-3">Нерегулярный цикл</a>
          <a href="" class="body-text-3">Обильные месячные (меноррагия)</a>
        </div>
        <div id="smell">
          <h5>Запах и пот</h5>
          <a href="" class="body-text-3">Болит живот</a>
          <a href="" class="body-text-3">Неприятный запах пота</a>
          <a href="" class="body-text-3">Потеют и неприятно пахнут ноги</a>
          <a href="" class="body-text-3">Потливость (гипергидроз)</a>
        </div>
        <div id="heartburn">
          <h5>Изжога</h5>
          <a href="" class="body-text-3">Изжога</a>
        </div>
        <div id="cough">
          <h5>Кашель</h5>
          <a href="" class="body-text-3">Кашель</a>
          <a href="" class="body-text-3">Кашель с кровью (кровохарканье)</a>
        </div>
      </div>
      <div class="symptoms">
        <div>
          <h5 id="leather">Кожа, ногти, волосы</h5>
          <a href="" class="body-text-3">Болезни ногтей</a>
          <a href="" class="body-text-3">Выпадение волос (алопеция)</a>
          <a href="" class="body-text-3">Жировик (липома)</a>
          <a href="" class="body-text-3">Зуд (чешется кожа)</a>
          <a href="" class="body-text-3">Нарыв, гнойник, чирей</a>
          <a href="" class="body-text-3">Перхоть</a>
          <a href="" class="body-text-3">Сыпь у новорожденных и грудных детей (+фото)</a>
          <a href="" class="body-text-3">Сыпь у ребенка (+фото)</a>
          <a href="" class="body-text-3">Цианоз (синие губы и кожа)</a>
          <a href="" class="body-text-3">Шишки и уплотнения под кожей</a>
        </div>
        <div id="weight">
          <h5>Масса тела</h5>
          <a href="" class="body-text-3">Лишний вес</a>
          <a href="" class="body-text-3">Потеря веса</a>
        </div>
        <div id="urine">
          <h5>Моча и мочеиспускание</h5>
          <a href="" class="body-text-3">Кровь в моче</a>
          <a href="" class="body-text-3">Недержание мочи</a>
          <a href="" class="body-text-3">Энурез у детей (ребенок писается)</a>
        </div>
        <div id="men">
          <h5>Мужские симптомы</h5>
          <a href="" class="body-text-3">Кровь в сперме</a>
        </div>
        <div id="noise">
          <h5>Нос</h5>
          <a href="" class="body-text-3">Кровь из носа</a>
        </div>
        <div id="dehydration">
          <h5>Обезвоживание</h5>
          <a href="" class="body-text-3">Обезвоживание</a>
        </div>
        <div id="fainting">
          <h5>Обморок</h5>
          <a href="" class="body-text-3">Обморок (потеря сознания)</a>
        </div>
        <div id="dyspnea">
          <h5>Одышка</h5>
          <a href="" class="body-text-3">Одышка и удушье</a>
        </div>
        <div id="swelling">
          <h5>Отеки</h5>
          <a href="" class="body-text-3">Отеки</a>
        </div>
        <div id="amnesia">
          <h5>Потеря памяти</h5>
          <a href="" class="body-text-3">Потеря памяти (амнезия)</a>
        </div>
      </div>
      <div class="symptoms">
        <div id="bedsores">
          <h5>Пролежни</h5>
          <a href="" class="body-text-3">Пролежни</a>
        </div>
        <div id="vomit">
          <h5>Рвота и тошнота</h5>
          <a href="" class="body-text-3">Рвота и понос у детей</a>
          <a href="" class="body-text-3">Рвота и тошнота у взрослых</a>
          <a href="" class="body-text-3">Рвота кровью</a>
          <a href="" class="body-text-3">Рвота у детей</a>
          <a href="" class="body-text-3">Срыгивание</a>
          <a href="" class="body-text-3">Тошнота и рвота при беременности</a>
        </div>
        <div id="mouth">
          <h5>Рот и язык</h5>
          <a href="" class="body-text-3">Белый налет на языке</a>
          <a href="" class="body-text-3">Болит зуб</a>
          <a href="" class="body-text-3">Болит язык: пятна, прыщики, язвочки на языке и др.</a>
          <a href="" class="body-text-3">Сухость во рту и жажда</a>
          <a href="" class="body-text-3">Язвочки во рту</a>
        </div>
        <div id="legs">
          <h5>Руки и ноги</h5>
          <a href="" class="body-text-3">Болит кисть руки и запястье</a>
          <a href="" class="body-text-3">Болит колено</a>
          <a href="" class="body-text-3">Болит пятка</a>
          <a href="" class="body-text-3">Болит стопа</a>
          <a href="" class="body-text-3">Боль в бедре и тазобедренном суставе</a>
          <a href="" class="body-text-3">Боль в руке и локте</a>
          <a href="" class="body-text-3">Боль в суставах (артралгия)</a>
          <a href="" class="body-text-3">Болят ноги у ребенка (болезнь роста)</a>
          <a href="" class="body-text-3">Косолапость</a>
          <a href="" class="body-text-3">Косточка на ноге (вальгусная деформация)</a>
          <a href="" class="body-text-3">Судороги ног</a>
          <a href="" class="body-text-3">Шишка на запястье (гигрома)</a>
        </div>
        <div id="neck">
          <h5>Спина и шея</h5>
          <a href="" class="body-text-3">Болит шея</a>
          <a href="" class="body-text-3">Боль в спине и пояснице</a>
        </div>
        <div id="anus">
          <h5>Стул и задний проход</h5>
          <a href="" class="body-text-3">Боль в заднем проходе (прямой кишке)</a>
          <a href="" class="body-text-3">Запор</a>
          <a href="" class="body-text-3">Кал с кровью (кровь из заднего прохода)</a>
          <a href="" class="body-text-3">Понос (диарея)</a>
        </div>
        <div id="lymph nodes">
          <h5>Увеличенные лимфоузлы</h5>
          <a href="" class="body-text-3">Увеличенные лимфоузлы (лимфаденопатия)</a>
        </div>
        <div id="weakness">
          <h5>Усталость и слабость</h5>
          <a href="" class="body-text-3">Усталость: 10 медицинских причин</a>
          <a href="" class="body-text-3">Хроническая усталость (упадок сил, СХУ)</a>
        </div>
        <div id="hearing">
          <h5>Уши и слух</h5>
          <a href="" class="body-text-3">Болит ухо</a>
          <a href="" class="body-text-3">Нарушение слуха (тугоухость, глухота)</a>
          <a href="" class="body-text-3">Шум в ушах (шум в голове)</a>
        </div>
        <div id="snore">
          <h5>Храп</h5>
          <a href="" class="body-text-3">Храп</a>
        </div>
      </div>
    </div>
  </section>
</main>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  $mobile-breakpoint: 580px;

  :global {
    :root {
      scroll-behavior: smooth;
    }
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 100%;

    @media (max-width: map.get(env.$screen-size, netbook)) {
      font-size: 1.1rem;
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      font-size: 1rem;
    }
  }

  a {
    line-height: 100%;
  }

  h5 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 100%;

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

    cursor: pointer;
  }

  .breadcrumbs {
    margin-bottom: 32px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      margin-top: 16px;
    }
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

    @media (max-width: 900px) {
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

    padding: 32px;

    border: 1px solid rgba(map.get(env.$color, primary), 0.1);
    border-radius: 12px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      padding: 24px 16px;
    }
  }

  .content {
    display: flex;
    gap: 32px;

    padding: 32px;

    border: 1px solid rgba(map.get(env.$color, primary), 0.1);
    border-radius: 12px;

    max-width: 1190px;

    @media (max-width: $mobile-breakpoint) {
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