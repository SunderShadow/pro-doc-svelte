<script lang="ts">
    import PatientImage1 from "../_assets/img/patient-1.png?enhanced&format=webp";
    import PatientImage2 from "../_assets/img/patient-2.png?enhanced&format=webp";
    import CertificateImage from "../_assets/img/certificate.png?enhanced&format=webp";
    import {Splide, SplideSlide, SplideTrack} from "@splidejs/svelte-splide";
    import ClientReview from "../../../_parts/ClientReviewSection/ClientReview.svelte";
    import Button from "$ui-kit/Button/Button.svelte";
    import SvgContainer from "$ui-kit/SvgContainer/SvgContainer.svelte";

    let reviewsSplide, documentsSplide;

    let screenWidth = $state(0);

    let currentReviewPage: number = $state(0);
    let currentDocumentPage: number = $state(0);

    const sliderReviewOptions = {
        perPage: 1,
        gap: 30,
        pagination: false,
    }

    const sliderDocumentOptions = {
        perPage: 5,
        gap: screenWidth < 768 ? 16 : 28,
        pagination: false,
    }

    const goToPrev = (slide) => {
        if (slide) {
            slide.go('<');
        }
    }

    const goToNext = (slide) => {
        if (slide) {
            slide.go('>');
        }
    }

    const goToPage = (slide, page) => {
        if (slide) {
            slide.go(page);
        }
    }

    const updateCurrentReviewPage = (index) => {
        currentReviewPage = index;
    }

    const updateCurrentDocumentPage = (index) => {
        currentDocumentPage = index;
    }
</script>

<svelte:head>
  <link rel="preload" as="image" href={PatientImage1.img.src} />
  <link rel="preload" as="image" href={PatientImage2.img.src} />
  <link rel="preload" as="image" href={CertificateImage.img.src} />
</svelte:head>

<svelte:window bind:innerWidth={screenWidth}></svelte:window>

<section class="reviews">
  <h4>Отзывы о враче</h4>
  <div class="reviews-container">
    <Splide hasTrack={false} options={sliderReviewOptions} bind:this={reviewsSplide}
            on:active={event => updateCurrentReviewPage(event.detail.Slide.index)}>
      <SplideTrack>
        <SplideSlide>
          <!--        TODO переписать на slot-->
          <ClientReview author="Пациент" authorImage={PatientImage1.img.src}
                        title="«Спасибо Алексею Викторовичу за то, что помог разобраться‥»."
                        description="Спасибо Алексею Викторовичу за то,
                          что помог разобраться в моей проблеме. До него я был у многих врачей и от них информации не добыл!
                          Алексей Викторович помог мне в лечении, которое я ему накручивал до его посещения."/>
        </SplideSlide>
        <SplideSlide>
          <ClientReview author="Пациент" authorImage={PatientImage2.img.src}
                        title="«Спасибо Алексею Викторовичу за то, что помог разобраться‥»."
                        description="Спасибо Алексею Викторовичу за то,
                          что помог разобраться в моей проблеме. До него я был у многих врачей и от них информации не добыл!
                          Алексей Викторович помог мне в лечении, которое я ему накручивал до его посещения."/>
        </SplideSlide>
      </SplideTrack>
      <div class="slider-control">
        <div class="splide__arrows">
          <button class="splide__arrow splide__arrow--prev" on:click={() => goToPrev(reviewsSplide)}
                  class:disabled={currentReviewPage === 0}>
            <SvgContainer type="primary" size="sm">
              <svg class="fill-only" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.02422 12.0008C9.02422 11.8674 9.04922 11.7384 9.09922 11.6138C9.14922 11.4884 9.21589 11.3841 9.29922 11.3008L13.8992 6.70078C14.0826 6.51745 14.3159 6.42578 14.5992 6.42578C14.8826 6.42578 15.1159 6.51745 15.2992 6.70078C15.4826 6.88411 15.5742 7.11745 15.5742 7.40078C15.5742 7.68411 15.4826 7.91745 15.2992 8.10078L11.3992 12.0008L15.2992 15.9008C15.4826 16.0841 15.5742 16.3174 15.5742 16.6008C15.5742 16.8841 15.4826 17.1174 15.2992 17.3008C15.1159 17.4841 14.8826 17.5758 14.5992 17.5758C14.3159 17.5758 14.0826 17.4841 13.8992 17.3008L9.29922 12.7008C9.19922 12.6008 9.12855 12.4924 9.08722 12.3758C9.04522 12.2591 9.02422 12.1341 9.02422 12.0008Z"/>
              </svg>
            </SvgContainer>
          </button>
          <Button type="icon" onclick={() => goToPage(reviewsSplide, 0)} outline={currentReviewPage !== 0}>
            1
          </Button>
          <Button type="icon" onclick={() => goToPage(reviewsSplide, 1)} outline={currentReviewPage !== 1}>
            2
          </Button>
          <button class="splide__arrow splide__arrow--next" on:click={() => goToNext(reviewsSplide)}
                  class:disabled={currentReviewPage === 1}>
            <SvgContainer type="primary" size="sm">
              <svg class="fill-only" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.9758 11.9992C15.9758 12.1326 15.9508 12.2616 15.9008 12.3862C15.8508 12.5116 15.7841 12.6159 15.7008 12.6992L11.1008 17.2992C10.9174 17.4826 10.6841 17.5742 10.4008 17.5742C10.1174 17.5742 9.88411 17.4826 9.70078 17.2992C9.51745 17.1159 9.42578 16.8826 9.42578 16.5992C9.42578 16.3159 9.51745 16.0826 9.70078 15.8992L13.6008 11.9992L9.70078 8.09922C9.51745 7.91589 9.42578 7.68255 9.42578 7.39922C9.42578 7.11588 9.51745 6.88255 9.70078 6.69922C9.88411 6.51589 10.1174 6.42422 10.4008 6.42422C10.6841 6.42422 10.9174 6.51589 11.1008 6.69922L15.7008 11.2992C15.8008 11.3992 15.8714 11.5076 15.9128 11.6242C15.9548 11.7409 15.9758 11.8659 15.9758 11.9992Z"/>
              </svg>
            </SvgContainer>
          </button>
        </div>
      </div>
    </Splide>
  </div>
</section>
<section class="documents">
  <h4>Документы и фотографии</h4>
  <div class="documents-content">
    <Splide hasTrack={false} options={sliderDocumentOptions} bind:this={documentsSplide}
            on:active={event => updateCurrentDocumentPage(event.detail.Slide.index)}>
      <SplideTrack>
        {#each {length: 5}}
          <SplideSlide>
            <img src={CertificateImage.img.src} alt=""/>
          </SplideSlide>
        {/each}
      </SplideTrack>
      <div class="slider-control">
        <div class="splide__arrows">
          <button class="splide__arrow splide__arrow--prev" on:click={() => goToPrev(documentsSplide)}
                  class:disabled={currentDocumentPage === 0}>
            <SvgContainer type="primary" size="sm">
              <svg class="fill-only" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.02422 12.0008C9.02422 11.8674 9.04922 11.7384 9.09922 11.6138C9.14922 11.4884 9.21589 11.3841 9.29922 11.3008L13.8992 6.70078C14.0826 6.51745 14.3159 6.42578 14.5992 6.42578C14.8826 6.42578 15.1159 6.51745 15.2992 6.70078C15.4826 6.88411 15.5742 7.11745 15.5742 7.40078C15.5742 7.68411 15.4826 7.91745 15.2992 8.10078L11.3992 12.0008L15.2992 15.9008C15.4826 16.0841 15.5742 16.3174 15.5742 16.6008C15.5742 16.8841 15.4826 17.1174 15.2992 17.3008C15.1159 17.4841 14.8826 17.5758 14.5992 17.5758C14.3159 17.5758 14.0826 17.4841 13.8992 17.3008L9.29922 12.7008C9.19922 12.6008 9.12855 12.4924 9.08722 12.3758C9.04522 12.2591 9.02422 12.1341 9.02422 12.0008Z"/>
              </svg>
            </SvgContainer>
          </button>
          <Button type="icon" onclick={() => goToPage(documentsSplide, 0)} outline={currentDocumentPage !== 0}>
            1
          </Button>
          <Button type="icon" onclick={() => goToPage(documentsSplide, 1)} outline={currentDocumentPage !== 1}>
            2
          </Button>
          <Button type="icon" onclick={() => goToPage(documentsSplide, 2)} outline={currentDocumentPage !== 2}>
            3
          </Button>
          <button class="splide__arrow splide__arrow--next" on:click={() => goToNext(documentsSplide)}
                  class:disabled={currentDocumentPage === 2}>
            <SvgContainer type="primary" size="sm">
              <svg class="fill-only" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.9758 11.9992C15.9758 12.1326 15.9508 12.2616 15.9008 12.3862C15.8508 12.5116 15.7841 12.6159 15.7008 12.6992L11.1008 17.2992C10.9174 17.4826 10.6841 17.5742 10.4008 17.5742C10.1174 17.5742 9.88411 17.4826 9.70078 17.2992C9.51745 17.1159 9.42578 16.8826 9.42578 16.5992C9.42578 16.3159 9.51745 16.0826 9.70078 15.8992L13.6008 11.9992L9.70078 8.09922C9.51745 7.91589 9.42578 7.68255 9.42578 7.39922C9.42578 7.11588 9.51745 6.88255 9.70078 6.69922C9.88411 6.51589 10.1174 6.42422 10.4008 6.42422C10.6841 6.42422 10.9174 6.51589 11.1008 6.69922L15.7008 11.2992C15.8008 11.3992 15.8714 11.5076 15.9128 11.6242C15.9548 11.7409 15.9758 11.8659 15.9758 11.9992Z"/>
              </svg>
            </SvgContainer>
          </button>
        </div>
      </div>
    </Splide>
  </div>
</section>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  $black-color: #000000;

  h4 {
    font-size: 1.5rem;
    line-height: 36px;
    font-weight: 600;
  }

  .reviews {
    display: flex;
    flex-direction: column;

    padding-top: 2rem;

    > h4 {
      margin-bottom: 16px;
    }
  }

  .reviews-container {
    display: flex;
    gap: 30px;

    margin-bottom: 32px;

    :global {
      h1 {
        font-size: 1.2rem; // временно
        line-height: 28.8px;
      }
    }

    :global {
      .splide {
        max-width: 100%;
      }
    }
  }

  .splide__arrows{
    display: flex;
    gap: 16px;

    margin-top: 32px;

    > button {
      background: none;
      padding: 0;
      margin: 0;
      border: none;
      cursor: pointer;

      &.disabled {
        opacity: .5;
        user-select: none;
        cursor: default;

        background: none;
        color: inherit;
      }
    }

    :global {
      .outline {
        border: 1px solid rgba(map.get(env.$color, primary), 0.1);
        color: $black-color;
      }
    }
  }

  .documents {
    padding-top: 2rem;

    > h4 {
      margin-bottom: 16px;
    }
  }

  .documents-content {
    display: flex;
    gap: 28px;

    margin-bottom: 32px;

    overflow-x: hidden;

    img {
      width: 292px;
      height: 366px;

      border: 2px solid map.get(env.$bg-color, primary);
      border-radius: 12px;
    }
  }
</style>