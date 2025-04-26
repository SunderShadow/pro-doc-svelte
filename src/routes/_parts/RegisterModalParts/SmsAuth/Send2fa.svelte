<script lang="ts">
    import Input from "$ui-kit/Form/Input.svelte"
    import Button from "$ui-kit/Button/Button.svelte"

    import {fade} from "svelte/transition"
    import {authSMSCodeSend} from "$api/local-server.ts"
    import Checkbox from "$ui-kit/Form/Checkbox/Checkbox.svelte"
    import {onMount} from "svelte";
    import {show} from "$lib/storage/toasts";
    import InputError from "$ui-kit/Form/InputError.svelte";

    let error = $state(null)

    const errorsDefaultState = {
        phone: null,
        password: null
    }

    let phoneInputEl = $state()
    let requestLoading = $state(false)

    let conditionsAccepted = $state(false)
    let errors = $state(errorsDefaultState)

    let {
        phone = $bindable(),
        authType = $bindable(),
        toNextStep,
    } = $props()

    onMount(() => {
        setTimeout(() => {
            phoneInputEl.focus()
        }, 100)
    })

    function submit(e) {
        e.preventDefault()
        requestLoading = true

        if (!conditionsAccepted) {
            show('error', 'Примите правила пользовательского соглашения')
            requestLoading = false
            setTimeout(() => {error = null}, 3000)

            return
        }

        authSMSCodeSend(phone).then(data => {
            error = null

            authType = data.auth_type
            alert('Код входа: ' + data.code)
            toNextStep()
        }).catch(err => {
            if (err.response.data.errors) {
                errors = err.response.data.errors
                setTimeout(() => {errors = errorsDefaultState}, 3000)
            } else {
                show('error', err.response.data.message)
            }
        }).then(() => {
            requestLoading = false
        })
    }
</script>

<form onsubmit={submit}>
  <div>
    <label class="title-3">Телефон*</label>
    <Input
        name="phone"
        bind:value={phone}
        bind:el={phoneInputEl}

        type="tel"
        autocomplete="tel"
        placeholder="+7-(980)-777-55-22"
        error={!!errors.phone}
        imask={{
          mask: '+{7}-(000)-000-00-00'
        }}
    />
    <InputError message={errors.phone} />
  </div>
  <div class="rule_accept_checkbox">
    <Checkbox bind:checked={conditionsAccepted}>
      Даю <a class="active" href="">согласие</a> на обработку моих персональных данных и соглашаюсь с <a class="active" href="">правилами</a> сайта
    </Checkbox>
  </div>
  <div>
    <Button _type="submit" loading={requestLoading} fullWidth>Войти</Button>
  </div>
</form>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  form > div {
    margin-top: 16px;
  }

  .resend {
    margin-top: 15px;
  }

  :global {
    .rule_accept_checkbox .label {
      opacity: 1;
      font-weight: 400;
      color: #000;

      a {
        text-decoration: underline;
      }
    }
  }
</style>