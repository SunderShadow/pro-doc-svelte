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
  import {goto, onNavigate} from "$app/navigation";
  import InputError from "$ui-kit/Form/InputError.svelte";
  import {show} from "$lib/storage/toasts";

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


  const errorsDefault = {
      avatar: null,
      name: null,
      email: null,
      gender: null,
      age: null,
      phone: null,
  }

  let errors = $state(errorsDefault)
  let authData: User = $state()

  auth.subscribe(data => {
      authData = data
  })

  let setPageTitle = getContext('setPageTitle')

  setPageTitle('Профиль')

  let avatarFile = $state()
  let dataWasChanged = $state(false)

  let saveLoading = $state(false)

  function checkDataChanged() {
      for (let key in authData) {
          if ($auth[key] !== authData[key]) {
              return true
          }
      }

      return false
  }

  $effect(() => {
      dataWasChanged = checkDataChanged()
  })

  function saveChanges() {
      saveLoading = true
      let formData = Object.assign({}, authData)

      if (!formData.gender) {
          formData.gender = undefined
      }

      formData.notify_email = Number(formData.notify_email)
      formData.notify_sms = Number(formData.notify_sms)

      formData.avatar = avatarFile

      return updateUserData(formData)
          .then(data => {
              saveLoading = false

              authData = data
              show('success', 'Успешно обновлено')

              authData.notify_email = Number(authData.notify_email)
              authData.notify_sms = Number(authData.notify_sms)
          })
          .catch(err => {
              saveLoading = false
              errors = err.response.data.errors

              setTimeout(() => {
                  errors = errorsDefault
              }, 3000)

              return Promise.reject(err)
          })
  }

  onNavigate(async () => {
      return new Promise(res => {
          if (dataWasChanged) {
              let save = window.confirm('Есть несохраненные изменения. Сохранить?')

              if (save) {
                  saveChanges().then(() => {
                      res()
                  }).catch(() => {
                      dataWasChanged = false
                      goto('/account/profile', {
                          noScroll: true
                      }).then(() => {
                          dataWasChanged = true
                      })
                  })
              }
          } else {
              res()
          }
      })
  })

  function logout() {
      authLogout().then(() => {
          window.location.href = '/'
      })
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
        <Input error={!!errors.name} placeholder="Иван" withErase={false} bind:value={authData.name}/>
        <InputError message={errors.name}/>
      </div>
      <div>
        <label>Пол</label>
        <Select error={!!errors.gender} placeholder="Мужской/Женский" withErase={false} data={gender} bind:value={authData.gender}/>
        <InputError message={errors.gender}/>
      </div>
      <div>
        <label>Email</label>
        <Input error={!!errors.email} placeholder="Docpro@gmail.com" withErase={false} bind:value={authData.email}/>
        <InputError message={errors.email}/>
      </div>
      <div>
        <label>Возраст</label>
        <Input error={!!errors.age} placeholder="31" withErase={false} bind:value={authData.age}/>
        <InputError message={errors.age}/>
      </div>
      <div>
        <label>Телефон</label>
        <Input
            error={!!errors.phone}
            placeholder="+7 (___) ___-__-__"
            withErase={false}
            bind:value={authData.phone}
            imask={{
              mask: '+{7}-(000)-000-00-00'
            }}
        />
        <InputError message={errors.phone}/>
      </div>
      <div class="notifications">
        <h3>Настройки уведомлений</h3>

        <div class="checkboxes">
          <Checkbox label="Получать уведомления по sms" bind:checked={authData.notify_sms}/>
          <Checkbox label="Получать уведомления на email" bind:checked={authData.notify_email}/>
        </div>

        <div class="actions">
          <Button onclick={saveChanges} loading={saveLoading}>Сохранить изменения</Button>
          <Button onclick={logout} outline>Выйти</Button>
        </div>
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
    gap: 8px 32px;
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