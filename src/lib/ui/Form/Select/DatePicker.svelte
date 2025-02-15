<script lang="ts">
  import Template from "./Template.svelte"
  import {onMount, tick} from "svelte"
  import DatePicker from "$ui-kit/Form/DatePicker/DatePicker.svelte"

  type Props = any & {
      value: Date,
      preventClose: boolean
  }

  let {
      value = $bindable(),
      preventClose = false,
      ...props
  }: Props = $props()

  let close =   $state();
  let open = $state()

  let selected = $state('')

  $effect(() => {
      if (!value) {
          return
      }

      let day:   number|string = value.getDate()
      let month: number|string = value.getMonth()

      month = month < 10 ? '0' + month.toString() : month
      day   = day < 10 ? '0' + day.toString() : day

      selected = day + '.' + month + '.' + value.getFullYear()
  })

  let dropdownWidth = $state(-1)
  onMount(() => {
      open()
      tick().then(() => {
          close()
      })
  })
</script>

{#snippet dropdown()}
  <div class="dropdown" bind:clientWidth={dropdownWidth}>
    <div class="title-2">Запись на приём</div>
    <DatePicker bind:value/>
  </div>
{/snippet}

<div class="select_input-date_picker" style:max-width={dropdownWidth + 'px'}>
  <Template
      {...props}
      {dropdown}
      bind:close
      bind:open

      value={selected}
  />
</div>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  .dropdown {
    width: fit-content;
    padding: 1rem 1rem;
    box-sizing: border-box;

    > .title-2 {
      margin-bottom: 1rem;
    }
  }

  :global {
    .select_input-date_picker .select-input {
      display: flex;
      height: 100%;
    }

    .select_input-date_picker .select-input__dropdown {
      width: fit-content;
      min-width: 0;
      left: 0;
      transform: translateX(0);
    }
  }

  button {
    display: flex;
    align-items: center;

    gap: 1rem;
    width: 100%;

    padding: .5rem 1.5rem;
    margin: 0;

    font: inherit;
    border: none;
    background: none;

    cursor: pointer;

    &:hover {
      background-color: rgba(map.get(env.$color, primary), .1)
    }

    &.selected {
      background-color: rgba(map.get(env.$color, primary), .1)
    }
  }

  .title {
    font-weight: 600;
  }

  .color {
    --size: 8px;

    display: block;
    border-radius: 100%;

    width: var(--size);
    height: var(--size);
  }
</style>