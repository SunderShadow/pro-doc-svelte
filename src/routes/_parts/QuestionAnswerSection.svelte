<script lang="ts">
    import { slide } from 'svelte/transition';
    import Accordion from "$ui-kit/Accordion/Accordion.svelte";
</script>

<section class="page-container">
    <h2>Вопросы и ответы</h2>
    <div class="accordion-container">
        <Accordion title="Записываться у вас в медицинском центре дороже, чем в клинике?">
            <p class="body-text-2 accordion-content" transition:slide>
                Нет, цены на DocPro не отличаются от цен в клиниках.
                Более того, во многие клиники записаться через СберЗдоровье даже дешевле,
                чем по телефону медицинского центра. Максимальная скидка до 50%!
            </p>
        </Accordion>
        <Accordion title="Как записаться на приём?">
            <p class="body-text-2 accordion-content" transition:slide>
                Нет, цены на DocPro не отличаются от цен в клиниках.
                Более того, во многие клиники записаться через СберЗдоровье даже дешевле,
                чем по телефону медицинского центра. Максимальная скидка до 50%!
            </p>
        </Accordion>
        <Accordion title="Сколько стоит услуги медицинского сервиса?">
            <p class="body-text-2 accordion-content" transition:slide>
                Нет, цены на DocPro не отличаются от цен в клиниках.
                Более того, во многие клиники записаться через СберЗдоровье даже дешевле,
                чем по телефону медицинского центра. Максимальная скидка до 50%!
            </p>
        </Accordion>
        <Accordion title="Как оплачивается приём врача?">
            <p class="body-text-2 accordion-content" transition:slide>
                Нет, цены на DocPro не отличаются от цен в клиниках.
                Более того, во многие клиники записаться через СберЗдоровье даже дешевле,
                чем по телефону медицинского центра. Максимальная скидка до 50%!
            </p>
        </Accordion>
        <Accordion title="Ваш медицинский сервис — клиника?">
            <p class="body-text-2 accordion-content" transition:slide>
                Нет, цены на DocPro не отличаются от цен в клиниках.
                Более того, во многие клиники записаться через СберЗдоровье даже дешевле,
                чем по телефону медицинского центра. Максимальная скидка до 50%!
            </p>
        </Accordion>

    </div>
</section>

<style lang="scss">
    .accordion-container {
      margin-top: 64px;

      display: flex;
      flex-direction: column;
      gap: 16px;

      .accordion-content {
        padding: 1rem 1.5rem;

        font-weight: 400;
        line-height: 25.6px;
        opacity: 0.5;
      }
    }
</style>