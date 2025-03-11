<script lang="ts">
    import {onDestroy, onMount, type Snippet} from "svelte";
    import {PreventScrolling, ReEnableScrolling} from "prevent-scrolling";

    type Props = {
        header: Snippet,
        children: Snippet,
        isActive: boolean,
    }

    let {
        header,
        children,
        isActive = $bindable(true),
    }: Props = $props();

    const toggleActive = () => {
        isActive = !isActive;
    }

    onMount(() => {
        PreventScrolling()
    })

    onDestroy(() => {
        ReEnableScrolling()
    })
</script>

<div class="shadow" onclick={toggleActive}>
  <section onclick={(e) => e.stopPropagation()}>
    {#if header}
      <div class="modal-header">
        {@render header?.()}
      </div>
    {/if}
    {@render children?.()}
  </section>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  $shadow-color: #000000;

  section {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 21;

    width: fit-content;
    max-width: 80vw;
    max-height: 80vw;

    padding: 2rem;

    background-color: map.get(env.$bg-color, primary);

    border: 1px solid rgba(map.get(env.$color, primary), .1);
    border-radius: 12px;
  }

  .modal-header {
    margin-bottom: 32px;
  }

  .shadow {
    position: fixed;
    top: 0;
    z-index: 20;

    background-color: rgba($shadow-color, 0.3);

    width: 100%;
    height: 100%;

  }
</style>