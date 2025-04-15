<script>
    import Input from "$ui-kit/Form/Input.svelte"
    import Button from "$ui-kit/Button/Button.svelte"

    import {fade} from "svelte/transition"
    import {authEmailLogin, authEmailRegister} from "$api/local-server.js";
    import {fetchDataFromServer} from "$lib/storage/auth.js";
    import {goto} from "$app/navigation";

    let email = $state('sunundershadow@gmail.com')
    let password = $state('12345678')

    let error = $state(null)

    const errorsDefaultState = {
        email: null,
        password: null
    }

    let errors = $state(errorsDefaultState)

    let {
        close
    } = $props()

    function submit() {
        authEmailRegister(email, password).then(() => {
            error = null
            fetchDataFromServer().then(() => {
                close()
                goto('/account')
            })
        }).catch(err => {
            if (err.response.data.errors) {
                errors = err.response.data.errors
                setTimeout(() => {errors = errorsDefaultState}, 3000)
            } else {
                error = err.response.data.message
                setTimeout(() => {error = null}, 3000)
            }
        })
    }
</script>

<form>
  <div>
    <label class="title-3">Email*</label>
    <Input placeholder="some@example.com" bind:value={email} error={!!errors.email}/>
    {#if errors.email}
      <div class="error" transition:fade={{duration: 300}}>{errors.email}</div>
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
  <div>
    <Button onclick={submit} fullWidth>Войти</Button>
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