<script lang="ts">

    import Link from "$ui-kit/Link/Link.svelte";
    import Address from "$ui-kit/icons/Address.svelte";
    import Metro from "$ui-kit/icons/Metro.svelte";
    import Phone from "$ui-kit/icons/Phone.svelte";
    import DatePicker from "$ui-kit/Form/DatePicker/DatePicker.svelte";
    import Button from "$ui-kit/Button/Button.svelte";
    import SvgContainer from "$ui-kit/SvgContainer/SvgContainer.svelte";
</script>

<div class="timetable-container">
  <h5 class="title-2">Места работы</h5>
  <div class="address">
    <h6 class="title-3">МедЦентрСервис на Миклухо-Маклая</h6>
    <p class="body-text-2">
    <Address type="primary"/>
    г Москва, ул Миклухо-Маклая, д 43</p>
    <p class="body-text-2">
      <Metro type="primary"/>
      <span>Беляево (400 м)</span></p>
    <p class="body-text-2">
      <Phone type="primary"/>
      +7 930 999-17-56
    </p>
    <span><Link href="">Узнать подробнее о клинике</Link></span>
  </div>
  <div class="address">
    <h6 class="title-3">МедЦентрСервис на Миклухо-Маклая</h6>
    <p class="body-text-2">
    <Address type="primary"/>
    г Москва, ул Миклухо-Маклая, д 43</p>
    <p class="body-text-2">
      <Metro type="primary"/>
      <span>Беляево (400 м)</span></p>
    <p class="body-text-2">
      <Phone type="primary"/>
      +7 930 999-17-56
    </p>
    <span><Link href="">Узнать подробнее о клинике</Link></span>
  </div>
  <div class="sign-up">
    <div class="datepicker">
      <h5 class="title-2">Запись на приём</h5>
      <DatePicker/>
    </div>
    <div class="timepicker">
      <div>
        <h5 class="title-2">Выберете время на 15 декабря</h5>
        <div class="timepicker-buttons">
          <button>
            <SvgContainer type="primary" size="sm">
              <svg class="fill-only" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.02422 12.0008C9.02422 11.8674 9.04922 11.7384 9.09922 11.6138C9.14922 11.4884 9.21589 11.3841 9.29922 11.3008L13.8992 6.70078C14.0826 6.51745 14.3159 6.42578 14.5992 6.42578C14.8826 6.42578 15.1159 6.51745 15.2992 6.70078C15.4826 6.88411 15.5742 7.11745 15.5742 7.40078C15.5742 7.68411 15.4826 7.91745 15.2992 8.10078L11.3992 12.0008L15.2992 15.9008C15.4826 16.0841 15.5742 16.3174 15.5742 16.6008C15.5742 16.8841 15.4826 17.1174 15.2992 17.3008C15.1159 17.4841 14.8826 17.5758 14.5992 17.5758C14.3159 17.5758 14.0826 17.4841 13.8992 17.3008L9.29922 12.7008C9.19922 12.6008 9.12855 12.4924 9.08722 12.3758C9.04522 12.2591 9.02422 12.1341 9.02422 12.0008Z"/>
              </svg>
            </SvgContainer>
          </button>
          <button>
            <SvgContainer type="primary" size="sm">
              <svg class="fill-only" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.9758 11.9992C15.9758 12.1326 15.9508 12.2616 15.9008 12.3862C15.8508 12.5116 15.7841 12.6159 15.7008 12.6992L11.1008 17.2992C10.9174 17.4826 10.6841 17.5742 10.4008 17.5742C10.1174 17.5742 9.88411 17.4826 9.70078 17.2992C9.51745 17.1159 9.42578 16.8826 9.42578 16.5992C9.42578 16.3159 9.51745 16.0826 9.70078 15.8992L13.6008 11.9992L9.70078 8.09922C9.51745 7.91589 9.42578 7.68255 9.42578 7.39922C9.42578 7.11588 9.51745 6.88255 9.70078 6.69922C9.88411 6.51589 10.1174 6.42422 10.4008 6.42422C10.6841 6.42422 10.9174 6.51589 11.1008 6.69922L15.7008 11.2992C15.8008 11.3992 15.8714 11.5076 15.9128 11.6242C15.9548 11.7409 15.9758 11.8659 15.9758 11.9992Z"/>
              </svg>
            </SvgContainer>
          </button>
        </div>
      </div>
      <div class="time-button">
        <Button>9:00</Button>
        <Button>9:30</Button>
        <Button>10:30</Button>
        <Button>11:00</Button>
        <Button>11:30</Button>
        <Button>12:00</Button>
        <Button>12:30</Button>
        <Button>13:00</Button>
        <Button>13:30</Button>
        <Button>14:00</Button>
      </div>
    </div>
  </div>
  <div class="appointment">
    <div class="appointment-stat">Записалось 22 человека</div>
    <Button>Записаться на приём</Button>
    <p class="body-text-3">Клиника перезвонит в течение <span class="body-text-3">10 минут</span></p>
  </div>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  $ellipseColor: #F28B24;

  .timetable-container {
    > h5 {
      line-height: 27px;
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

      > p {
        display: flex;
        align-items: center;
        gap: 8px;

        > span {
          display: flex;
          align-items: center;

          &::before {
            content: "";
            width: 8px;
            height: 8px;
            border-radius: 100%;

            background-color: $ellipseColor;

            font-size: 1.75rem;

            margin-right: 4px;
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

    .sign-up {
      @media (max-width: map.get(env.$screen-size, tablet)) {
        width: 385px;
      }

      @media (max-width: map.get(env.$screen-size, mobile)) {
        width: 295px;
      }
    }

    .datepicker {
      display: flex;
      flex-direction: column;
      gap: 16px;

      margin-top: 32px;

      :global {
        .date_picker {
          width: 100%;
        }
      }
    }

    .timepicker {
      margin-top: 32px;

      > div {
        display: flex;
        align-items: center;

        > h5 {
          font-size: 18px;
        }

        .timepicker-buttons {
          display: flex;
          gap: 8px;

          margin-left: auto;

          > button {
            background: none;
            padding: 0;
            margin: 0;
            border: none;
            cursor: pointer;
          }
        }
      }

      .time-button {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 16px;

        margin-top: 16px;

        overflow-x: scroll;

        :global {
          > button {
            padding: .75rem .5rem;
            line-height: 1em;
          }
        }
      }
    }

    .appointment {
      display: flex;
      flex-direction: column;
      gap: 16px;

      padding-top: 2rem;

      &-stat {
        text-align: center;
        line-height: 22.4px;

        margin-bottom: 16px;
        padding: .75rem .5rem;

        font-weight: 600;

        width: 100%;

        background-color: rgba(map.get(env.$color, primary), 0.1);
        border-radius: 8px;
      }

      > p {
        max-width: fit-content;

        margin-left: auto;
        margin-right: auto;

        span {
          color: map.get(env.$color, primary);
        }
      }
    }
  }
</style>