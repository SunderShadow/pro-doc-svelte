<script lang="ts">
  import Select from "$ui-kit/Form/Select/Select.svelte"
  import Button from "$ui-kit/Button/Button.svelte"
  import Input from "$ui-kit/Form/Input.svelte"
  import Checkbox from "$ui-kit/Form/Checkbox/Checkbox.svelte"
  import FilterForm from "$lib/components/FilterForm/FilterForm.svelte"

  let specialityItems = [
      {
          color: '#fff',
          title: 'Специальность 1',
          value: 'speciality_1'
      },
      {
          color: '#fff',
          title: 'Специальность 2',
          value: 'speciality_2'
      },
      {
          color: '#fff',
          title: 'Специальность 3',
          value: 'speciality_3'
      }
  ]

  type Props = {
      open?: Function,
      close?: Function,
  }

  let {
      open = $bindable(),
      close = $bindable()
  } = $props()

</script>

<FilterForm bind:open bind:close>
  <div>
    <Select placeholder="Специализация" data={specialityItems}/>
    <Input placeholder="Город, округ, район, метро" />
    <Input placeholder="ФИО врача" />
  </div>

  <div>
    <div class="title-3">Клиника</div>
    <Checkbox label="Частная"/>
    <Checkbox label="Государственная"/>
  </div>

  <div class="submit">
    <Button fullWidth>Применить</Button>
    <Button fullWidth outline>Сбросить</Button>
  </div>
</FilterForm>

<style lang="scss">
  .submit {
    margin-top: 32px;
  }
</style>