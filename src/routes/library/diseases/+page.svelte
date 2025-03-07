<script lang="ts">
  import Breadcrumbs from "$ui-kit/Breadcrumbs/Breadcrumbs.svelte";
  import Preview from "$ui-kit/Preview/Preview.svelte";
  import PreviewImage from "./_assets/img/preview.png?enhanced&format=webp"
  import Alphabet from "./_parts/Alphabet.svelte";

  let screenWidth = $state();

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
          title: 'Заболевания',
          href: ''
      }
  ]
</script>

<svelte:window bind:innerWidth={screenWidth}/>

<svelte:head>
  <link rel="preload" as="image" href={PreviewImage.img.src} />
</svelte:head>

<main class="page-container">
  <div class="breadcrumbs">
    <Breadcrumbs list={breadcrumbs}/>
  </div>
  <div class="diseases-preview">
    <Preview title="Заболевания" image={PreviewImage.img.src} imageMobile={PreviewImage.img.src}
    withGradient gradientWidth={screenWidth >= 768? 50 : 40}/>
  </div>
  <Alphabet/>
  <article>
    <section id="Популярные">
      <h3>Популярные</h3>
      <div>
        <a href="" class="link-font-1">Гастрит</a>
        <a href="" class="link-font-1">Геморрой</a>
      </div>
      <div>
        <a href="" class="link-font-1">Головная боль кластерная</a>
        <a href="" class="link-font-1">Грыжи: основные виды и лечение</a>
      </div>
      <div>
        <a href="" class="link-font-1">Депрессия</a>
        <a href="" class="link-font-1">Молочница</a>
      </div>
      <div>
        <a href="" class="link-font-1">Ожирение</a>
      </div>
      <div>
        <a href="" class="link-font-1">Паническая атака</a>
      </div>
    </section>
    <section id="А">
      <h3>А</h3>
      <div>
        <a href="" class="link-font-1">Аденоиды и аденоидэктомия</a>
        <a href="" class="link-font-1">Аденокарцинома желудка</a>
        <a href="" class="link-font-1">Аденома простаты (увеличение предстательной железы)</a>
        <a href="" class="link-font-1">Акне (прыщи на лице, угревая сыпь)</a>
        <a href="" class="link-font-1">Аллергия</a>
      </div>
      <div>
        <a href="" class="link-font-1">Алопеция</a>
        <a href="" class="link-font-1">Анальная трещина (трещина заднего прохода)</a>
        <a href="" class="link-font-1">Ангина и хронический тонзиллит</a>
      </div>
      <div>
        <a href="" class="link-font-1">Артериальная гипертензия</a>
        <a href="" class="link-font-1">Артрит</a>
        <a href="" class="link-font-1">Артрит ревматоидный</a>
      </div>
      <div>
        <a href="" class="link-font-1">Астма бронхиальная</a>
        <a href="" class="link-font-1">Астма у детей</a>
        <a href="" class="link-font-1">Атеросклероз</a>
      </div>
      <div>
        <a href="" class="link-font-1">Паническая атака</a>
      </div>
    </section>
    <section id="Б">
      <h3>Б</h3>
      <div>
        <a href="" class="link-font-1">Бактериальный вагиноз</a>
        <a href="" class="link-font-1">Беременность внематочная</a>
      </div>
      <div>
        <a href="" class="link-font-1">Бесплодие</a>
        <a href="" class="link-font-1">Болезнь Боткина</a>
      </div>
      <div>
        <a href="" class="link-font-1">Болезнь Крона</a>
        <a href="" class="link-font-1">Болезнь Филатова</a>
      </div>
      <div>
        <a href="" class="link-font-1">Бородавки и папилломы (+фото)</a>
        <a href="" class="link-font-1">Бронхиальная астма</a>
      </div>
      <div>
        <a href="" class="link-font-1">Бронхиальная астма у детей</a>
        <a href="" class="link-font-1">Бронхит</a>
      </div>
    </section>
    <section id="В">
      <h3>В</h3>
      <div>
        <a href="" class="link-font-1">ВИЧ</a>
        <a href="" class="link-font-1">Вагинальный кандидоз</a>
        <a href="" class="link-font-1">Вагинит</a>
      </div>
      <div>
        <a href="" class="link-font-1">Вагиноз бактериальный</a>
        <a href="" class="link-font-1">Варикозное расширение вен (варикоз)</a>
        <a href="" class="link-font-1">Венерические болезни</a>
      </div>
      <div>
        <a href="" class="link-font-1">Ветрянка (ветряная оспа)</a>
        <a href="" class="link-font-1">Внематочная беременность</a>
      </div>
      <div>
        <a href="" class="link-font-1">Воспаление лёгких (пневмония)</a>
        <a href="" class="link-font-1">Воспаление среднего уха</a>
      </div>
      <div>
        <a href="" class="link-font-1">Вши (педикулёз)</a>
        <a href="" class="link-font-1">Выкидыш</a>
      </div>
    </section>
    <section id="Г">
      <h3>Г</h3>
      <div>
        <a href="" class="link-font-1">Гайморит</a>
        <a href="" class="link-font-1">Гастрит</a>
        <a href="" class="link-font-1">Гастроэнтерит у взрослых</a>
        <a href="" class="link-font-1">Геморрой</a>
        <a href="" class="link-font-1">Гепатит</a>
        <a href="" class="link-font-1">Гепатит А</a>
        <a href="" class="link-font-1">Гепатит В</a>
        <a href="" class="link-font-1">Гепатит С</a>
      </div>
      <div>
        <a href="" class="link-font-1">Герпес генитальный</a>
        <a href="" class="link-font-1">Герпес глаза (герпетическое поражение глаз)</a>
        <a href="" class="link-font-1">Герпес на губах (вирус простого герпеса)</a>
        <a href="" class="link-font-1">Гестационный диабет</a>
        <a href="" class="link-font-1">Гигрома</a>
      </div>
      <div>
        <a href="" class="link-font-1">Гипергидроз</a>
        <a href="" class="link-font-1">Гипертония (повышенное давление)</a>
        <a href="" class="link-font-1">Гипотиреоз (гипофункция щитовидной железы)</a>
        <a href="" class="link-font-1">Гипотония (пониженное давление)</a>
        <a href="" class="link-font-1">Глаукома</a>
      </div>
      <div>
        <a href="" class="link-font-1">Головная боль кластерная</a>
        <a href="" class="link-font-1">Гонорея</a>
        <a href="" class="link-font-1">Грибок на ногах (грибок стопы)</a>
        <a href="" class="link-font-1">Грибок ногтей (онихомикоз)</a>
        <a href="" class="link-font-1">Грипп</a>
      </div>
      <div>
        <a href="" class="link-font-1">Грыжа диска</a>
        <a href="" class="link-font-1">Грыжа паховая</a>
        <a href="" class="link-font-1">Грыжа позвоночника (межпозвоночная грыжа)</a>
        <a href="" class="link-font-1">Грыжа пупочная</a>
        <a href="" class="link-font-1">Грыжи: основные виды и лечение</a>
      </div>
    </section>
    <section id="Д">
      <h3>Д</h3>
      <div>
        <a href="" class="link-font-1">Дентальный абсцесс</a>
        <a href="" class="link-font-1">Депрессия</a>
        <a href="" class="link-font-1">Дерматит контактный</a>
      </div>
      <div>
        <a href="" class="link-font-1">Детские инфекционные болезни</a>
        <a href="" class="link-font-1">Детский церебральный паралич (ДЦП)</a>
      </div>
      <div>
        <a href="" class="link-font-1">Диабет гестационный</a>
        <a href="" class="link-font-1">Диабет сахарный</a>
      </div>
      <div>
        <a href="" class="link-font-1">Диабет сахарный 1 типа</a>
        <a href="" class="link-font-1">Диабет сахарный 2 типа</a>
      </div>
      <div>
        <a href="" class="link-font-1">Диспепсия</a>
        <a href="" class="link-font-1">Доброкачественная гиперплазия предстательной железы (ДГПЖ)</a>
      </div>
    </section>
    <section id="Ж">
      <h3>Ж</h3>
      <div>
        <a href="" class="link-font-1">Железистая лихорадка</a>
      </div>
      <div>
        <a href="" class="link-font-1">Железодефицитная анемия</a>
      </div>
      <div>
        <a href="" class="link-font-1">Желчнокаменная болезнь</a>
      </div>
    </section>
    <section id="И">
      <h3>И</h3>
      <div>
        <a href="" class="link-font-1">ИППП</a>
        <a href="" class="link-font-1">Импотенция (эректильная дисфункция)</a>
      </div>
      <div>
        <a href="" class="link-font-1">Инсульт</a>
      </div>
      <div>
        <a href="" class="link-font-1">Инфаркт миокарда</a>
      </div>
      <div>
        <a href="" class="link-font-1">Инфекции, передающиеся половым путём</a>
      </div>
      <div>
        <a href="" class="link-font-1">Инфекционный мононуклеоз</a>
      </div>
    </section>
    <section id="К">
      <h3>К</h3>
      <div>
        <a href="" class="link-font-1">Камни в жёлчном пузыре</a>
        <a href="" class="link-font-1">Камни в мочевом пузыре</a>
        <a href="" class="link-font-1">Камни в почках (нефролитиаз)</a>
        <a href="" class="link-font-1">Кандидоз влагалища</a>
        <a href="" class="link-font-1">Кандидоз полости рта</a>
      </div>
      <div>
        <a href="" class="link-font-1">Кандидоз полости рта у детей (+ фото)</a>
        <a href="" class="link-font-1">Кандидоз у мужчин</a>
        <a href="" class="link-font-1">Кандидозный стоматит у взрослых</a>
        <a href="" class="link-font-1">Кандидозный стоматит у детей</a>
        <a href="" class="link-font-1">Карбункул</a>
      </div>
      <div>
        <a href="" class="link-font-1">Кариес</a>
        <a href="" class="link-font-1">Катаракта возрастная</a>
        <a href="" class="link-font-1">Киста яичника</a>
        <a href="" class="link-font-1">Кистозный фиброз</a>
        <a href="" class="link-font-1">Кишечная инфекция (пищевое отравление)</a>
      </div>
      <div>
        <a href="" class="link-font-1">Кишечный грипп</a>
        <a href="" class="link-font-1">Климакс (менопауза)</a>
        <a href="" class="link-font-1">Коклюш</a>
        <a href="" class="link-font-1">Колит язвенный (неспецифический язвенный колит)</a>
        <a href="" class="link-font-1">Кольпит (вагинит)</a>
      </div>
      <div>
        <a href="" class="link-font-1">Конъюнктивит</a>
        <a href="" class="link-font-1">Корь</a>
        <a href="" class="link-font-1">Крапивница</a>
        <a href="" class="link-font-1">Краснуха</a>
      </div>
    </section>
    <section id="Л">
      <h3>Л</h3>
      <div>
        <a href="" class="link-font-1">Ларингит</a>
      </div>
      <div>
        <a href="" class="link-font-1">Лишний вес</a>
      </div>
    </section>
    <section id="М">
      <h3>М</h3>
      <div>
        <a href="" class="link-font-1">Мастит</a>
        <a href="" class="link-font-1">Межпозвоночная грыжа</a>
        <a href="" class="link-font-1">Меланома</a>
      </div>
      <div>
        <a href="" class="link-font-1">Менингит</a>
        <a href="" class="link-font-1">Мигрень</a>
        <a href="" class="link-font-1">Микоз ногтей</a>
      </div>
      <div>
        <a href="" class="link-font-1">Микоз стоп</a>
        <a href="" class="link-font-1">Миома</a>
        <a href="" class="link-font-1">Молочница</a>
      </div>
      <div>
        <a href="" class="link-font-1">Молочница во рту (кандидоз полости рта) + фото</a>
        <a href="" class="link-font-1">Молочница у детей (+ фото)</a>
        <a href="" class="link-font-1">Молочница у мужчин</a>
      </div>
      <div>
        <a href="" class="link-font-1">Моноцитарная ангина</a>
        <a href="" class="link-font-1">Мочекаменная болезнь</a>
        <a href="" class="link-font-1">Муковисцидоз</a>
      </div>
    </section>
    <section id="Н">
      <h3>Н</h3>
      <div>
        <a href="" class="link-font-1">Паническая атака</a>
        <a href="" class="link-font-1">Панкреатит острый</a>
        <a href="" class="link-font-1">Панкреатит хронический</a>
        <a href="" class="link-font-1">Папилломы</a>
        <a href="" class="link-font-1">Паратонзиллярный абсцесс</a>
        <a href="" class="link-font-1">Пародонтоз и пародонтит</a>
        <a href="" class="link-font-1">Пароксизмальная тахикардия (учащённое сердцебиение)</a>
        <a href="" class="link-font-1">Паротит эпидемический</a>
      </div>
      <div>
        <a href="" class="link-font-1">Паховая грыжа</a>
        <a href="" class="link-font-1">Педикулёз</a>
        <a href="" class="link-font-1">Перелом и ушиб рёбер</a>
        <a href="" class="link-font-1">Перелом ключицы</a>
        <a href="" class="link-font-1">Перелом костей носа</a>
        <a href="" class="link-font-1">Перелом лодыжки</a>
        <a href="" class="link-font-1">Перелом ноги</a>
        <a href="" class="link-font-1">Перелом пальца ноги</a>
      </div>
      <div>
        <a href="" class="link-font-1">Перелом пальца руки</a>
        <a href="" class="link-font-1">Перелом руки или запястья</a>
        <a href="" class="link-font-1">Перелом шейки бедра</a>
        <a href="" class="link-font-1">Перитонит</a>
        <a href="" class="link-font-1">Перхоть и себорейный дерматит</a>
        <a href="" class="link-font-1">Пиелонефрит (инфекция почек)</a>
        <a href="" class="link-font-1">Пищевое отравление</a>
        <a href="" class="link-font-1">Пломбирование зубных каналов</a>
        <a href="" class="link-font-1">Пневмония</a>
      </div>
      <div>
        <a href="" class="link-font-1">Повышенное давление</a>
        <a href="" class="link-font-1">Подагра</a>
        <a href="" class="link-font-1">Позвоночная грыжа</a>
        <a href="" class="link-font-1">Поликистоз яичников</a>
        <a href="" class="link-font-1">Половые инфекции</a>
        <a href="" class="link-font-1">Постхолецистэктомический синдром</a>
        <a href="" class="link-font-1">Потливость (гипергидроз)</a>
        <a href="" class="link-font-1">Предменструальный синдром (ПМС)</a>
      </div>
      <div>
        <a href="" class="link-font-1">Пролежни</a>
        <a href="" class="link-font-1">Простатит</a>
        <a href="" class="link-font-1">Простуда (ОРЗ, ОРВИ)</a>
        <a href="" class="link-font-1">Прыщи на лице</a>
        <a href="" class="link-font-1">Псориаз (чешуйчатый лишай)</a>
        <a href="" class="link-font-1">Пупочная грыжа</a>
      </div>
    </section>
    <section id="Р">
      <h3>Р</h3>
      <div>
        <a href="" class="link-font-1">Рак</a>
        <a href="" class="link-font-1">Рак желудка</a>
        <a href="" class="link-font-1">Рак лёгких</a>
      </div>
      <div>
        <a href="" class="link-font-1">Рак матки (рак эндометрия)</a>
        <a href="" class="link-font-1">Рак молочной железы (рак груди)</a>
        <a href="" class="link-font-1">Рак простаты (предстательной железы)</a>
      </div>
      <div>
        <a href="" class="link-font-1">Рак шейки матки</a>
        <a href="" class="link-font-1">Рассеянный склероз</a>
        <a href="" class="link-font-1">Растяжение сухожилий, связок и мышц</a>
      </div>
      <div>
        <a href="" class="link-font-1">Ревматоидный артрит</a>
        <a href="" class="link-font-1">Ринит аллергический</a>
        <a href="" class="link-font-1">Ринит неаллергический</a>
      </div>
      <div>
        <a href="" class="link-font-1">Родинка (невус)</a>
        <a href="" class="link-font-1">Ротавирусная инфекция (кишечный грипп)</a>
      </div>
    </section>
    <section id="С">
      <h3>С</h3>
      <div>
        <a href="" class="link-font-1">СПИД и ВИЧ</a>
        <a href="" class="link-font-1">Сахарный диабет 2 типа</a>
        <a href="" class="link-font-1">Свинка (паротит эпидемический)</a>
        <a href="" class="link-font-1">Себорейный дерматит</a>
        <a href="" class="link-font-1">Сердечная недостаточность</a>
      </div>
      <div>
        <a href="" class="link-font-1">Синдром раздражённого кишечника (СРК)</a>
        <a href="" class="link-font-1">Синусит</a>
        <a href="" class="link-font-1">Сифилис</a>
      </div>
      <div>
        <a href="" class="link-font-1">Скарлатина</a>
        <a href="" class="link-font-1">Сколиоз позвоночника</a>
        <a href="" class="link-font-1">Слизистый колит</a>
      </div>
      <div>
        <a href="" class="link-font-1">Сотрясение мозга</a>
        <a href="" class="link-font-1">Спастический колит</a>
        <a href="" class="link-font-1">Стенокардия</a>
      </div>
      <div>
        <a href="" class="link-font-1">Столбняк</a>
        <a href="" class="link-font-1">Сухожильный ганглий</a>
      </div>
    </section>
    <section id="Т">
      <h3>Т</h3>
      <div>
        <a href="" class="link-font-1">Трещина заднего прохода</a>
      </div>
      <div>
        <a href="" class="link-font-1">Триппер</a>
      </div>
      <div>
        <a href="" class="link-font-1">Трихомониаз (трихомоноз)</a>
      </div>
      <div>
        <a href="" class="link-font-1">Туберкулёз</a>
      </div>
      <div>
        <a href="" class="link-font-1">Тугоухость</a>
      </div>
    </section>
    <section id="У">
      <h3>У</h3>
      <div>
        <a href="" class="link-font-1">Удаление зуба мудрости</a>
      </div>
      <div>
        <a href="" class="link-font-1">Угревая сыпь</a>
      </div>
    </section>
    <section id="Ф">
      <h3>Ф</h3>
      <div>
        <a href="" class="link-font-1">Флегмонозная ангина</a>
      </div>
      <div>
        <a href="" class="link-font-1">Флюс (дентальный абсцесс)</a>
      </div>
      <div>
        <a href="" class="link-font-1">Фурункул и карбункул</a>
      </div>
    </section>
    <section id="Х">
      <h3>Х</h3>
      <div>
        <a href="" class="link-font-1">Хламидиоз</a>
        <a href="" class="link-font-1">Холецистит острый</a>
        <a href="" class="link-font-1">Хроническая почечная недостаточность</a>
      </div>
      <div>
        <a href="" class="link-font-1">Хроническая сердечная недостаточность</a>
      </div>
      <div>
        <a href="" class="link-font-1">Хронический обструктивный бронхит (ХОБЛ)</a>
      </div>
      <div>
        <a href="" class="link-font-1">Хронический панкреатит</a>
      </div>
      <div>
        <a href="" class="link-font-1">Хронический тонзиллит</a>
      </div>
    </section>
    <section id="Ц">
      <h3>Ц</h3>
      <div>
        <a href="" class="link-font-1">Церебральный паралич</a>
      </div>
      <div>
        <a href="" class="link-font-1">Цирроз печени</a>
      </div>
      <div>
        <a href="" class="link-font-1">Цистит</a>
      </div>
    </section>
    <section id="Ч">
      <h3>Ч</h3>
      <div>
        <a href="" class="link-font-1">Чесотка</a>
      </div>
      <div>
        <a href="" class="link-font-1">Чешуйчатый лишай</a>
      </div>
    </section>
    <section id="Ш">
      <h3>Ш</h3>
      <div>
        <a href="" class="link-font-1">Шизофрения</a>
      </div>
    </section>
    <section id="Э">
      <h3>Э</h3>
      <div>
        <a href="" class="link-font-1">Экзема (атопический дерматит, нейродермит)</a>
        <a href="" class="link-font-1">Эндометриоз</a>
        <a href="" class="link-font-1">Энтеробиоз</a>
      </div>
      <div>
        <a href="" class="link-font-1">Энурез у детей (ребёнок писается)</a>
      </div>
      <div>
        <a href="" class="link-font-1">Энцефалит клещевой</a>
      </div>
      <div>
        <a href="" class="link-font-1">Эпилепсия</a>
      </div>
      <div>
        <a href="" class="link-font-1">Эректильная дисфункция</a>
      </div>
    </section>
    <section id="Я">
      <h3>Я</h3>
      <div>
        <a href="" class="link-font-1">Язва желудка</a>
      </div>
      <div>
        <a href="" class="link-font-1">Язвенно-некротический гингивит</a>
      </div>
      <div>
        <a href="" class="link-font-1">Ячмень на глазу</a>
      </div>
    </section>
  </article>
</main>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  :global {
    :root {
      scroll-behavior: smooth;
    }
  }

  .breadcrumbs {
    @media (max-width: map.get(env.$screen-size, tablet)) {
      padding-top: 1rem;
    }
  }

  .diseases-preview {
    padding-top: 2rem;
    padding-bottom: 6rem;

    :global {
      .preview {
        background-size: contain;
      }
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      padding-top: 1rem;
      padding-bottom: 4rem;
    }
  }

  article {
    display: flex;
    flex-direction: column;

    margin-top: 64px;

    > section {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 32px;

      padding: 2rem 0;

      border-bottom: 1px solid rgba(map.get(env.$color, primary), 0.1);

      > h3 {
        color: map.get(env.$color, primary);
        line-height: 140%;

        min-width: 30px;
        min-height: 0;

        word-wrap: break-word;
        word-break: break-all;
        max-width: 100%;

        @media (max-width: map.get(env.$screen-size, netbook)) {
          font-size: 1.5rem;
        }
      }

      > div {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      &:first-of-type {
        span {
          font-weight: 500;
        }
      }

      @media (max-width: map.get(env.$screen-size, tablet)) {
        grid-template-columns: 1fr;
        gap: 8px;

        padding: 1rem 0;
      }
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      margin-top: 32px;
    }
  }
</style>