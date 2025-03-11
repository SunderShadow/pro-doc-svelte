<script>
  import ThumbnailImg from  "./assets/clinic.png?enhanced&format=webp"
  import ClinicIconImg from "./assets/clinic_icon.jpg?enhanced&format=webp"

  import Like     from "$ui-kit/icons/Like.svelte"
  import Phone    from "$ui-kit/icons/Phone.svelte"
  import Address  from "$ui-kit/icons/Address.svelte"
  import Metro    from "$ui-kit/icons/Metro.svelte"
  import Button   from "$ui-kit/Button/Button.svelte"

  function unlike() {
      console.log('Unlike')
  }
</script>

<div class="wrapper favorite_clinic_card">
  <div class="top_info_container">
    <div class="thumbnail">
      <img src={ThumbnailImg.img.src} alt="">
      <button class="favorite_icon" onclick={unlike}>
        <Like size="sm"/>
      </button>
    </div>
    <div>
      <img class="clinic_icon" src={ClinicIconImg.img.src} alt="">
      <h1 class="title title-1">Университетская клиника неврологии</h1>

      <div class="address">
        <h6 class="title-3">Адрес:</h6>
        <div class="body-text-2">
          <Address type="primary"/>
          Москва, Федеративный проспект, 9 к1
        </div>
        <div class="body-text-2">
          <Metro type="primary"/>
          <span>Новогиреево (Калининская линия) (800 м)</span>
        </div>
        <h6 class="title-3">Телефон:</h6>
        <div class="body-text-2">
          <Phone type="primary"/>
          +7 926 115-17-10
        </div>
      </div>
    </div>
  </div>

</div>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .clinic_icon {
    width: 40px;
    height: 40px;
  }

  .wrapper {
    flex-grow: 1;
  }

  .title {
    font-size: 24px;
    line-height: 36px;

    margin-top: 8px;

    @media (max-width: (map.get(env.$screen-size, tablet) + 1px)) {
      font-size: 18px;
      line-height: 27px;
    }
  }

  .thumbnail {
    position: relative;
    flex-shrink: 0;
    width: 110px;
    height: 110px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 12px;

      object-fit: cover;
    }

    .favorite_icon {
      position: absolute;
      background: none;
      border: none;

      top: 8px;
      left: 8px;

      cursor: pointer;
    }
  }

  .address {
    display: flex;
    flex-direction: column;
    gap: 8px;

    padding-top: 1rem;

    > * {
      line-height: 27px;
    }

    > h6 {
      line-height: 24px;
    }


    > div {
      display: flex;
      align-items: center;
      gap: 8px;

      > span {
        display: flex;
        align-items: center;

        &::before {
          position: relative;
          bottom: 1px;
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 100%;

          flex-shrink: 0;
          background-color: #FFC61A;

          font-size: 1.75rem;

          margin-right: 8px;
        }
      }
    }

    > span {
      padding-top: .5rem;
    }

    :global {
      .svg-icon-container {
        --size: 16px;
      }
    }
  }

  :global {
    .favorite_clinic_card {
      .favorite_icon .svg-icon-container svg{
        fill: red;
      }

      .favorite_icon .svg-icon-container {
        --color: #FF3B30;
      }
    }
  }

  .top_info_container {
    display: flex;
    gap: 16px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      flex-direction: column;
    }
  }

  .rating-container {
    display: flex;
    gap: 8px;
    margin-top: 8px;
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 4px;

    font-weight: 600;
  }

  .reviews {
    text-decoration: underline;
    font-weight: 600;

    opacity: .5;

    @media (min-width: (map.get(env.$screen-size, tablet) + 1px)) {
      transition: opacity 300ms;

      &:hover {
        opacity: 1;
      }
    }
  }

  .bottom_info_container {
    margin-top: 16px;
  }

  .submit-btn {
    margin-top: 32px;
  }
</style>