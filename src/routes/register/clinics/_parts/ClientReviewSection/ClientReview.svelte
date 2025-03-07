<script lang="ts">
    import Star from "$ui-kit/icons/Star.svelte";
    import EmptyStar from "$ui-kit/icons/EmpyStar.svelte";

    type Props = {
        title: string,
        description: string, //TODO переписать на slot
        author: string,
        authorImage: string,
    }

    const {
        title,
        description,
        author,
        authorImage,
    }: Props = $props()

</script>

<div class="review-comment">
  <div class="content">
      <h1 class="title-1">{title}</h1>
      <p class="body-text-2">{description}</p>
  </div>
  <div class="author">
    <img src={authorImage} alt="">

    <div class="name">
      <h5 class="title-3">{author}</h5>
      <div class="rating">
        <div><Star size="sm"/></div>
        <div><Star size="sm"/></div>
        <div><Star size="sm"/></div>
        <div><Star size="sm"/></div>
        <div class="empty"><Star size="sm"/></div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  :global {
    .review-comment .rating .svg-icon-container {
      --size: 16px;
      --color: #FFCC00;
    }

    .review-comment .rating .empty .svg-icon-container {
      --color: #D9D9D9;
    }
  }

  .review-comment {
    padding: 1.5rem;

    border: 1px solid rgba(map.get(env.$color, primary), .1);
    border-radius: 12px;

    height: 100%;

    @media (max-width: map.get(env.$screen-size, mobile)) {
      padding: 16px;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      > p {
        line-height: 25.6px;
      }
    }

    .rating {
      display: flex;
      gap: 1px;
    }

    .author {
      padding: 2rem 0;

      display: flex;
      align-items: center;
      gap: .75rem;

      @media (max-width: map.get(env.$screen-size, mobile)) {
        padding: 0;
        margin-top: 32px;
      }

      > img {
        width: 64px;
        height: 64px;
        object-fit: cover;

        border-radius: 8px;
      }
    }
  }
</style>