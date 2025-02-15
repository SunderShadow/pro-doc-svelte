<script lang="ts">
    import Star from "$ui-kit/icons/Star.svelte";
    import EmptyStar from "$ui-kit/icons/EmpyStar.svelte";

    type Props = {
        title: string,
        description: string,
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

<div class="review-container">
    <div class="review-content">
        <h1 class="title-1">{title}</h1>
        <p class="body-text-2">{description}</p>
    </div>
    <div class="author">
        <img src={authorImage} alt="">
        <div>
            <h5 class="title-3">{author}</h5>
            <span>
                <Star size="sm" type="primary"/>
                <Star size="sm" type="primary"/>
                <Star size="sm" type="primary"/>
                <Star size="sm" type="primary"/>
                <EmptyStar size="sm" type="primary"/>
            </span>
        </div>
    </div>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

    .review-container {
      padding: 1.5rem;

      border: 1px solid rgba(map.get(env.$color, primary), .1);
      border-radius: 12px;

      height: 100%;

      .review-content {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        > p {
          line-height: 25.6px;
        }
      }

      .author {
        padding: 2rem 0;

        display: flex;
        align-items: center;
        gap: .75rem;

        > img {
          width: 64px;
          height: 64px;
          object-fit: cover;

          border-radius: 8px;
        }

        > div {
          display: flex;
          flex-direction: column;
          gap: 4px;

          > h5 {
            font-weight: 700;
            line-height: 25.6px;
          }

          > span {
            display: flex;
          }
        }
      }
    }
</style>