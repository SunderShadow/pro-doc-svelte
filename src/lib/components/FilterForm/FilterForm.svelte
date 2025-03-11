<script lang="ts">
  // import {PreventScrolling, ReEnableScrolling} from "prevent-scrolling"

  import {fly} from "svelte/transition"
  import {tick} from "svelte"

  import PlusIcon from "$ui-kit/icons/Plus.svelte"

  let isOpen = $state(true)


  if (typeof window !== 'undefined') {
      isOpen = window.innerWidth > 768
  }

  let {
      children,
      open  = $bindable(),
      close = $bindable(),
      ...props
  } = $props()


  open = () => {
      isOpen = true

      tick().then(() => {
          // PreventScrolling(container)
      })
  }

  close = () => {
      // ReEnableScrolling()
      isOpen = false
  }

</script>

{#if isOpen}
  <aside {...props} class="filters_container" transition:fly>
    <header class="mobile_header">
      <span class="title-1">Фильтры</span>
      <button class="close_btn" onclick={close}><PlusIcon type="primary"/></button>
    </header>
    {@render children?.()}
  </aside>
{/if}

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  :global {
    .filters_container {
      font-size: 14px;
    }

    .filters_container .select-input__dropdown button {
      padding-left: 1em;
      padding-right: 1em;
    }

    .filters_container label {
      line-height: 1em;
    }

    .filters_container input {
      font-size: 14px;
    }

    .filters_container .form-control-wrapper {
      flex-grow: 1;
    }

    .filters_container {
      > div + div {
        margin-top: 16px;
      }

      > div > * + * {
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
  }

  .filters_container {
    padding: 32px 16px;
    border-radius: 12px;
    border: 1px solid rgba(map.get(env.$color, primary), .1);

    @media (max-width: map.get(env.$screen-size, tablet)) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: map.get(env.$bg-color, primary);
      z-index: 10;
    }
  }

  .mobile_header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
  }

  .close_btn {
    border: none;
    background: none;

    transform: rotate(45deg);
  }

  @media (min-width: (map.get(env.$screen-size, tablet) + 1px)) {
    .mobile_header {
      display: none;
    }
  }
</style>