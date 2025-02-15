<script lang="ts">
import DoctorImg from "$lib/assets/images/newsletter_doctor.png?enhanced&format=webp"
import Input from "$ui-kit/Form/Input.svelte"
import Button from "$ui-kit/Button/Button.svelte"

</script>

<section class="page-container">
  <div class="inner-container">
    <div class="inner-container__content">
      <h3>Подпишитесь на рассылку DocHeal</h3>
      <p class="body-text-1">Одно полезное письмо раз в неделю: статьи о здоровье, акции клиник и скидки до 50%, опросы.</p>

      <form action="/">
        <label for="newsletter_email">Email</label>
        <Input id="newsletter_email" placeholder="Введите ваш Email" />

        <div class="button">
          <Button _type="submit">Подписаться</Button>
        </div>
      </form>
    </div>
    <img class="doctor" src={DoctorImg.img.src} alt="">
  </div>
</section>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

    $mobile-size: 500px;

  section {
    padding: 155px 0 0 10px;
  }

  h3 + p {
    margin-top: 16px;
  }

  label {
    font-weight: 600;
  }

  form {
    margin-top: 32px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      max-width: 50%;
    }

    @media (max-width: $mobile-size) {
      max-width: 100%;
    }

    .button {
      margin-top: 32px;
    }
  }

  .inner-container {
    position: relative;

    padding: 32px;

    background-image: url("$lib/assets/images/newsletter_bg.png?enhanced&format=webp");
    background-size: cover;
    background-position: center;

    border-radius: 12px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      padding: 16px;

      h3 {
        font-size: 18px;
      }

      .body-text-1 {
        font-size: 1rem;
      }
    }

    &__content {
      max-width: max(42%, 300px);

      @media (max-width: map.get(env.$screen-size, netbook)) {
        max-width: 50%;
      }

      @media (max-width: map.get(env.$screen-size, tablet)) {
        max-width: 100%;
      }
    }
  }

  .doctor {
    position: absolute;
    right: 10%;
    bottom: -10px;

    @media (max-width: map.get(env.$screen-size, netbook)) {
      right: 0;
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      display: none;
    }
  }
</style>