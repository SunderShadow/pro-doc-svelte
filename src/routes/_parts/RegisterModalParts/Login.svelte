<script>
    import Plus from "$ui-kit/icons/Plus.svelte"
    import Button from "$ui-kit/Button/Button.svelte"
    import {GOOGLE_AUTH_URL} from "$api/local-server.js"
    import SmsCodeForm from "./Auth/SmsCodeForm.svelte";
    import EmailLoginForm from "./Auth/EmailLoginForm.svelte";

    function authGoogle() {
        window.location = GOOGLE_AUTH_URL
    }

    let {
        type = $bindable(),
        toggleForm,
        close
    } = $props()
</script>

<div class="modal" id="enter_account_modal">
  <div class="header">
    <div class="title-1">Вход представителя клиники</div>
    <button class="close" onclick={close}><Plus size="sm" type="primary"/></button>
  </div>

  <div class="sms_form">
    {#if type === 'sms'}
      <SmsCodeForm {close}/>
    {:else if type === 'email'}
      <EmailLoginForm {close}/>
    {/if}
  </div>

  <div class="footer">
    <span>Ещё не зарегестрированы</span>
    <a class="active" href="" onclick={(e) => {e.preventDefault(); toggleForm()}}>Зарегистрируйтесь</a>
  </div>

  <div class="divider">
    <hr>
    <span>или</span>
    <hr>
  </div>

  <div class="register_buttons">
    {#if type !== 'email'}
      <Button fullWidth outline onclick={() => {type = 'email'}}>Войти по email</Button>
    {/if}
    {#if type !== 'sms'}
      <Button fullWidth outline onclick={() => {type = 'sms'}}>Войти по sms</Button>
    {/if}
    <Button onclick={authGoogle} fullWidth outline>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1363_29470)">
          <path d="M40 0H0V40H40V0Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M29.7875 20.2291C29.7875 19.52 29.7239 18.8381 29.6057 18.1836H20.1875V22.0518H25.5693C25.3375 23.3018 24.633 24.3609 23.5739 25.07V27.5791H26.8057C28.6966 25.8382 29.7875 23.2745 29.7875 20.2291Z" fill="#4285F4"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1864 29.9985C22.8864 29.9985 25.15 29.103 26.8046 27.5757L23.5728 25.0666C22.6773 25.6666 21.5318 26.0212 20.1864 26.0212C17.5818 26.0212 15.3773 24.2621 14.5909 21.8984H11.25V24.4894C12.8955 27.7575 16.2773 29.9985 20.1864 29.9985Z" fill="#34A853"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5921 21.8987C14.3921 21.2987 14.2784 20.6578 14.2784 19.9987C14.2784 19.3396 14.3921 18.6987 14.5921 18.0987V15.5078H11.2511C10.5739 16.8578 10.1875 18.3851 10.1875 19.9987C10.1875 21.6124 10.5739 23.1396 11.2511 24.4897L14.5921 21.8987Z" fill="#FBBC05"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1864 13.9773C21.6546 13.9773 22.9728 14.4818 24.0091 15.4727L26.8773 12.6046C25.1455 10.9909 22.8818 10 20.1864 10C16.2773 10 12.8955 12.2409 11.25 15.5091L14.5909 18.1C15.3773 15.7364 17.5818 13.9773 20.1864 13.9773Z" fill="#EA4335"/>
        </g>
        <rect x="0.5" y="0.5" width="39" height="39" rx="3.5" stroke="#5856D6" stroke-opacity="0.1"/>
        <defs>
          <clipPath id="clip0_1363_29470">
            <rect width="40" height="40" rx="4" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      Войти через Google
    </Button>
<!--    <Button fullWidth outline>-->
<!--      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--        <g clip-path="url(#clip0_1363_29477)">-->
<!--          <rect width="40" height="40" fill="#0077FF"/>-->
<!--          <path d="M20.9825 27C13.466 27 9.17864 21.7447 9 13H12.7651C12.8888 19.4184 15.6646 22.1371 17.8632 22.6977V13H21.4085V18.5355C23.5796 18.2973 25.8607 15.7748 26.6302 13H30.1755C29.8855 14.4391 29.3075 15.8017 28.4776 17.0025C27.6477 18.2033 26.5837 19.2166 25.3523 19.979C26.7269 20.6756 27.941 21.6615 28.9145 22.8717C29.888 24.082 30.5988 25.489 31 27H27.0974C26.7373 25.6876 26.0054 24.5128 24.9934 23.6228C23.9814 22.7328 22.7343 22.1673 21.4085 21.997V27H20.9825Z" fill="white"/>-->
<!--        </g>-->
<!--        <defs>-->
<!--          <clipPath id="clip0_1363_29477">-->
<!--            <rect width="40" height="40" rx="4" fill="white"/>-->
<!--          </clipPath>-->
<!--        </defs>-->
<!--      </svg>-->

<!--      Войти через ВКонтакте-->
<!--    </Button>-->
  </div>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .modal {
    width: 552px;
    gap: 32px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      width: min(100%, 330px);
    }
  }

  .header {
    width: 100%;
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 32px;

    font-weight: 500;

    a {
      font-weight: 600;
    }
  }

  .divider {
    display: flex;
    align-items: center;
    gap: 12px;

    margin-top: 32px;

    color: #CBD4E6;

    > hr {
      background: #CBD4E6;
      border-color: #CBD4E6;
      flex-grow: 1;
    }
  }

  .register_buttons {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;
  }


  .close {
    transform: rotate(45deg);
    padding: 0;
    margin: 0;
    border: none;
    background: none;

    cursor: pointer;
  }

  label {
    display: block;
    margin-bottom: 8px;
  }



  :global {
    #enter_account_modal .register_buttons button {
      border: 1px solid #CBD4E6;
    }
  }

  svg {
    flex-shrink: 0;
    width: 40px;
    height: 40px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      width: 32px;
      height: 32px;
    }
  }
</style>