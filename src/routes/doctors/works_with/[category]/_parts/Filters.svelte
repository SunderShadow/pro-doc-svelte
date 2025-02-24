<script lang="ts">
  import Select from "$ui-kit/Form/Select/Colors.svelte"
  import Button from "$ui-kit/Button/Button.svelte"
  import Input from "$ui-kit/Form/Input.svelte"
  import Checkbox from "$ui-kit/Form/Checkbox/Checkbox.svelte"
  import FilterForm from "$lib/components/FilterForm/FilterForm.svelte"

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
  } = $props()

</script>

<FilterForm bind:open bind:close>
  <div>
    <div><Select placeholder="Специализация" data={specialityItems}/></div>
    <div><Input placeholder="Город, округ, район, метро" withErase={false}/></div>
    <div><Input placeholder="ФИО врача" withErase={false} /></div>
  </div>

  <div>
    <div><Checkbox label="Есть онлайн-запись"/></div>
    <div><Checkbox label="Приём в клинике"/></div>
    <div><Checkbox label="Вызов врача на дом"/></div>
    <div><Checkbox label="Онлайн-консультация"/></div>
    <div><Checkbox label="Врачи с рейтингом от 4 звёзд"/></div>
  </div>

  <div>
    <div class="title-3">Пол врача</div>
    <div><Checkbox label="Мужской"/></div>
    <div><Checkbox label="Женский"/></div>
  </div>

  <div>
    <div class="title-3">Дата записи</div>
    <div><Checkbox label="Сегодня 21 фев, Пт"/></div>
    <div><Checkbox label="Завтра 22 фев, Сб"/></div>
    <div><Checkbox label="Послезавтра 23 дек, Вс"/></div>
  </div>

  <div>
    <div class="title-3">Категория</div>
    <div><Checkbox label="Высшая категория"/></div>
    <div><Checkbox label="Первая категория"/></div>
    <div><Checkbox label="Вторая категория"/></div>
  </div>

  <div>
    <div class="title-3">Степень</div>
    <div><Checkbox label="Кандидат наук"/></div>
    <div><Checkbox label="Профессор, доктор наук"/></div>
    <div><Checkbox label="Доктор наук"/></div>
  </div>

  <div>
    <div class="title-3">Звание</div>
    <div><Checkbox label="Профессор"/></div>
    <div><Checkbox label="Доцент"/></div>
  </div>

  <div>
    <div class="title-3">Время записи</div>
    <div><Checkbox label="Утро с 6:00 до 11:00"/></div>
    <div><Checkbox label="День с 11:00 до 18:00"/></div>
    <div><Checkbox label="Вечер с 17:00 до 24:00"/></div>
  </div>

  <div>
    <div class="title-3">Стаж</div>
    <div><Checkbox label="Любой"/></div>
    <div><Checkbox label="от 5 лет"/></div>
    <div><Checkbox label="от 10 лет"/></div>
    <div><Checkbox label="от 15 лет"/></div>
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
    <div><Checkbox label="Любой"/></div>
    <div><Checkbox label="от 5 лет"/></div>
    <div><Checkbox label="от 10 лет"/></div>
    <div><Checkbox label="от 15 лет"/></div>
  </div>

  <div>
    <div class="title-3">Место</div>
    <div><Checkbox label="Любой"/></div>
    <div><Checkbox label="Ленинский округ"/></div>
    <div><Checkbox label="Октябрьский округ"/></div>
    <div><Checkbox label="Советский округ"/></div>
  </div>

  <div>
    <div class="title-3">Клиника</div>
    <div><Checkbox label="Частная"/></div>
    <div><Checkbox label="Государственная"/></div>
  </div>

  <div class="submit">
    <Button fullWidth>Применить</Button>
    <Button fullWidth outline>Сбросить</Button>
  </div>
</FilterForm>

<style>
  .submit {
      margin-top: 32px;
  }
</style>