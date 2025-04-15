<script lang="ts">
  import Button from "$ui-kit/Button/Button.svelte"

  let {
      value = $bindable(''),
      file = $bindable()
  } = $props()

  let photoInput = $state()

  function handlePhotoChange(e) {
      let reader = new FileReader()

      reader.onload = () => {
          value = reader.result
      }

      file = e.target.files[0]
      reader.readAsDataURL(e.target.files[0])
  }

  function removePhoto() {
      value = null
  }

  function openFileManager() {
      photoInput.click()
  }
</script>
<div class="photo_upload">
  <div class="img" class:empty={value !== null && value.length > 0}>
    {#if value !== null && value.length > 0}
      <img src={value} alt="">
    {/if}
  </div>

  <input type="file" accept="image/*" hidden bind:this={photoInput} onchange={handlePhotoChange}>

  <Button onclick={openFileManager} fullWidth>Загрузить фото</Button>
  <Button onclick={removePhoto} outline fullWidth>Удалить</Button>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .photo_upload {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .img {
      width: 134px;
      height: 134px;
      border-radius: 100%;
      padding: 4px;
      border: 1px solid transparent;
      margin-left: auto;
      margin-right: auto;

      box-sizing: content-box;
      overflow: hidden;

      &:not(:empty) {
        border-color: rgba(map.get(env.$color, primary), .2);
      }

      &:empty {
        background-color: #D9D9D9;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>