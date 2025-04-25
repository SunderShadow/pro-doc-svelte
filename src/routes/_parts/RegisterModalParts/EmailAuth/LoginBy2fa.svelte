<script>
    import Input from "$ui-kit/Form/Input.svelte"
    import Button from "$ui-kit/Button/Button.svelte"

    import {fade} from "svelte/transition"
    import {authEmailCodeLogin, authEmail2fa} from "$api/local-server.ts"
    import {fetchDataFromServer} from "$lib/storage/auth.ts"
    import {goto} from "$app/navigation"
    import ArrowRight from "$ui-kit/icons/ArrowRight.svelte";

    let code = $state('')

    let error = $state(null)

    let timer = $state(0)

    let {
        close,
        email,
        toPrevStep
    } = $props()

    let requestLoading = $state({
        submit: false,
        resend: false
    })

    const errorsDefaultState = {
        code: null,
        password: null
    }

    let errors = $state(errorsDefaultState)

    let password = $state('')

    function resendCode() {
        requestLoading.resend = true

        authEmail2fa(email).then(() => {
            timer = 10
            let inter = setInterval(() => {
                timer -= 1

                if (timer <= 0) {
                    clearInterval(inter)
                }
            }, 1000)
        }).then(() => {
            requestLoading.resend = false
        })
    }

    function submit() {
        requestLoading.submit = true

        authEmailCodeLogin(email, code, password).then(() => {
            fetchDataFromServer().then(() => {
                goto('/account')
                close()
            })
        }).catch(err => {
            if (err.response.data.errors) {
                errors = err.response.data.errors
                setTimeout(() => {errors = errorsDefaultState}, 3000)
            } else {
                error = err.response.data.message
                setTimeout(() => {error = null}, 3000)
            }

            setTimeout(() => {
                error = null
            }, 3000)
        }).then(() => {
            requestLoading.submit = false
        })
    }
</script>

<div>
  <a class="prev-link" onclick={(e) => {e.preventDefault(); toPrevStep()}} href=""> <ArrowRight /> Назад </a>

  <div>
    <label class="title-3">Код подтверждения*</label>
    <Input placeholder="xxxxxx" bind:value={code} error={!!errors.code}/>
    {#if errors.code}
      <div class="error" transition:fade={{duration: 300}}>{errors.code}</div>
    {/if}
  </div>

  <div>
    <label class="title-3">Пароль*</label>
    <Input placeholder="********" type="password" bind:value={password} error={!!errors.password}/>
    {#if errors.password}
      <div class="error" transition:fade={{duration: 300}}>{errors.password}</div>
    {/if}
  </div>

  {#if error}
    <div class="error" transition:fade={{duration: 300}}>{error}</div>
  {/if}
</div>

<div class="actions">
  <Button loading={requestLoading.submit} onclick={submit} fullWidth>Войти</Button>

  <div class="resend">
    <Button loading={requestLoading.resend} onclick={resendCode} fullWidth outline disabled={timer > 0}>
      Выслать код повторно
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

  .prev-link {
    position: relative;
    left: -5px;
    margin-bottom: 16px;

    display: flex;
    align-items: center;


    :global(.svg-icon-container) {
      transform: rotate(180deg);
    }
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