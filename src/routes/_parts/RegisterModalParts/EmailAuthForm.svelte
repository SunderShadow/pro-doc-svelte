<script lang="ts">
    import Send2fa from "./EmailAuth/Send2fa.svelte";
    import EnterBy2fa from "./EmailAuth/LoginBy2fa.svelte";
    import RegisterBy2fa from "./EmailAuth/RegisterBy2fa.svelte";

    let {
        authType = $bindable(),
        close
    } = $props()


    let step = $state(1)

    function toNextStep() {
        step += 1
    }

    function toPrevStep() {
        step -= 1
    }

    let email = $state('sunundershadow@gmail.com')
</script>

<form>
  {#if step === 1}
    <Send2fa {toNextStep} bind:authType bind:email/>
  {:else if authType === 'login' && step === 2}
    <EnterBy2fa {toPrevStep} {email} {close}/>
  {:else if authType === 'register' && step === 2}
    <RegisterBy2fa {toPrevStep} {email}  {close}/>
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