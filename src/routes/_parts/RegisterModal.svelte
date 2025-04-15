<script>
  import {goto} from "$app/navigation"

  import Modal from "$ui-kit/Modal/Modal.svelte"
  import Plus from "$ui-kit/icons/Plus.svelte"
  import Input from "$ui-kit/Form/Input.svelte"
  import Checkbox from "$ui-kit/Form/Checkbox/Checkbox.svelte"
  import Button from "$ui-kit/Button/Button.svelte"
  import {authSMSCodeSend, GOOGLE_AUTH_URL} from "$api/local-server.js";
  import Register from "./RegisterModalParts/Register.svelte";
  import Login from "./RegisterModalParts/Login.svelte";

  let {
      register = $bindable(),
      isActive = $bindable()
  } = $props()

  let phone = $state('')
  function submit() {
      goto('/account')
      isActive = false
  }

  function authGoogle() {
      window.location = GOOGLE_AUTH_URL
  }

  function sendSMSCode() {
      authSMSCodeSend(phone).then(r => {
          alert('Код для входа ' + r.data.code)
      })
  }
</script>

<Modal bind:isActive>
  {#if register}
    <Register close={() => {isActive = false}} toggleForm={() => {register = !register}}/>
  {:else}
    <Login close={() => {isActive = false}} toggleForm={() => {register = !register}}/>
  {/if}
</Modal>

