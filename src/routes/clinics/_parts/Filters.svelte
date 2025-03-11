<script lang="ts">
  import Select from "$ui-kit/Form/Select/Select.svelte"
  import Button from "$ui-kit/Button/Button.svelte"
  import Input from "$ui-kit/Form/Input.svelte"
  import Checkbox from "$ui-kit/Form/Checkbox/Checkbox.svelte"
  import FilterForm from "$lib/components/FilterForm/FilterForm.svelte"
  import Radio from "$ui-kit/Form/Radio/Radio.svelte";

  let categoryItems = [
      {
          title: 'Категория 1',
          value: 'category_1'
      },
      {
          title: 'Категория 2',
          value: 'category_2'
      },
      {
          title: 'Категория 3',
          value: 'category_3'
      }
  ]

  let specialityItems = [
      {
          title: 'Специальность 1',
          value: 'speciality_1'
      },
      {
          title: 'Специальность 2',
          value: 'speciality_2'
      },
      {
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
  }: Props = $props()


  let discount = $state()
</script>

<FilterForm bind:open bind:close>
  <div>
    <Select placeholder="Категория клиники" data={categoryItems} withErase={false}/>
    <Select placeholder="Специализация врача" data={specialityItems} withErase={false}/>
    <Input placeholder="Город, округ, район, метро" withErase={false}/>
    <Input placeholder="ФИО врача" withErase={false}/>
  </div>
  <div>
    <Checkbox label="Есть онлайн запись"/>
    <Checkbox label="Вызов врача на дом"/>
    <Checkbox label="Онлайн-консультация"/>
    <Checkbox label="Врачи с рейтингом от 4х звезд"/>
  </div>
  <div>
    <div class="title-3">Дата записи</div>
    <Checkbox label="Сегодня 12 дек, Пн"/>
    <Checkbox label="Завтра 13 дек, Вт"/>
    <Checkbox label="Послезавтра 14 дек, Ср"/>
    <Checkbox label="Выходные 17 дек, Сб - 18 дек, Вс"/>
  </div>
  <div>
    <div class="title-3">Время записи</div>
    <Checkbox label="Утро с 6:00 до 11:00"/>
    <Checkbox label="День с 11:00 до 17:00"/>
    <Checkbox label="Вечер с 17:00 до 24:00"/>
  </div>
  <div>
    <div class="title-3">Цена</div>
    <div class="inline">
      <Input placeholder="от 800 ₽" withErase={false}/>
      <Input placeholder="до 1500 ₽" withErase={false}/>
    </div>
  </div>
  <div>
    <div class="title-3">Скидки</div>
    <Radio bind:group={discount} name="discount" value="10" label="от 10% и выше"/>
    <Radio bind:group={discount} name="discount" value="30" label="от 30% и выше"/>
    <Radio bind:group={discount} name="discount" value="50" label="от 50% и выше"/>
    <Radio bind:group={discount} name="discount" value="70" label="от 70% и выше"/>
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