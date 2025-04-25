<script lang="ts">
    import Input from "$ui-kit/Form/Input.svelte"
    import Button from "$ui-kit/Button/Button.svelte"

    import {fade} from "svelte/transition"
    import {authEmail2fa} from "$api/local-server.ts"
    import Checkbox from "$ui-kit/Form/Checkbox/Checkbox.svelte";

    let error = $state(null)

    const errorsDefaultState = {
        email: null,
        password: null
    }

    let requestLoading = $state(false)

    let conditionsAccepted = $state(false)
    let errors = $state(errorsDefaultState)

    let {
        email = $bindable(),
        authType = $bindable(),
        toNextStep,
    } = $props()

    function submit() {
        requestLoading = true

        if (!conditionsAccepted) {
            error = 'Примите правила пользовательского соглашения'
            requestLoading = false
            setTimeout(() => {error = null}, 3000)

            return
        }

        authEmail2fa(email).then(data => {
            error = null

            authType = data.auth_type
            toNextStep()
        }).catch(err => {
            if (err.response.data.errors) {
                errors = err.response.data.errors
                setTimeout(() => {errors = errorsDefaultState}, 3000)
            } else {
                error = err.response.data.message
                setTimeout(() => {error = null}, 3000)
            }
        }).then(() => {
            requestLoading = false
        })
    }
</script>

<form>
  <div>
    <label class="title-3">Email*</label>
    <Input type="email" placeholder="some@example.com" bind:value={email} error={!!errors.email}/>
    {#if errors.email}
      <div class="error" transition:fade={{duration: 300}}>{errors.email}</div>
    {/if}
  </div>
  {#if error}
    <div class="error" transition:fade={{duration: 300}}>{error}</div>
  {/if}
  <div class="rule_accept_checkbox">
    <Checkbox bind:checked={conditionsAccepted} required>
      Даю <a class="active" href="">согласие</a> на обработку моих персональных данных и соглашаюсь с <a class="active" href="">правилами</a> сайта
    </Checkbox>
  </div>
  <div>
    <Button loading={requestLoading} onclick={submit} fullWidth>Войти</Button>
  </div>
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