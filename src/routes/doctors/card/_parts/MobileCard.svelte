<script>
    import DoctorImage from "../../category/_assets/img/doctor.png?enhanced&format=webp";
    import PatientImage1 from "../_assets/img/patient-1.png?enhanced&format=webp";
    import PatientImage2 from "../_assets/img/patient-2.png?enhanced&format=webp";
    import CertificateImage from "../_assets/img/certificate.png?enhanced&format=webp";
    import Star from "$ui-kit/icons/Star.svelte";
    import Button from "$ui-kit/Button/Button.svelte";
    import DoctorLocationTimetable from "../../category/_parts/DoctorLocationTimetable.svelte";
    import ClientReview from "../../../_parts/ClientReviewSection/ClientReview.svelte";
    import PriceCards from "../../category/_parts/PriceCards.svelte";
    import Like from "$ui-kit/icons/Like.svelte";
    import Magnifier from "$ui-kit/icons/Magnifier.svelte";
    import Pagination from "../../category/_parts/Pagination.svelte";
    import SliderImgSrc from "$lib/assets/images/slider/1.webp";
    import SliderImgMobileSrc from "$lib/assets/images/slider/mobile.png";
    import {Splide, SplideSlide, SplideTrack} from "@splidejs/svelte-splide";

    const sliderOptions = {
        type: 'loop',
        perPage: 1,
    }
</script>

<svelte:head>
  <link rel="preload" as="image" href={DoctorImage.img.src} />
  <link rel="preload" as="image" href={PatientImage1.img.src} />
  <link rel="preload" as="image" href={PatientImage2.img.src} />
  <link rel="preload" as="image" href={CertificateImage.img.src} />
</svelte:head>

<div class="card">
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
        <div class="doctor-links">
          <a href="" class="active body-text-3">невролог</a>
          <a href="" class="active body-text-3">рефлексотерапевт</a>
        </div>
        <div class="doctor-links">
          <a href="" class="active body-text-3">взрослый</a>
        </div>
        <p class="body-text-3">Стаж 24 года, высшая категория, доктор медицинских наук, профессор</p>
      </div>
    </section>
    <section class="price">
      <PriceCards/>
    </section>
    <div class="button link-font-1">
      <Button><Magnifier size="sm" type="secondary"/> Показать на карте</Button>
    </div>
    <div class="doctor-location-timetable">
      <DoctorLocationTimetable/>
    </div>
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
  <section class="reviews">
    <h4>Отзывы о враче</h4>
    <div class="reviews-container">
      <ClientReview author="Пациент" authorImage={PatientImage1.img.src}
                    title="«Спасибо Алексею Викторовичу за то, что помог разобраться‥»."
                    description="Спасибо Алексею Викторовичу за то,
                          что помог разобраться в моей проблеме. До него я был у многих врачей и от них информации не добыл!
                          Алексей Викторович помог мне в лечении, которое я ему накручивал до его посещения."/>
      <ClientReview author="Пациент" authorImage={PatientImage2.img.src}
                    title="«Спасибо Алексею Викторовичу за то, что помог разобраться‥»."
                    description="Спасибо Алексею Викторовичу за то,
                          что помог разобраться в моей проблеме. До него я был у многих врачей и от них информации не добыл!
                          Алексей Викторович помог мне в лечении, которое я ему накручивал до его посещения."/>
      <!--        TODO переписать на slot-->
    </div>
    <Pagination pageCount={2} mobilePageCount={2}/>
  </section>
  <section class="documents">
    <h4>Документы и фотографии</h4>
    <div class="documents-content">
      {#each {length: 5}}
        <img src={CertificateImage.img.src} alt=""/>
      {/each}
    </div>
    <Pagination pageCount={3} mobilePageCount={3}/>
  </section>
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
  }

  .doctor-header {
    display: flex;
    align-items: center;
    gap: 16px;

    @media (max-width: map.get(env.$screen-size, mobile)) {
      display: none;
    }
  }

  .doctor-image {
    display: flex;

    position: relative;

    width: 280px;
    height: 280px;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    border: 1px solid rgba(map.get(env.$color, primary), 0.1);
    border-radius: 12px;

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
    a {
      color: map.get(env.$color, primary);
      line-height: 22.4px;
    }

    a + a::before {
      content: "|";
      margin: 0 8px;

      color: rgba(map.get(env.$color, primary), 0.1);
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

  .doctor-location-timetable {
    margin-top: 32px;

    :global {
      .sign-up {
        @media (max-width: map.get(env.$screen-size, netbook)) {
          width: 383px;
        }
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

      > li {
        line-height: 25.6px;

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