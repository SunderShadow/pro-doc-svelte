<script lang="ts">
  import SvgContainer from "$ui-kit/SvgContainer/SvgContainer.svelte";

  type Props = {
      beforeToday?: boolean
      value: Date
  }

  let {
      beforeToday = false,
      value = $bindable()
  }: Props = $props()

  let monthTranslate = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
  ]


  let viewDate = $state.raw(new Date())


  let year        = $state(0),
      month       = $state(''),
      day         = $state(0),
      daysTotal   = $state(0),
      daysOffset  = $state(0)

  $effect(() => {
      year = viewDate.getFullYear()
      month = monthTranslate[viewDate.getUTCMonth()]
      day = viewDate.getDay()

      let tmp = new Date(viewDate)
      tmp.setMonth(tmp.getMonth() + 1)
      tmp.setDate(0)

      daysTotal = tmp.getDate()

      tmp.setUTCDate(1)
      daysOffset = tmp.getUTCDay()
  })

  function goPrevMonth() {
      if (!canGoPrevMonth()) {
          return
      }

      let dateNew = new Date(viewDate);
      dateNew.setMonth(viewDate.getMonth() - 1)
      viewDate = dateNew
  }

  function goNextMonth() {
      if (!canGoNextMonth()) {
          return
      }

      let dateNew = new Date(viewDate);
      dateNew.setMonth(viewDate.getMonth() + 1)
      viewDate = dateNew
  }

  function canGoPrevMonth() {
      let todayDate = new Date()
      return viewDate.getFullYear() > todayDate.getFullYear()
          || (
            viewDate.getFullYear() === todayDate.getFullYear()
            && viewDate.getMonth() > todayDate.getMonth()
          )
  }

  function canGoNextMonth() {
      return true
  }

  function selectDate(day: number): void {
      let tmpDate = new Date(viewDate)
      tmpDate.setDate(day)
      value = tmpDate
  }

  function isDaySelected(day: number): boolean {
      return viewDate.getMonth() === value?.getMonth()
          && value?.getDate() === day
  }

  function earlierThanToday(day: number): boolean {
      let todayDate = new Date()

      return viewDate.getFullYear() < todayDate.getFullYear()
          || (
              viewDate.getFullYear() == todayDate.getMonth()
              && (
                  viewDate.getMonth() < todayDate.getMonth()
                  || (
                      viewDate.getMonth() == todayDate.getMonth()
                      && day < todayDate.getDate()
                  )
              )
          )
  }

  function canBeSelected(day: number): boolean {
      return !earlierThanToday(day)
  }
</script>

<div class="date_picker">
  <div class="months_controller">
    <span class="title-3">{month} {year}</span>
    <div class="buttons">
      <button class:disabled={!canGoPrevMonth()} onclick={goPrevMonth}>
        <SvgContainer type="primary">
          <svg class="fill-only" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.02422 12.0008C9.02422 11.8674 9.04922 11.7384 9.09922 11.6138C9.14922 11.4884 9.21589 11.3841 9.29922 11.3008L13.8992 6.70078C14.0826 6.51745 14.3159 6.42578 14.5992 6.42578C14.8826 6.42578 15.1159 6.51745 15.2992 6.70078C15.4826 6.88411 15.5742 7.11745 15.5742 7.40078C15.5742 7.68411 15.4826 7.91745 15.2992 8.10078L11.3992 12.0008L15.2992 15.9008C15.4826 16.0841 15.5742 16.3174 15.5742 16.6008C15.5742 16.8841 15.4826 17.1174 15.2992 17.3008C15.1159 17.4841 14.8826 17.5758 14.5992 17.5758C14.3159 17.5758 14.0826 17.4841 13.8992 17.3008L9.29922 12.7008C9.19922 12.6008 9.12855 12.4924 9.08722 12.3758C9.04522 12.2591 9.02422 12.1341 9.02422 12.0008Z" />
          </svg>
        </SvgContainer>
      </button>
      <button class:disabled={!canGoNextMonth()} onclick={goNextMonth}>
        <SvgContainer type="primary">
          <svg class="fill-only" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.9758 11.9992C15.9758 12.1326 15.9508 12.2616 15.9008 12.3862C15.8508 12.5116 15.7841 12.6159 15.7008 12.6992L11.1008 17.2992C10.9174 17.4826 10.6841 17.5742 10.4008 17.5742C10.1174 17.5742 9.88411 17.4826 9.70078 17.2992C9.51745 17.1159 9.42578 16.8826 9.42578 16.5992C9.42578 16.3159 9.51745 16.0826 9.70078 15.8992L13.6008 11.9992L9.70078 8.09922C9.51745 7.91589 9.42578 7.68255 9.42578 7.39922C9.42578 7.11588 9.51745 6.88255 9.70078 6.69922C9.88411 6.51589 10.1174 6.42422 10.4008 6.42422C10.6841 6.42422 10.9174 6.51589 11.1008 6.69922L15.7008 11.2992C15.8008 11.3992 15.8714 11.5076 15.9128 11.6242C15.9548 11.7409 15.9758 11.8659 15.9758 11.9992Z" />
          </svg>
        </SvgContainer>
      </button>
    </div>
  </div>

  <div class="week_days" style:--days-offset={daysOffset}>
    <div class="title-3">Пн</div>
    <div class="title-3">Вт</div>
    <div class="title-3">Ср</div>
    <div class="title-3">Чт</div>
    <div class="title-3">Пт</div>
    <div class="title-3">Сб</div>
    <div class="title-3">Вс</div>

    {#each Array(daysTotal) as day, i}
      {@const dayNum = i + 1}
      <button
          class="title-3"
          class:active={isDaySelected(dayNum)}
          class:disabled={!canBeSelected(dayNum)}
          onclick={() => {if (canBeSelected(dayNum)) selectDate(dayNum) }}>{dayNum}</button>
    {/each}
  </div>
</div>

<style lang="scss">
  @use "sass:map";
  @use "env";
  @use "$ui-kit/env" as global-env;

  button {
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    cursor: pointer;
  }

  .date_picker {
    width: fit-content;
  }

  .months_controller {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .buttons {
      display: flex;
      gap: 8px;

      button.disabled {
        opacity: .5;
        user-select: none;
        cursor: default;
      }
    }
  }

  .months_controller + .week_days {
    margin-top: 8px;
  }

  .week_days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    @media (min-width: (map.get(global-env.$screen-size, tablet) + 1px)) {
      gap: 0 20px;
    }

    > *:nth-child(8) {
      grid-column: var(--days-offset);
    }

    > * {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 32px;
      height: 32px;

      border-radius: 100em;

      user-select: none;
      cursor: default;
    }

    > button {
      cursor: pointer;

      transition-property: background-color, color;
      transition-duration: 300ms;

      &:hover {
        background-color: env.$color-bg-hover;
        color: env.$color-text-hover;
      }

      &.active {
        background-color: env.$color-bg-active;
        color: env.$color-text-active;
      }

      &.disabled {
        opacity: .5;
        user-select: none;
        cursor: default;

        background: none;
        color: inherit;
      }
    }
  }
</style>