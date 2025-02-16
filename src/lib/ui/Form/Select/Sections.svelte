<script lang="ts">
  import Template from "./Template.svelte"
  import {onMount} from "svelte";

  type Item = {
      type: string,
      title: string,
      value: any
  }

  type Section = {
      title: string,
      name: string,
      items: Array<Item>
  }

  type Props = any & {
      title: string,
      data: Array<Section>,
      value: any
  }

  type SectionSelected = {
      name: string,
      item: Item
  }

  let {
      data,
      value = $bindable(),
      ...props
  }: Props = $props()

  let close = $state();
  let open = $state()

  let selected: Array<SectionSelected> = $state([])

  let inputVisiblePart = $state('');

  function calcInputVisiblePart() {
      let tmp = ''

      for (let i = 0; i < selected.length; i++) {
          tmp += selected[i].item.title

          if (i + 1 != selected.length) {
              tmp += ', '
          }
      }

      inputVisiblePart = tmp
  }

  function filter(data: Array<Section>): Array<Section> {
      return data
  }

  function select(section: Section, item: Item): void {
      let itemNotExists = true
      for (const selectedSection of selected) {
          if (selectedSection.name === section.name) {
              selectedSection.item = item
              itemNotExists = false
              break
          }
      }

      if (itemNotExists) {
          selected.push({
              name: section.name,
              item: item
          })
      }

      value = selected
      calcInputVisiblePart()
  }

  function isSelected(section: Section, item: Item): boolean {
      for (const selectedSection of selected) {
          if (selectedSection.name === section.name) {
              return selectedSection.item.value === item.value
          }
      }

      return false
  }

  function reset() {
      value = []
      selected = []
  }
</script>

{#snippet dropdown()}
  <div class="dropdown">
    {#each filter(data) as section}
      <div class="section-title">{section.title}</div>
      {#each section.items as item}
        <button class:selected={isSelected(section, item)} onclick={() => {select(section, item)}}>
          <span class="title">{item.title}</span>
        </button>
      {/each}
    {/each}
  </div>
{/snippet}

<Template
    {...props}
    {dropdown}
    bind:close
    bind:open

    onErase={reset}

    bind:value={inputVisiblePart}
/>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  button {
    display: flex;
    align-items: center;

    text-align: left;
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

  .section-title {
    font-weight: 600;
    color: map.get(env.$color, primary);

    padding: .5rem 1.5rem;
  }

  .title {
    font-weight: 600;
  }

  .color {
    --size: 8px;

    display: block;
    border-radius: 100%;

    width: var(--size);
    height: var(--size);
  }
</style>