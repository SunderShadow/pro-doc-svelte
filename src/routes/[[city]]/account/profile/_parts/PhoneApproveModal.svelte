<script lang="ts">
    import Input from "$ui-kit/Form/Input.svelte"
    import Button from "$ui-kit/Button/Button.svelte"

    import {authSMSCodeSend, updateUserPhone} from "$api/local-server"

    import ArrowRight from "$ui-kit/icons/ArrowRight.svelte"
    import InputError from "$ui-kit/Form/InputError.svelte"
    import Modal from "$ui-kit/Modal/Modal.svelte"

    import {onMount} from "svelte"
    import {show} from "$lib/storage/toasts.js"

    let code = $state('')

    let timer = $state(0)

    let {
        close,
        phone,
    } = $props()

    let requestLoading = $state({
        submit: false,
        resend: false
    })

    const errorsDefaultState = {
        phone: null,
        code: null,
    }

    onMount(() => {
        authSMSCodeSend(phone)
    })

    let errors = $state(errorsDefaultState)

    function resendCode() {
        requestLoading.resend = true

        authSMSCodeSend(phone).then(() => {
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

        updateUserPhone(phone, code).then(() => {
            show('success', 'Номер телефона изменен')
            close()
        }).catch(() => {
            show('error', 'Что-то пошло не так')
        })
    }
</script>

<Modal>
  <a class="prev-link" onclick={(e) => {e.preventDefault(); close()}} href=""> <ArrowRight /> Отмена</a>
  <span class="title-2">Сменить email</span>

  <div class="inner_modal">
    <div>
      <label class="title-3">Новый номер телефона</label>
      <Input readonly value={phone} error={!!errors.phone} imask={{mask: '+{7}-(000)-000-00-00'}}/>
      <InputError message={errors.phone}/>
    </div>

    <div>
      <label class="title-3">Код подтверждения*</label>
      <Input placeholder="xxxxxx" bind:value={code} error={!!errors.code}/>
      <InputError message={errors.code}/>
    </div>

    <div class="actions">
      <Button loading={requestLoading.submit} onclick={submit} fullWidth>Сменить почту</Button>

      <div class="resend">
        <Button loading={requestLoading.resend} onclick={resendCode} fullWidth outline disabled={timer > 0}>
          Выслать код повторно
          {#if timer > 0}
            (через {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' + (timer % 60) : timer % 60})
          {/if}
        </Button>
      </div>
    </div>
  </div>
</Modal>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .inner_modal {
    margin-top: 30px;
    width: 500px;

    @media (max-width: 600px) {
      width: auto;
    }
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