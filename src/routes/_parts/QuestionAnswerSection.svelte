<script lang="ts">

import Accordion from "$ui-kit/Accordion/Accordion.svelte";
</script>

<section class="page-container">
    <h2>Вопросы и ответы</h2>
    <div class="accordion-container">
        <Accordion content="Записываться у вас в медицинском центре дороже, чем в клинике?"/>
        <Accordion content="Как записаться на приём?"/>
        <Accordion content="Сколько стоит услуги медицинского сервиса?"/>
        <Accordion content="Как оплачивается приём врача?"/>
        <Accordion content="Ваш медицинский сервис — клиника?"/>
    </div>
</section>

<style lang="scss">
    .accordion-container {
      margin-top: 64px;

      display: flex;
      flex-direction: column;
      gap: 16px;
    }
</style>