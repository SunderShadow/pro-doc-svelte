<script lang="ts">
    import {blur} from "svelte/transition"
    import {onDestroy, onMount, type Snippet} from "svelte"
    import {disablePageScroll, enablePageScroll} from "@fluejs/noscroll"

    type Props = {
        children: Snippet,
        isActive?: boolean,
    }

    let {
        children,
        isActive = $bindable(true),
    }: Props = $props();

    const toggleActive = () => {
        isActive = !isActive
    }

    let el = $state()
    onMount(() => {
        enablePageScroll()
        disablePageScroll(el)
    })

    onDestroy(() => {
        enablePageScroll()
    })
</script>

<div class="shadow" onclick={toggleActive} transition:blur={{duration: 300}}>
  <section onclick={(e) => e.stopPropagation()} bind:this={el}>
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
    max-width: 90vw;
    max-height: 90dvh;
    overflow-y: auto;

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
    left: 0;
    z-index: 20;

    background-color: rgba($shadow-color, 0.3);

    width: 100%;
    height: 100%;
  }
</style>