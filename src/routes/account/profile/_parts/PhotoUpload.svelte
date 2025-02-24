<script lang="ts">
  import Button from "$ui-kit/Button/Button.svelte"

  let imageSrc = $state('')
  let photoInput = $state()

  function handlePhotoChange(e) {
      let reader = new FileReader()

      reader.onload = () => {
          imageSrc = reader.result
      }

      reader.readAsDataURL(e.target.files[0])
  }

  function removePhoto() {
      imageSrc = null
  }

  function openFileManager() {
      photoInput.click()
  }
</script>
<div class="photo_upload">
  <img src={imageSrc} alt="">

  <input type="file" accept="image/*" hidden bind:this={photoInput} onchange={handlePhotoChange}>

  <Button onclick={openFileManager} fullWidth>Загрузить фото</Button>
  <Button onclick={removePhoto} outline fullWidth>Удалить</Button>
</div>

<style lang="scss">
  .photo_upload {
    display: flex;
    flex-direction: column;
    gap: 16px;

    img {
      width: 134px;
      height: 134px;
      border-radius: 100%;
      margin-left: auto;
      margin-right: auto;
      background-color: #D9D9D9;
    }
  }
</style>