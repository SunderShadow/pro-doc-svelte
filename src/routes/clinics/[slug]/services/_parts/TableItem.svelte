<script lang="ts">
import Button from "$ui-kit/Button/Button.svelte"

type Props = {
    title: string,
    cost: string,
}

let {
    title,
    cost
}: Props = $props()

let screenSize = $state(0)
</script>

<svelte:window bind:innerWidth={screenSize}/>
<tr class="clinics_view_table-item">
{#if screenSize > 425}
    <td class="title">{title}</td>
    <td><span class="cost">от {cost} ₽</span></td>
    <td><Button>Записаться</Button></td>
{:else}
  <td colspan="3">
    <div class="title">{title}</div>
    <div class="cost">от {cost} ₽</div>
    <div class="button"><Button fullWidth>Записаться</Button></div>
  </td>
{/if}
</tr>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  @media (max-width: map.get(env.$screen-size, mobile)) {
    td > * + * {
      margin-top: 8px;
    }

    td .button {
      margin-top: 16px;
    }
  }

  .title {
    font-family: "Helvetica", sans-serif;
  }

  .cost {
    font-size: 18px;
    font-weight: 600;
  }

  td:first-child,
  th:first-child {
    @media (min-width: (map.get(env.$screen-size, mobile) + 1px)) {
      text-align: left;
    }
  }

  td:last-child,
  th:last-child {
    @media (min-width: (map.get(env.$screen-size, mobile) + 1px)) {
      text-align: right;
    }
    width: 100%;
  }

  thead th {
    padding-bottom: 16px;
  }

  td {
    width: 100%;
    padding: 18px 0;
  }

  tr > td:nth-child(2) {
    width: fit-content;
    white-space: nowrap;

    span {
      padding: 0 90px;

      @media (max-width: 900px) {
        padding: 0 5vw;
      }
    }
  }

  tr > td:last-child {
    margin-left: 90px;
  }

  :global {
    .clinics_view_table-item + .clinics_view_table-item > td {
      border-top: 1px solid rgba(map.get(env.$color, primary), .1);
    }
  }
</style>