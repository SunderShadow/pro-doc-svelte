<script>
    import DoctorImage from "../_assets/img/doctor.png?enhanced&format=webp"
    import Star from "$ui-kit/icons/Star.svelte"
    import Button from "$ui-kit/Button/Button.svelte"
    import DoctorLocationTimetable from "../../works_with/[age]/category/[category]/_parts/DoctorLocationTimetable.svelte"
    import PriceCards from "../../works_with/[age]/category/[category]/_parts/PriceCards.svelte"
    import Like from "$ui-kit/icons/Like.svelte"
    import Magnifier from "$ui-kit/icons/Magnifier.svelte"

    import CardSlider from "./CardSlider.svelte"

    let screenWidth = $state(0)
</script>

<svelte:head>
  <link rel="preload" as="image" href={DoctorImage.img.src} />
</svelte:head>

<svelte:window bind:innerWidth={screenWidth} />

{#snippet stats()}
  <div class="doctor-links">
    <a href="" class="active body-text-3">невролог</a>
    <a href="" class="active body-text-3">рефлексотерапевт</a>
  </div>
  <div class="doctor-links">
    <a href="" class="active body-text-3">взрослый</a>
  </div>
  <p class="body-text-3">Стаж 24 года, высшая категория, доктор медицинских наук, профессор</p>
{/snippet}

<div class="card">
  <div class="card-container">
    <div class="card-content">
      <section class="doctor-header">
        <div class="doctor-image">
          <img src={DoctorImage.img.src} alt="" loading="lazy">
          <div class="favorite_icon">
            <Like size="sm"/>
          </div>
        </div>
        <div class="doctor-stats">
          <h3>Горбунов Алексей Викторович</h3>
          <div class="doctor-capital">
            <div class="rating title-3">
              <Star/>
              <span>4.9</span>
            </div>
            <a href="" class="link-font-1">4 отзыва</a>
          </div>
          {#if screenWidth > 425}
            {@render stats()}
          {/if}
        </div>
      </section>
      {#if screenWidth <= 425}
        {@render stats()}
      {/if}
      <section class="price">
        <PriceCards/>
      </section>
      <div class="button link-font-1">
        <Button><Magnifier size="sm" type="secondary"/> Показать на карте</Button>
      </div>
      {#if screenWidth <= 1200}
        <div class="timetable">
          <DoctorLocationTimetable/>
        </div>
      {/if}
      <article class="doctor-info">
        <section class="about">
          <h4>О враче</h4>
          <p class="body-text-2">
            Невролог, гирудотерапевт. Проводит диагностику и лечение болей в спине,
            головных болей, инсультов и его остаточных явлений, атеросклеротических поражений,
            невритов, невралгий, нарушений памяти и сна.
            При лечении неврологических заболеваний активно применяет гирудотерапию.
            Автор 10 публикаций.
          </p>
        </section>
        <section class="medication">
          <h4>Лечение и консультация по вопросам:</h4>
          <ul>
            <li class="body-text-2">артрозы</li>
            <li class="body-text-2">артриты</li>
            <li class="body-text-2">синовиты</li>
            <li class="body-text-2">бурситы</li>
            <li class="body-text-2">остеохондроз позвоночника</li>
            <li class="body-text-2">плоскостопие</li>
            <li class="body-text-2">пяточная шпора</li>
            <li class="body-text-2">реабилитация после переломов</li>
          </ul>
        </section>
        <section class="education">
          <h4>Образование</h4>
          <div>
            <p class="body-text-2">ГОУ «Московская медицинская академия им. И.М. Сеченова», 1997</p>
            <span class="body-text-2">Лечебное дело, базовое образование</span>
          </div>
          <div>
            <p class="body-text-2">ГОУ ДПО «Российская медицинская академия последипломного образования», 2000</p>
            <span class="body-text-2">Хирургия, ординатура</span>
          </div>
          <div>
            <p class="body-text-2">ГОУ ДПО «Российская медицинская академия последипломного образования», 2004</p>
            <span class="body-text-2">Острые эрозивно-язвенные поражения желудка и двенадцатиперстной кишки при патологии жёлчных путей, докторантура</span>
          </div>
        </section>
        <section class="courses">
          <h4>Курсы и сертификаты</h4>
          <div class="courses-container">
            <p class="body-text-2">Хирургия, <span>2004,</span> <span>2010,</span> <span>2016</span></p>
            <p class="body-text-2">Организация здравоохранения и общественное здоровье, 2012, 2017</p>
            <p class="body-text-2">Травматология и ортопедия, 2016, 2020</p>
            <p class="body-text-2">Актуальные вопросы организации здравоохранения и общественного здоровья:
              экспертиза временной нетрудоспособности и качества медицинской помощи, 2017</p>
          </div>
        </section>
        <section class="experience">
          <h4>Опыт работы</h4>
          <div>
            <p class="body-text-2">Клиника здорового позвоночника «Здравствуй!»</p>
            <b>2019 — настоящее время</b>
            <span class="body-text-2">Травматолог-ортопед</span>
          </div>
          <div>
            <p class="body-text-2">ФГУЗ «Медико-санитарная часть ГУВД г. Москвы»</p>
            <b>1998–2005</b>
            <span class="body-text-2">Травматолог-ортопед</span>
          </div>
          <div>
            <p class="body-text-2">ФГБОУ ДПО «Российская медицинская академия последипломного образования» ЦКБ МПС</p>
            <b>2005–2015</b>
            <span class="body-text-2">Хирург</span>
          </div>
          <div>
            <p class="body-text-2">АО «Семейный доктор»</p>
            <b>2015–2019</b>
            <span class="body-text-2">Хирург</span>
          </div>
        </section>
        <div class="associations">
          <h4>Ассоциации</h4>
          <p class="body-text-2">Ассоциация травматологов России</p>
        </div>
      </article>
    </div>
    {#if screenWidth > 1200}
      <DoctorLocationTimetable/>
    {/if}
  </div>
  <CardSlider/>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  h4 {
    font-size: 1.5rem;
    line-height: 36px;
    font-weight: 600;
  }

  .card {
    display: flex;
    flex-direction: column;

    padding: 2rem;
    margin-top: 32px;

    border: 1px solid rgba(map.get(env.$color, primary), 0.1);
    border-radius: 12px;

    .card-container {
      display: flex;
      align-items: start;
      gap: 160px;

      @media (max-width: 1200px) {
        display: block;
      }
    }
  }

  .timetable {
    margin-top: 32px;
  }

  .doctor-header {
    display: flex;
    align-items: center;
    gap: 16px;

    @media (max-width: map.get(env.$screen-size, mobile)) {
      margin-bottom: 16px;
    }
  }

  .doctor-image {
    display: flex;
    flex-shrink: 0;

    position: relative;

    width: 280px;
    height: 280px;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    border: 1px solid rgba(map.get(env.$color, primary), 0.1);
    border-radius: 12px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      width: 130px;
      height: 130px;
    }

    .favorite_icon {
      position: absolute;
      top: 16px;
      left: 16px;
    }

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      flex-shrink: 0;
    }
  }

  .doctor-stats {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .doctor-capital {
      display: flex;
      align-items: center;
      gap: 8px;

      .rating {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      > a {
        color: rgba(map.get(env.$color, primary), 0.5);
        text-decoration: underline;
        text-underline-offset: 4px;
      }

      :global {
        .svg-icon-container {
          --size: 14px;
          --color: #FFCC00;
        }
      }
    }

    @media (max-width: map.get(env.$screen-size, netbook)) {
      > h3 {
        font-size: 1.5rem;
      }
    }
  }

  .doctor-links {
    display: flex;
    align-items: center;

    a {
      display: inline-flex;
      color: map.get(env.$color, primary);
      line-height: 22.4px;
    }

    a:first-child {
      position: relative;
      top: -1px;
    }

    a + a::before {
      content: "";
      height: 24px;
      width: 1px;
      margin: 0 8px;

      background: rgba(map.get(env.$color, primary), .1);
    }
  }

  .price {
    margin-top: 24px;
  }

  .button {
    padding-top: 32px;

    :global {
      > button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;

        width: 100%;
      }
    }
  }

  .doctor-info {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 32px;

    p {
      line-height: 25.6px;
    }
  }

  .about {
    padding-top: 2rem;

    > h4 {
      margin-bottom: 8px;
    }
  }

  .medication {
    > h4 {
      margin-bottom: 16px;
    }

    > ul {
      display: flex;
      flex-direction: column;
      margin-left: .5em;

      > li {
        line-height: 1.2em;

        &::marker {
          color: rgba(map.get(env.$font-color, primary), 0.5);
        }
      }
    }
  }

  .education {
    display: flex;
    flex-direction: column;
    gap: 16px;

    > div {
      display: flex;
      flex-direction: column;

      > span {
        color: map.get(env.$color, primary);
      }
    }
  }

  .courses {
    > h4 {
      margin-bottom: 8px;
    }
  }

  .courses-container {
    display: flex;
    flex-direction: column;
    gap: 8px;

    span {
      font-family: "Gilroy", sans-serif;
      font-weight: 700;
      color: map.get(env.$font-color, primary);
    }
  }

  .experience {
    display: flex;
    flex-direction: column;
    gap: 8px;

    > div {
      display: flex;
      flex-direction: column;

      > span {
        color: map.get(env.$color, primary);
      }
    }
  }

  .associations {
    > h4 {
      margin-bottom: 8px;
    }
  }

  .reviews {
    display: flex;
    flex-direction: column;

    padding-top: 2rem;

    > h4 {
      margin-bottom: 16px;
    }
  }

  .reviews-container {
    display: flex;
    gap: 30px;

    margin-bottom: 32px;

    :global {
      h1 {
        font-size: 1.2rem; // временно
      }
    }
  }

  .documents {
    padding-top: 2rem;

    > h4 {
      margin-bottom: 16px;
    }
  }

  .documents-content {
    display: flex;
    gap: 28px;

    margin-bottom: 32px;

    overflow-x: hidden;

    > img {
      width: 292px;
      height: 366px;

      border: 2px solid map.get(env.$bg-color, primary);
      border-radius: 12px;
    }
  }
</style>