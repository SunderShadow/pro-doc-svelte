<script lang="ts">
  import {goto} from "$app/navigation"

  import Preview from "$ui-kit/Preview/Preview.svelte"
  import PreviewImg from "./_assets/preview.png?enhanced&format=webp"
  import PreviewImgMobile from "./_assets/preview-mobile.png?enhanced&format=webp"
  import Tag from "$ui-kit/Tag/Tag.svelte"
  import Article from "./_parts/Article.svelte";
  import Pagination from "$ui-kit/Pagination/Pagination.svelte";
  import Breadcrumbs from "$ui-kit/Breadcrumbs/Breadcrumbs.svelte";

  let {
      data
  } = $props()

  function setNewPage() {
      return data.page
  }

  function getNewPage(page: number) {
      goto('/library/advices/' + data.tag + '/' + page + '#new_advices')
  }

  let breadcrumbs = [
      {
          title: 'Главная',
          href: '/'
      },
      {
          title: 'Библиотека',
          href: '/library'
      },
      {
          title: 'Cоветы',
          href: ''
      }
  ]
</script>


<svelte:head>
  <title>Советы</title>
  <link rel="preload" as="image" href={PreviewImg.img.src} media="(min-width: 426px)"/>
  <link rel="preload" as="image" href={PreviewImgMobile.img.src} media="(max-width: 425px)"/>
</svelte:head>

<div class="page-container" id="advices_preview">
  <div class="breadcrumbs">
    <Breadcrumbs list={breadcrumbs} />
  </div>
  <Preview
      title="Советы"
      image={PreviewImg.img.src}
      imageMobile={PreviewImgMobile.img.src}
      contentWidth={55}
      gradientWidth={30}
      withGradient
  />
</div>

<main class="page-container page-section">
  <h2 id="new_advices">Новые советы</h2>

  <div class="tags">
    <a href='/library/advices/all/1' data-sveltekit-noscroll>
      <Tag isActive={data.tag === 'all'}>Все</Tag>
    </a>

    {#each data.tags as tag}
      <a href={'/library/advices/' + tag.key + '/1'} data-sveltekit-noscroll>
        <Tag isActive={data.tag === tag.key}>{tag.title}</Tag>
      </a>
    {/each}
  </div>

  <div class="articles">
    {#each data.articles as article}
      <Article {...article}/>
    {/each}
  </div>

  <div class="pagination">
    <Pagination total={10} bind:value={setNewPage, getNewPage}/>
  </div>
</main>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  :global {
    @media (min-width: map.get(env.$screen-size, mobile) + 1px) {
      #advices_preview .preview {
        background-position: right;
        background-size: contain;
      }
    }
  }

  h2 {
    margin-bottom: 64px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .breadcrumbs {
    margin-bottom: 32px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      margin-bottom: 16px;
    }
  }

  .articles {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;

    margin-top: 32px;

    @media (max-width: map.get(env.$screen-size, netbook)) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .pagination {
    margin-top: 32px;
  }
</style>