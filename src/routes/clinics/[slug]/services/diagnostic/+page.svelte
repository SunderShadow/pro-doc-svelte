<script lang="ts">
import TableItem from "../_parts/TableItem.svelte"
import Link from "$ui-kit/Link/Link.svelte";

let screenSize = $state(0)
</script>

<svelte:window bind:innerWidth={screenSize}/>
<table>
  <thead class="header">
  <tr>
    <th colspan="2">УЗИ</th>
    <th style="text-align: right">Цена</th>
  </tr>
  </thead>
  <tbody>
    <TableItem title="УЗИ брюшной полости" cost="2 600" />
    <TableItem title="УЗИ всех органов" cost="4 000" />
    <TableItem title="УЗИ желудка" cost="2 600" />
  </tbody>
</table>

<table>
  <thead class="header">
  <tr>
    <th colspan="2">Функциональная диагностика</th>
    <th style="text-align: right">Цена</th>
  </tr>
  </thead>
  <tbody>
    <TableItem title="ЭКГ (кардиограмма)" cost="2 600" />
  </tbody>
  <tfoot>
  <tr>
    <td colspan="3">
      <Link href="" primary>Смотреть ещё</Link>
    </td>
  </tr>
  </tfoot>
</table>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  table + table {
    margin-top: 32px;
  }

  table {
    th:first-child {
      text-align: left;
    }

    th:last-child {
      @media (min-width: (map.get(env.$screen-size, mobile) + 1px)) {
        text-align: right;
      }
      width: 100%;
    }

    thead th {
      padding-bottom: 16px;
      font-size: 32px;

      @media (max-width: map.get(env.$screen-size, netbook)) {
        font-size: 18px
      }
    }

    tfoot {
      tr:last-child td:first-child {
        border-top: 1px solid rgba(map.get(env.$color, primary), .1);
        padding-top: 24px;
        padding-bottom: 8px;
        justify-content: flex-start;
      }
    }
  }
</style>