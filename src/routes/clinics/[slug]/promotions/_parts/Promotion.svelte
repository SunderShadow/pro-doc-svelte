<script lang="ts">
    import Phone from "$ui-kit/icons/Phone.svelte"
    import Metro from "$ui-kit/icons/Metro.svelte"
    import Address from "$ui-kit/icons/Address.svelte"
    import Button from "$ui-kit/Button/Button.svelte"

    type Props = {
        thumbnail: string
    }

    let {
        thumbnail
    }: Props = $props()

    let screenWidth = $state(0)
</script>

<svelte:window bind:innerWidth={screenWidth}></svelte:window>
<article>
  <div class="thumbnail">
    <div class="discount">Скидка 40%</div>
    <img src={thumbnail} alt="">
  </div>
  <div class="content">
    <div class="badge">До 31 марта</div>

    <h1>Скидка 40% на приемы врачей</h1>

    <div class="body-text-2">
      <p>Скидка 40% на первичный приём всех специалистов для пациентов, впервые обратившихся в отделение.</p>
      <p>Не распространяется на на стоматологов, психиатров, психотерапевтов, психологов, мануальных терапевтов (кроме Шоха Д.В. и Викулова К.В. — данные специалисты участвуют в акции), остеопатов, зав. отд. эндокринологии и диетологии Плещёвой А.В., зав. отделения терапии Сафиной А.З., глав врача на Арбате Духина А.О., терапевта/нефролога Бердниковой О.А., невролога/рефлексотерапевта Нетесова Е.В., глав. врача клиники на Бабушкинской терапевта/пульмонолога Венюкову Е.И., невролога Плужникову М.Н., нейрохирурга Левченко С.К.</p>
      <p>Не суммируется с другими предложениями и акциями, включая абонементы и программы.</p>
    </div>

    <div class="location">
      <h2 class="title-2">Университетской клиники неврологии</h2>

      <div class="address">
        <div class="body-text-2">
          <Address type="primary"/>
          г Москва, ул Миклухо-Маклая, д 43</div>
        <div class="body-text-2">
          <Metro type="primary"/>
          <span>Беляево (400 м)</span></div>
        <div class="body-text-2">
          <Phone type="primary"/>
          +7 930 999-17-56
        </div>
      </div>

      <div class="appointment_btn">
        <Button fullWidth={screenWidth <= 1024}>Записатся на прием</Button>
      </div>
    </div>
  </div>
</article>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  $netbook-breakpoint: 1100px;
  
  article {
    display: flex;
    gap: 16px;

    padding: 32px;
    border: 1px solid rgba(map.get(env.$color, primary), .1);
    border-radius: 12px;

    @media (max-width: $netbook-breakpoint) {
      flex-direction: column;
      padding: 24px;
    }

    @media (max-width: 360px) {
      flex-direction: column;
      padding: 16px;
    }
  }

  .thumbnail {
    position: relative;

    aspect-ratio: 350 / 250;
    width: 350px;
    max-height: 250px;
    flex-shrink: 0;

    @media (max-width: $netbook-breakpoint) {
      aspect-ratio: 640 / 250;
      width: 100%;
    }

    @media (max-width: map.get(env.$screen-size, mobile)) {
      aspect-ratio: 280 / 250;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
    }

    .discount {
      position: absolute;
      top: 16px;
      left: 16px;
      line-height: 30px;
      background-color: #FF3B30;

      border-radius: 5px;
      text-transform: uppercase;
      font-weight: 700;
      padding: 8px 12px;
      color: #fff;

      @media (max-width: map.get(env.$screen-size, tablet)) {
        font-size: 14px;
        padding: 4px 8px;
      }
    }
  }

  h1 {
    margin: 16px 0;
    font-size: 32px;

    @media (max-width: $netbook-breakpoint) {
      font-size: 24px;
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      font-size: 18px;
    }
  }

  p + p {
    margin-top: 16px;
  }

  .badge {
    width: fit-content;

    padding: 4px 8px;

    font-weight: 600;
    font-size: 14px;

    border-radius: 8px;
    background-color: rgba(map.get(env.$color, primary), .1);
    color: map.get(env.$color, primary);
  }

  .location {
    margin-top: 32px;

    h2 {
      margin-bottom: 16px;
    }
  }

  .address {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .body-text-2 {
      color: #000;
    }

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
          top: 1px;

          content: "";
          width: 8px;
          height: 8px;
          border-radius: 100%;

          background-color: rgba(#F28B24FF, .9);

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

  .appointment_btn {
    margin-top: 32px;
  }
</style>