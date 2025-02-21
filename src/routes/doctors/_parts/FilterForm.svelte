<script lang="ts">
import Input from "$ui-kit/Form/Input.svelte";
import Select from "$ui-kit/Form/Select/Colors.svelte"
import Checkbox from "$ui-kit/Form/Checkbox/Checkbox.svelte";
import Button from "$ui-kit/Button/Button.svelte";
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
</script>

<aside class="filters">
  <div>
    <div><Select placeholder="Специализация" data={specialityItems}/></div>
    <div><Input placeholder="Город, округ, район, метро" /></div>
    <div><Input placeholder="ФИО врача" /></div>
  </div>

  <div>
    <div><Checkbox label="Есть онлайн-запись"/></div>
    <div><Checkbox label="Приём в клинике"/></div>
    <div><Checkbox label="Вызов врача на дом"/></div>
    <div><Checkbox label="Онлайн-консультация"/></div>
    <div><Checkbox label="Врачи с рейтингом от 4 звёзд"/></div>
  </div>

  <div>
    <div class="title-1">Пол врача</div>
    <div><Checkbox label="Мужской"/></div>
    <div><Checkbox label="Женский"/></div>
  </div>

  <div>
    <div class="title-1">Дата записи</div>
    <div><Checkbox label="Сегодня 21 фев, Пт"/></div>
    <div><Checkbox label="Завтра 22 фев, Сб"/></div>
    <div><Checkbox label="Послезавтра 23 дек, Вс"/></div>
  </div>

  <div>
    <div class="title-1">Категория</div>
    <div><Checkbox label="Высшая категория"/></div>
    <div><Checkbox label="Первая категория"/></div>
    <div><Checkbox label="Вторая категория"/></div>
  </div>

  <div>
    <div class="title-1">Степень</div>
    <div><Checkbox label="Кандидат наук"/></div>
    <div><Checkbox label="Профессор, доктор наук"/></div>
    <div><Checkbox label="Доктор наук"/></div>
  </div>

  <div>
    <div class="title-1">Звание</div>
    <div><Checkbox label="Профессор"/></div>
    <div><Checkbox label="Доцент"/></div>
  </div>

  <div>
    <div class="title-1">Время записи</div>
    <div><Checkbox label="Утро с 6:00 до 11:00"/></div>
    <div><Checkbox label="День с 11:00 до 18:00"/></div>
    <div><Checkbox label="Вечер с 17:00 до 24:00"/></div>
  </div>

  <div>
    <div class="title-1">Стаж</div>
    <div><Checkbox label="Любой"/></div>
    <div><Checkbox label="от 5 лет"/></div>
    <div><Checkbox label="от 10 лет"/></div>
    <div><Checkbox label="от 15 лет"/></div>
  </div>

  <div>
    <div class="title-1">Цена</div>
    <div class="inline">
      <Input placeholder="от 800 ₽" />
      <Input placeholder="до 1500 ₽"/>
    </div>
  </div>

  <div>
    <div class="title-1">Скидки</div>
    <div><Checkbox label="Любой"/></div>
    <div><Checkbox label="от 5 лет"/></div>
    <div><Checkbox label="от 10 лет"/></div>
    <div><Checkbox label="от 15 лет"/></div>
  </div>

  <div>
    <div class="title-1">Место</div>
    <div><Checkbox label="Любой"/></div>
    <div><Checkbox label="Ленинский округ"/></div>
    <div><Checkbox label="Октябрьский округ"/></div>
    <div><Checkbox label="Советский округ"/></div>
  </div>

  <div>
    <div class="title-1">Клиника</div>
    <div><Checkbox label="Частная"/></div>
    <div><Checkbox label="Государственная"/></div>
  </div>

  <div class="submit">
    <Button fullWidth>Применить</Button>
    <Button fullWidth outline>Сбросить</Button>
  </div>
</aside>

<style lang="scss">
  :global {
    .filters input {
      font-size: 14px;
    }
  }
  .filters {
    > div + div {
      margin-top: 16px;
    }

    > div > div + div {
      margin-top: 8px;
    }

    .inline {
      display: flex;
      gap: 8px;
    }

    .submit {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
</style>