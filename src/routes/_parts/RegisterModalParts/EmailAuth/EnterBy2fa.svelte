<script>
    import Input from "$ui-kit/Form/Input.svelte"
    import Button from "$ui-kit/Button/Button.svelte"

    import {fade} from "svelte/transition"
    import {authEmailCodeVerify, authEmailLogin} from "$api/local-server.ts"
    import {fetchDataFromServer} from "$lib/storage/auth.ts"
    import {goto} from "$app/navigation"

    let code = $state('')

    let error = $state(null)

    let timer = $state(0)

    let {
        close,
        email,
        password,
        nextStep
    } = $props()

    function resendCode() {
        authEmailLogin(email, password).then(() => {
            timer = 10
            let inter = setInterval(() => {
                timer -= 1

                if (timer <= 0) {
                    clearInterval(inter)
                }
            }, 1000)
        })
    }

    function submit() {
        authEmailCodeVerify(email, code).then(() => {
            goto('/account')
            close()
        }).catch(err => {
            error = err.response.data.message

            setTimeout(() => {
                error = null
            }, 3000)
        })
    }
</script>

<div>
  <label class="title-3">Код подтверждения*</label>
  <Input placeholder="xxxxxx" bind:value={code}/>

  {#if error}
    <div class="error" transition:fade={{duration: 300}}>{error}</div>
  {/if}
</div>

<div class="actions">
  <Button onclick={submit} fullWidth>Подтвердить код</Button>

  <div class="resend">
    <Button onclick={resendCode} fullWidth outline disabled={timer > 0}>
      Выслать ещё раз
      {#if timer > 0}
        (через {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' + (timer % 60) : timer % 60})
      {/if}
    </Button>
  </div>
</div>

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

  .actions {
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