<script lang="ts">
import DoctorImg from "$lib/assets/images/newsletter_doctor.png?enhanced&format=webp"
import BgImg     from "$lib/assets/images/newsletter_bg.png?enhanced&format=webp&quality=80"
import Input     from "$ui-kit/Form/Input.svelte"
import Button    from "$ui-kit/Button/Button.svelte"

</script>

<section class="page-container">
  <div class="inner-container" style:--img={`url(${BgImg.img.src})`}>
    <div class="inner-container__content">
      <h3>Подпишитесь на рассылку DocHeal</h3>
      <p class="body-text-1">Одно полезное письмо раз в неделю: статьи о здоровье, акции клиник и скидки до 50%, опросы.</p>

      <form action="/">
        <label for="newsletter_email">Email</label>
        <Input id="newsletter_email" placeholder="Введите ваш Email" />

        <div class="button" id="newsletter_submit">
          <Button _type="submit">Подписаться</Button>
        </div>
      </form>
    </div>
    <img class="doctor" src={DoctorImg.img.src} alt="" loading="lazy">
  </div>
</section>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  $mobile-size: 500px;

  :global {
    .form-control-wrapper:has(#newsletter_email) {
      background-color: map.get(env.$bg-color, primary);
    }
  }

  section {
    padding: 155px 0 10px 0;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      padding: 0;
    }
  }

  h3 + p {
    margin-top: 16px;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
  }

  form {
    margin-top: 32px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      max-width: 50%;
    }

    @media (max-width: $mobile-size) {
      margin-top: 16px;
      max-width: 100%;
    }

    .button {
      margin-top: 32px;

      @media (max-width: $mobile-size) {
        margin-top: 16px;
      }
    }
  }

  :global {
    #newsletter_submit button{
      @media (max-width: $mobile-size) {
        width: 100%;
      }
    }
  }

  .inner-container {
    position: relative;

    padding: 32px;

    background-image: var(--img);
    background-size: cover;
    background-position: center;

    border-radius: 12px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      padding: 16px;
    }

    h3 {
      @media (max-width: map.get(env.$screen-size, tablet)) {
        font-size: 18px;
      }
    }

    .body-text-1 {
      @media (max-width: map.get(env.$screen-size, tablet)) {
        font-size: 1rem;
      }

      @media (max-width: map.get(env.$screen-size, mobile)) {
        margin-top: 8px;
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