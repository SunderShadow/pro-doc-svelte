<script>
    import Send2fa from "./EmailAuth/Send2fa.svelte";
    import EnterBy2fa from "./EmailAuth/EnterBy2fa.svelte";

    let {
        close
    } = $props()

    let step = $state(1)

    function nextStep() {
        step += 1
    }

    let email = $state('sunundershadow@gmail.com')
    let password = $state('12345678')
</script>

<form>
  {#if step === 1}
    <Send2fa {nextStep} bind:email bind:password/>
  {:else if step === 2}
    <EnterBy2fa {nextStep} {email} {password} {close}/>
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