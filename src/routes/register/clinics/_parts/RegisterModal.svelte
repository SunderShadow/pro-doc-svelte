<script>
import Modal from "$ui-kit/Modal/Modal.svelte"
import Plus from "$ui-kit/icons/Plus.svelte";
import Input from "$ui-kit/Form/Input.svelte";
import Checkbox from "$ui-kit/Form/Checkbox/Checkbox.svelte";
import Button from "$ui-kit/Button/Button.svelte";

let {
    isActive = $bindable()
} = $props()
</script>

<Modal bind:isActive>
  <div class="modal">
    <div class="header">
      <div class="title-1">Регистрация представителя клиники</div>
      <button class="close" onclick={() => {isActive = false}}><Plus size="sm" type="primary"/></button>
    </div>

    <form>
      <div>
        <label class="title-3">Город*</label>
        <Input placeholder="Введите ваш город"/>
      </div>
      <div>
        <label class="title-3">Название клиники*</label>
        <Input placeholder="Введите название клиники"/>
      </div>
      <div>
        <label class="title-3">Сайт клиники</label>
        <Input placeholder="Введите сайт вашей клиники"/>
      </div>
      <div>
        <label class="title-3">ФИО</label>
        <Input placeholder="Введите ваше имя"/>
      </div>
      <div>
        <label class="title-3">Должность*</label>
        <Input placeholder="Введите вашу должность"/>
      </div>
      <div>
        <label class="title-3">Ваш email*</label>
        <Input placeholder="Введите ваш email"/>
      </div>
      <div>
        <label class="title-3">Номер мобильного телефона*</label>
        <Input placeholder="+7(9__)___-__-__"/>
      </div>
      <div class="rule_accept_checkbox">
        <Checkbox>
          Даю <a class="active" href="">согласие</a> на обработку моих персональных данных и соглашаюсь с <a class="active" href="">правилами</a> сайта
        </Checkbox>
      </div>

      <div>
        <Button fullWidth>Получить код по SMS</Button>
      </div>
    </form>

    <div class="footer">
      <span>Уже зарегистрированы?</span>
      <a class="active" href="">Войдите</a>
    </div>
  </div>
</Modal>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .modal {
    width: 552px;
    gap: 32px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      width: min(95%, 330px);
    }
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 32px;

    a {
      font-weight: 600;
    }
  }

  .close {
    transform: rotate(45deg);
    padding: 0;
    margin: 0;
    border: none;
    background: none;

    cursor: pointer;
  }

  label {
    display: block;
    margin-bottom: 8px;
  }

  form > div {
    margin-top: 16px;
  }

  :global {
    .rule_accept_checkbox label {
      opacity: 1;
      font-weight: 400;
      color: #000;

      a {
        text-decoration: underline;
      }
    }
  }
</style>