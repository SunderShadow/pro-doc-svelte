<script>
import Checkbox from "$ui-kit/Form/Checkbox/Checkbox.svelte"
import Input from "$ui-kit/Form/Input.svelte"
import Button from "$ui-kit/Button/Button.svelte"

import {fade} from "svelte/transition"

import {authSMSCodeSend, authSMSCodeVerify} from "$api/local-server.ts"
import {fetchDataFromServer} from "$lib/storage/auth.ts"
import {goto} from "$app/navigation"

let phone = $state('+79210337277')
let code = $state('')
let codeSent = $state(false)

let timer = $state(0)

let error = $state(null)

let {
    close
} = $props()

function sendSMSCode() {
    authSMSCodeSend(phone).then(r => {
        timer = 10

        error = null
        codeSent = true

        alert('Код для входа ' + r.data.code)

        let interval = setInterval(() => {
            timer -= 1

            if (timer <= 0) {
                clearInterval(interval)
            }
        }, 1000)
    }).catch(err => {
        error = "Неправильный номер телефона"
        setTimeout(() => {
            error = null
        }, 3000)
    })
}

function verifySMSCode() {
    authSMSCodeVerify(phone, code).then(() => {
        error = null
        fetchDataFromServer().then(() => {
            close()
            goto('/account')
        })
    }).catch(err => {
        err.response.status === 400

        error = 'Неверный код'
    })
}
</script>

<form>
  {#if !codeSent}
    <div>
      <label class="title-3">Номер мобильного телефона*</label>
      <Input placeholder="+7(9__)___-__-__" bind:value={phone} error={!!error}/>

      {#if error}
        <div class="error" transition:fade={{duration: 300}}>{error}</div>
      {/if}
    </div>
    <div class="rule_accept_checkbox">
      <Checkbox required>
        Даю <a class="active" href="">согласие</a> на обработку моих персональных данных и соглашаюсь с <a class="active" href="">правилами</a> сайта
      </Checkbox>
    </div>
    <div>
      <Button onclick={sendSMSCode} fullWidth>Получить код</Button>
    </div>
  {:else}
    <div>
      <label class="title-3">Код пришедший на номер*</label>
      <Input placeholder="xxxxxx" bind:value={code}/>
      {#if error}
        <div class="error" transition:fade={{duration: 300}}>{error}</div>
      {/if}
    </div>

    <div>
      <Button onclick={verifySMSCode} fullWidth>Подтвердить код</Button>
      <div class="resend">
        <Button onclick={sendSMSCode} fullWidth outline disabled={timer > 0}>
          Выслать ещё раз
          {#if timer > 0}
            (через {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' + (timer % 60) : timer % 60})
          {/if}
        </Button>
      </div>
    </div>
  {/if}
</form>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .error {
    color: map.get(env.$color, 'error');
  }

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