<script lang="ts">
import TableItem from "../_parts/TableItem.svelte"
import Link from "$ui-kit/Link/Link.svelte";

let screenSize = $state(0)
</script>

<svelte:window bind:innerWidth={screenSize}/>
<table>
  <thead class="header">
  <tr>
    <th colspan="2">Аллергология</th>
    <th style="text-align: right">Цена</th>
  </tr>
  </thead>
  <tbody>
    <TableItem title="Иммунологическое обследование" cost="2 600" />
    <TableItem title="Иммунограмма" cost="4 000" />
    <TableItem title="Циркулирующие иммунные комплексы" cost="2 600" />
  </tbody>
</table>

<table>
  <thead class="header">
  <tr>
    <th colspan="2">Анализы</th>
    <th style="text-align: right">Цена</th>
  </tr>
  </thead>
  <tbody>
    <TableItem title="Анализ крови" cost="2 600" />
    <TableItem title="АЛТ анализ крови" cost="4 000" />
    <TableItem title="Анализ АЦЦП" cost="2 600" />
  </tbody>
</table>

<table>
  <thead class="header">
  <tr>
    <th colspan="2">Инфектология</th>
    <th style="text-align: right">Цена</th>
  </tr>
  </thead>
  <tbody>
    <TableItem title="Анализ на коронавирус" cost="2 600" />
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