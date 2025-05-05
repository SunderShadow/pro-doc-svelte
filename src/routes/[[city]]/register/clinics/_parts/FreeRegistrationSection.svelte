<script lang="ts">
  import ThumbnailImg from "../_assets/free_registration_thumbnail.png?enhanced&format=webp"
  import Button from "$ui-kit/Button/Button.svelte";

  let {
      modalVisible = $bindable()
  } = $props()
</script>

<section class="page-container page-section">
  <h2>После бесплатной регистрации вы сможете</h2>
  
  <div class="content">
    <div class="thumbnail">
      <img src={ThumbnailImg.img.src} alt="">
    </div>

    <div class="text">
      <h3>01. Обновить информацию о клинике</h3>
      <p class="body-text-2">Расскажите о преимуществах вашей клиники и обновите информацию, чтобы пациенты смогли вас найти</p>
      
      <h3>02. Добавить цены на услуги</h3>
      <p class="body-text-2">Добавьте цены – тогда ваши услуги попадут в выборки и привлекут пациентов бесплатно</p>

      <h3>03. Ответить на отзывы</h3>
      <p class="body-text-2">Более 60% пользователей читают отзывы о клинике и врачах перед записью на прием – получайте мгновенные уведомления о новых отзывах и быстро реагируйте</p>

      <div class="send_request_btn">
        <Button onclick={() => {modalVisible = true}}>Отправить заявку</Button>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  .content {
    display: flex;
    gap: 10vw;

    margin-top: 64px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      flex-direction: column;
      gap: 32px;
      margin-top: 32px;
    }
  }

  .thumbnail {
    display: flex;

    img {
      width: 100%;
      margin-top: auto;
      margin-bottom: auto;

      object-fit: cover;
      border-radius: 12px;

      @media (max-width: 1300px) {
        aspect-ratio: 1 / 1;
      }

      @media (max-width: map.get(env.$screen-size, tablet)) {
        aspect-ratio: auto;
        height: 310px;
      }
      @media (max-width: map.get(env.$screen-size, mobile)) {
        height: 210px;
      }
    }
  }

  .text {
    width: 512px;
    flex-shrink: 0;

    @media (max-width: map.get(env.$screen-size, netbook)) {
      width: 368px;
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      width: 100%;
    }
  }

  h3 + p {
    margin-top: 8px;
  }

  p + h3 {
    margin-top: 32px;
  }

  h3 {
    @media (max-width: map.get(env.$screen-size, netbook)) {
        font-size: 1.5rem;
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      font-size: 1.15rem;
    }
  }

  .send_request_btn {
    margin-top: 32px;
  }
</style>