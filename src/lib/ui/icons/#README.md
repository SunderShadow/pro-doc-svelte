# Структура
```sveltehtml
<script lang="ts">
  import SvgContainer from "$ui-kit/SvgContainer/SvgContainer.svelte"

  let props = $props()
</script>

<SvgContainer {...props}>
<!-- Каждая часть или целая svg может быть помечена классом "fill-only" или "stroke-only"-->
  <svg class="fill-only" ...>
    ...
  </svg>
</SvgContainer>
```