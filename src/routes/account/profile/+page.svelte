<script>
  import {getContext} from "svelte"

import PhotoUpload from "./_parts/PhotoUpload.svelte"
import Input from "$ui-kit/Form/Input.svelte"
import Select from "$ui-kit/Form/Select/Select.svelte"
import Checkbox from "$ui-kit/Form/Checkbox/Checkbox.svelte"
import Button from "$ui-kit/Button/Button.svelte"

let gender = [
    {
        title: 'Мужской',
        value: 'man'
    },
    {
        title: 'Женский',
        value: 'woman'
    }
]

let setPageTitle = getContext('setPageTitle')
setPageTitle('Профиль')

</script>


<div class="wrapper">
  <h3>Мои данные</h3>
  <div class="content-wrapper">
    <div class="photo_upload">
      <PhotoUpload />
    </div>
    <form>
      <div>
        <label>ФИО</label>
        <Input placeholder="Иван" withErase={false} />
      </div>
      <div>
        <label>Пол</label>
        <Select placeholder="Мужской" withErase={false} data={gender}/>
      </div>
      <div>
        <label>Email</label>
        <Input placeholder="Docpro@gmail.com" withErase={false} />
      </div>
      <div>
        <label>Возраст</label>
        <Input placeholder="31" withErase={false} />
      </div>
      <div>
        <label>Телефон</label>
        <Input placeholder="+7 (___) ___-__-__" withErase={false} />
      </div>
      <div class="notifications">
        <h3>Настройки уведомлений</h3>
        <div class="checkboxes">
          <Checkbox label="Получать уведомления по sms"/>
          <Checkbox label="Получать уведомления на email"/>
        </div>
        <div class="actions">
          <Button>Сохранить изменения</Button>
          <Button outline>Выйти</Button>
        </div>
      </div>
    </form>
  </div>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  $mobile-breakpoint: 722px;

  @media (max-width: $mobile-breakpoint) {
    h3 {
      font-size: 18px;
    }
  }

  .wrapper {
    border-radius: 12px;
    padding: 32px;

    @media (min-width: (map.get(env.$screen-size, mobile) + 1px)) {
      border: 1px solid rgba(map.get(env.$color, primary), .1);
    }

    @media (max-width: map.get(env.$screen-size, mobile)) {
      padding: 16px;
    }

    @media (max-width: map.get(env.$screen-size, mobile)) {
      padding: 0;
    }
  }

  .content-wrapper {
    display: flex;
    gap: 196px;
    margin-top: 32px;

    @media (max-width: 1360px) {
      justify-content: space-between;
      gap: 32px;
    }

    @media (max-width: 900px) and (min-width: (map.get(env.$screen-size, tablet) + 1px)) {
      flex-direction: column;
    }

    @media (max-width: $mobile-breakpoint) {
      flex-direction: column;
    }
  }

  .photo_upload {
    flex-shrink: 0;
  }

  label {
    display: block;
    width: fit-content;
    font-weight: 600;
    margin-bottom: 8px;
  }

  form {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
    }
  }

  .notifications {
    grid-column: span 2;

    @media (max-width: 1200px) {
      grid-column: span 1;
    }

    .checkboxes {
      display: flex;
      gap: 32px;

      margin-top: 16px;

      @media (max-width: 1200px) {
        flex-direction: column;
        gap: 16px;
      }
    }

    .actions {
      display: flex;
      gap: 32px;

      margin-top: 32px;

      @media (max-width: map.get(env.$screen-size,  netbook)) and (min-width: (map.get(env.$screen-size, tablet) + 1px)) {
        flex-direction: column;
        gap: 16px;
      }

      @media (max-width: $mobile-breakpoint) {
        flex-direction: column;
        gap: 16px;
      }
    }
  }
</style>