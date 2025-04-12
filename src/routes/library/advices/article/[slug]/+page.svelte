<script lang="ts">
    import {replaceState} from "$app/navigation";

    import Breadcrumbs from "$ui-kit/Breadcrumbs/Breadcrumbs.svelte"
    import {getHTMLFormattedTime} from "$lib/helpers.js"
    import {onDestroy, onMount} from "svelte";
    import {browser} from "$app/environment";

    let {
        data
    } = $props()

    const {
        date,
        title,
        thumbnail,
        content
    } = data

    const list = [
        {
            title: 'Главная',
            href: '/',
        },
        {
            title: 'Библиотека',
            href: '/library',
        },
        {
            title: 'Советы',
            href: '/library/advices/all/1',
        },
        {
            title,
            href: '',
        }
    ]

    let currentHeaderID = $state('intro')
    let navigation: {
        title: string,
        id: string
    }[] = $state([])

    if (browser) onMount(() => {
        const titlesNode = document.querySelectorAll('#advice_main_content h1')

        for (let title of titlesNode) {
            title.id = title.textContent
            navigation.push({
                id: title.id,
                title: title.textContent,
            })
        }

        currentHeaderID = titlesNode[0].id

        let titles = []
        for (let title of titlesNode) {
            titles.push(title)
        }

        titles = titles.reverse()

        for (const title of titles) {
            title.scrollListener = function () {
                let offsetY = title.getBoundingClientRect().top

                if (
                    offsetY > -1
                    && offsetY < 200
                ) {
                    currentHeaderID = title.id
                }
            }

            window.addEventListener('scroll', title.scrollListener)
        }
    })

    if (browser) onDestroy(() => {
        const titlesNode = document.querySelectorAll('#advice_main_content h2')

        for (const el of titlesNode) {
            window.removeEventListener('scroll', el.scrollListener)
        }
    })
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="breadcrumbs page-container">
  <Breadcrumbs {list}/>
</div>

<main id="article_page" class="page-container">
  <div class="publish_time">
    <span>Дата публикации</span>
    <time datetime={getHTMLFormattedTime(date)}>{date.toLocaleDateString('ru-RU')}</time>
  </div>

  <h1>{title}</h1>

  <img class="thumbnail" src={thumbnail} alt="">


  <div class="main-wrapper">
    <div class="navigation">
      {#each navigation as navItem}
        <div>
          <a class:active={currentHeaderID === navItem.id} href={"#" + navItem.id}>{navItem.title}</a>
        </div>
      {/each}
    </div>

    <div id="advice_main_content">
      {@html content}
    </div>
  </div>
</main>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  :global {
    :root {
      scroll-behavior: smooth;
    }
  }

  .publish_time {
    font-size: 14px;
    font-weight: 700;

    letter-spacing: .2em;
    text-transform: uppercase;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      font-size: 12px;
    }
  }

  .thumbnail {
    width: 100%;

    aspect-ratio: 1600 / 650;
    object-fit: cover;
    margin: 64px 0;

    @media (max-width: map.get(env.$screen-size, netbook)) {
      aspect-ratio: 928 / 410;
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      aspect-ratio: 688 / 310;
      margin: 32px 0;
    }

    @media (max-width: map.get(env.$screen-size, mobile)) {
      aspect-ratio: 329 / 210;
    }
  }

  .breadcrumbs {
    margin-bottom: 32px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }

  .main-wrapper {
    display: grid;
    grid-template-columns: 3fr 9fr;
    gap: 32px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      grid-template-columns: 1fr;
    }
  }

  .navigation {
    @media (min-width: (map.get(env.$screen-size, tablet) + 1px)) {
      position: sticky;
      top: 32px;
    }

    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 32px;
    flex-shrink: 0;

    min-width: 208px;
    height: fit-content;

    font-weight: 600;

    border: 1px solid rgba(map.get(env.$color, primary), .1);
    border-radius: 12px;

    a {
      width: fit-content;

      border-bottom: 2px solid transparent;

      opacity: .5;
      color: #000;

      transition: opacity 300ms, border-color 300ms;
    }

    a.active {
      opacity: 1;
      border-color: map.get(env.$color, primary);
    }
  }

  :global {
    #advice_main_content {
      h1 {
        font-size: 48px;
        margin-top: 8px;

        @media (max-width: map.get(env.$screen-size, netbook)) {
          font-size: 32px;
        }

        @media (max-width: map.get(env.$screen-size, tablet)) {
          font-size: 24px;
        }
      }

      h2 {
        font-size: 42px;
        margin-top: 8px;

        @media (max-width: map.get(env.$screen-size, netbook)) {
          font-size: 28px;
        }

        @media (max-width: map.get(env.$screen-size, tablet)) {
          font-size: 20px;
        }
      }


      @media (max-width: map.get(env.$screen-size, mobile)) {
        h2 {
          scroll-margin-top: 70px;
        }
      }

      ul {
        margin: 0;
      }

      ol {
        li[data-list="bullet"] {
          list-style-type: circle;
        }
      }

      li {
        font-family: Helvetica, sans-serif;
      }

      p + p {
        margin-top: 16px;
      }

      p {
        white-space: pre-line;
      }

      i {
        font-weight: 550;
        color: #000;
      }
    }
  }

</style>