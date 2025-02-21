<script lang="ts">
  import {setContext} from "svelte"
  import Preview from "$ui-kit/Preview/Preview.svelte";

  let previewURI = $state('')

  setContext('setPreview', (uri: string) => {
      console.log(uri)
      previewURI = uri
  })

  let breadcrumbs = [
      {
          title: 'Главная',
          href: '/'
      },
      {
          title: 'Врачи',
          href: '/doctors/list'
      }
  ]
</script>

<svelte:head>
  <link rel="preload" as="image" href={previewURI} />
</svelte:head>

<main class="page-container">
  <Preview title="Неврологи в Москве" image={previewURI} height={1000}>
    <p class="body-text-1">Невролог — врач, который диагностирует и проводит лечение заболеваний
      центральной и периферической нервной системы — спинного и головного мозга,
      а также нервных волокон.</p>
  </Preview>
</main>

<slot />