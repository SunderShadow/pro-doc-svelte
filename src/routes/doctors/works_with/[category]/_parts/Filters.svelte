<script lang="ts">
  import Select from "$ui-kit/Form/Select/Select.svelte"
  import Button from "$ui-kit/Button/Button.svelte"
  import Input from "$ui-kit/Form/Input.svelte"
  import Checkbox from "$ui-kit/Form/Checkbox/Checkbox.svelte"
  import FilterForm from "$lib/components/FilterForm/FilterForm.svelte"
  import Radio from "$ui-kit/Form/Radio/Radio.svelte";

  let specialityItems = [
      {
          color: '#82C0C0',
          title: 'Специальность 1',
          value: 'speciality_1'
      },
      {
          color: '#FFCB31',
          title: 'Специальность 2',
          value: 'speciality_2'
      },
      {
          color: '#FFABB2',
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

<FilterForm id="doctor_filters" bind:open bind:close>
  <div>
    <Select placeholder="Специализация" data={specialityItems} withErase={false}/>
    <Input placeholder="Город, округ, район, метро" withErase={false}/>
    <Input placeholder="ФИО врача" withErase={false} />
  </div>

  <div>
    <Checkbox label="Есть онлайн-запись"/>
    <Checkbox label="Приём в клинике"/>
    <Checkbox label="Вызов врача на дом"/>
    <Checkbox label="Онлайн-консультация"/>
    <Checkbox label="Врачи с рейтингом от 4 звёзд"/>
  </div>

  <div>
    <div class="title-3">Пол врача</div>
    <div><Checkbox label="Мужской"/></div>
    <div><Checkbox label="Женский"/></div>
  </div>

  <div>
    <div class="title-3">Дата записи</div>
    <Checkbox label="Сегодня 21 фев, Пт"/>
    <Checkbox label="Завтра 22 фев, Сб"/>
    <Checkbox label="Послезавтра 23 дек, Вс"/>
  </div>

  <div>
    <div class="title-3">Категория</div>
    <Checkbox label="Высшая категория"/>
    <Checkbox label="Первая категория"/>
    <Checkbox label="Вторая категория"/>
  </div>

  <div>
    <div class="title-3">Степень</div>
    <Checkbox label="Кандидат наук"/>
    <Checkbox label="Профессор, доктор наук"/>
    <Checkbox label="Доктор наук"/>
  </div>

  <div>
    <div class="title-3">Звание</div>
    <Checkbox label="Профессор"/>
    <Checkbox label="Доцент"/>
  </div>

  <div>
    <div class="title-3">Время записи</div>
    <Checkbox label="Утро с 6:00 до 11:00"/>
    <Checkbox label="День с 11:00 до 18:00"/>
    <Checkbox label="Вечер с 17:00 до 24:00"/>
  </div>

  <div>
    <div class="title-3">Стаж</div>
    <Checkbox label="Любой"/>
    <Checkbox label="от 5 лет"/>
    <Checkbox label="от 10 лет"/>
    <Checkbox label="от 15 лет"/>
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
    <div class="title-3">Место</div>
    <Checkbox label="Любой"/>
    <Checkbox label="Ленинский округ"/>
    <Checkbox label="Октябрьский округ"/>
    <Checkbox label="Советский округ"/>
  </div>

  <div>
    <div class="title-3">Клиника</div>
    <Checkbox label="Частная"/>
    <Checkbox label="Государственная"/>
  </div>

  <div class="submit">
    <Button type="submit" fullWidth>Применить</Button>
    <Button fullWidth outline>Сбросить</Button>
  </div>
</FilterForm>

<style lang="scss">
  .submit {
      margin-top: 32px;
  }
</style>