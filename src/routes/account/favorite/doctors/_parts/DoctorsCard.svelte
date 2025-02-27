<script>
  import Button from "$ui-kit/Button/Button.svelte"
  import ThumbnailImg from "../_assets/doctor.jpg?enhanced&format=webp"
  import Like from "$ui-kit/icons/Like.svelte";
</script>

<article class="favorite_doctor_card">
  <div class="top_info_container">
    <div class="thumbnail">
      <img src={ThumbnailImg.img.src} alt="">
      <div class="favorite_icon">
        <Like size="sm"/>
      </div>
    </div>
    <div>
      <h1 class="title title-1">Горбунов Алексей Викторович</h1>

      <div class="rating-container">
        <div class="rating">
          <svg class="star" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.88398 12.6681L3.96732 7.9848L0.333984 4.8348L5.13398 4.41813L7.00065 0.00146484L8.86732 4.41813L13.6673 4.8348L10.034 7.9848L11.1173 12.6681L7.00065 10.1848L2.88398 12.6681Z" fill="#FFB700"/>
          </svg>
          <span>4.9</span>
        </div>
        <a href="/" class="reviews active">
          4 отзыва
        </a>
      </div>
    </div>
  </div>

  <div class="bottom_info_container">
    <div class="tags">
      <a class="active" href="/doctors/category">невролог</a>
      <a class="active" href="/doctors/works_with/adults">взрослый</a>
    </div>

    <div class="description_tags body-text-3">
      <span>Стаж 24 года</span>
      <span>высшая категория</span>
      <span>доктор медицинских наук</span>
      <span>профессор</span>
    </div>

    <div class="btn">
      <Button fullWidth>Перейти на страницу</Button>
    </div>
  </div>
</article>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  article {
    padding: 32px;
    border: 1px solid rgba(map.get(env.$color, primary), .1);
    border-radius: 12px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      padding: 16px;
    }
  }

  .title {
    font-size: 24px;
    line-height: 36px;

    @media (max-width: (map.get(env.$screen-size, tablet) + 1px)) {
      font-size: 18px;
      line-height: 27px;
    }
  }

  .thumbnail {
    position: relative;
    flex-shrink: 0;
    width: 110px;
    height: 110px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .favorite_icon {
      position: absolute;
      top: 8px;
      left: 8px;
    }
  }

  :global {
    .favorite_doctor_card {
      .favorite_icon .svg-icon-container svg{
        fill: red;
      }

      .favorite_icon .svg-icon-container {
        --color: #FF3B30;
      }
    }
  }

  .top_info_container {
    display: flex;
    gap: 16px;

    @media (max-width: map.get(env.$screen-size, tablet)) {
      flex-direction: column;
    }
  }

  .rating-container {
    display: flex;
    gap: 8px;
    margin-top: 8px;
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 4px;

    font-weight: 600;
  }

  .reviews {
    text-decoration: underline;
    font-weight: 600;

    opacity: .5;

    @media (min-width: (map.get(env.$screen-size, tablet) + 1px)) {
      transition: opacity 300ms;

      &:hover {
        opacity: 1;
      }
    }
  }

  .tags {
    display: flex;

    a {
      display: inline-block;
      font-family: "Helvetica", sans-serif;

      @media (max-width: map.get(env.$screen-size, netbook)) {
        font-size: 14px;
      }
    }

    a + a {
      display: inline-block;
      position: relative;
      margin-left: 16px;

      &::before {
        content: "";

        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -9px;

        width: 1px;
        height: 1.5rem;
        
        background-color: rgba(0, 0, 0, .1)
      }
    }
  }

  .bottom_info_container {
    margin-top: 16px;
  }

  .description_tags {
    margin-top: 8px;

    span {
      font-family: "Helvetica", sans-serif;
    }

    span:not(:last-child)::after {
      content: ",";
    }
  }

  .btn {
    margin-top: 32px;
  }
</style>