<script lang="ts">
  import Template from "./Template.svelte"
  import {onMount} from "svelte";

  type Item = {
      title: string,
      value: any
  }

  type Props = any & {
      data: Array<Item>,
      value: any,
      closeOnSelect: boolean
  }

  let {
      data,
      value = $bindable(),
      closeOnSelect = true,
      ...props
  }: Props = $props()

  let close = $state();
  let open = $state()

  let selected: Item = $state()

  let search: string = $state('')

  function filter(data: Array<Item>) {
      if (search.length) {
          // TODO: add fuzy search
          return data.filter(item => item.title.includes(search))
      }

      return data
  }

  function select(item: Item) {
      selected = item
      value = item.value

      if (closeOnSelect) {
          close()
      }
  }

  function isSelected(item: Item) {
      return selected?.value === item.value
  }

  function reset() {
      value = null
      selected = null
      search = ''
  }
</script>

{#snippet dropdown()}
  <div class="dropdown">
    {#each filter(data) as item}
      <button class:selected={isSelected(item)} onclick={(e) => {e.preventDefault(); select(item)}}>
        <span class="title">{item.title}</span>
      </button>
    {/each}
  </div>
{/snippet}

<Template
    {...props}
    {dropdown}
    bind:close
    bind:open

    onErase={reset}

    value={selected?.title}
    oninput={(e) => {search = e.target.value}}
/>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

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

</style>