<script lang="ts">
  import type {User} from "$lib/types"
  import {getContext} from "svelte"

  import {fade} from "svelte/transition"

  import PhotoUpload from "./_parts/PhotoUpload.svelte"
  import Input from "$ui-kit/Form/Input.svelte"
  import Select from "$ui-kit/Form/Select/Select.svelte"
  import Checkbox from "$ui-kit/Form/Checkbox/Checkbox.svelte"
  import Button from "$ui-kit/Button/Button.svelte"
  import auth from "$lib/storage/auth.js"

  import {logout as authLogout} from "$lib/storage/auth"
  import {updateUserData} from "$api/local-server"
  import {goto} from "$app/navigation"

  let gender = [
      {
          title: 'Мужской',
          value: 1
      },
      {
          title: 'Женский',
          value: 2
      }
  ]


  let success = $state(false)

  const errorsDefault = {
      avatar: null,
      name: null,
      email: null,
      gender: null,
      age: null,
      phone: null,
  }

  let errors = $state(errorsDefault)
  let authData: User = $state($auth)

  let setPageTitle = getContext('setPageTitle')

  setPageTitle('Профиль')

  let avatarFile = $state()

  function saveChanges() {
      let formData = Object.assign({}, authData)

      if (!formData.gender) {
          formData.gender = undefined
      }

      formData.notify_email = Number(formData.notify_email)
      formData.notify_sms = Number(formData.notify_sms)

      formData.avatar = avatarFile

      updateUserData(formData)
          .then(data => {
              authData = data
              success = true

              authData.notify_email = Number(authData.notify_email)
              authData.notify_sms = Number(authData.notify_sms)

              setTimeout(() => {
                  success = false
              }, 3000)
          })
          .catch(err => {
            success = false
            errors = err.response.data.errors

            setTimeout(() => {
                errors = errorsDefault
            }, 3000)
        })
  }

  function logout() {
      authLogout()
      goto('/')
  }
</script>


{#if authData}
<div class="wrapper">
  <h3>Мои данные</h3>
  <div class="content-wrapper">
    <div class="photo_upload">
      <PhotoUpload bind:value={authData.avatar} bind:file={avatarFile}/>
    </div>
    <form>
      <div>
        <label>ФИО</label>
        <Input placeholder="Иван" withErase={false} bind:value={authData.name}/>
        {#if errors.name}
          <div class="error" transition:fade={{duration: 300}}>{errors.name}</div>
        {/if}
      </div>
      <div>
        <label>Пол</label>
        <Select placeholder="Мужской/Женский" withErase={false} data={gender} bind:value={authData.gender}/>
        {#if errors.gender}
          <div class="error" transition:fade={{duration: 300}}>{errors.gender}</div>
        {/if}
      </div>
      <div>
        <label>Email</label>
        <Input placeholder="Docpro@gmail.com" withErase={false} bind:value={authData.email}/>
        {#if errors.email}
          <div class="error" transition:fade={{duration: 300}}>{errors.email}</div>
        {/if}
      </div>
      <div>
        <label>Возраст</label>
        <Input placeholder="31" withErase={false} bind:value={authData.age}/>
        {#if errors.age}
          <div class="error" transition:fade={{duration: 300}}>{errors.age}</div>
        {/if}
      </div>
      <div>
        <label>Телефон</label>
        <Input placeholder="+7 (___) ___-__-__" withErase={false} bind:value={authData.phone}/>
        {#if errors.phone}
          <div class="error" transition:fade={{duration: 300}}>{errors.phone}</div>
        {/if}
      </div>
      <div class="notifications">
        <h3>Настройки уведомлений</h3>

        <div class="checkboxes">
          <Checkbox label="Получать уведомления по sms" bind:checked={authData.notify_sms}/>
          <Checkbox label="Получать уведомления на email" bind:checked={authData.notify_email}/>
        </div>

        <div class="actions">
          <Button onclick={saveChanges}>Сохранить изменения</Button>
          <Button onclick={logout} outline>Выйти</Button>
        </div>

        {#if success}
          <div class="success" transition:fade={{duration: 300}}>Успешно обновлено</div>
        {/if}
      </div>
    </form>
  </div>
</div>

{/if}
<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  $mobile-breakpoint: 722px;

  @media (max-width: $mobile-breakpoint) {
    h3 {
      font-size: 18px;
    }
  }

  .success {
    color: map.get(env.$color, 'success');
  }

  .error {
    color: map.get(env.$color, 'error');
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