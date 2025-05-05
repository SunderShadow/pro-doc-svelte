<script lang="ts">
    import '@splidejs/svelte-splide/css/core'
    import {Splide, SplideSlide, SplideTrack} from "@splidejs/svelte-splide"
    import ClientReview from "$lib/components/ClientReview.svelte"

    import PatientImage1 from "../_assets/img/patient-1.png?enhanced&format=webp"

    import SvgContainer from "$ui-kit/SvgContainer/SvgContainer.svelte"

    let screenWidth = $state(0);

    const options = {
        perPage: 2,
        gap: 28,
        breakpoints: {
            1024: {
                perPage: 1,
            },
        }
    }

</script>

<svelte:window bind:innerWidth={screenWidth}></svelte:window>

<Splide hasTrack={false} options={options} >
  <SplideTrack>
    {#each Array(5) as _}
      <SplideSlide>
        <ClientReview author="Пациент" authorImage={PatientImage1.img.src}
                      title="«Спасибо Алексею Викторовичу за то, что помог разобраться‥»."
                      description="Спасибо Алексею Викторовичу за то,
                          что помог разобраться в моей проблеме. До него я был у многих врачей и от них информации не добыл!
                          Алексей Викторович помог мне в лечении, которое я ему накручивал до его посещения."/>
      </SplideSlide>
    {/each}
  </SplideTrack>
  <div class="slider-control">
    <div class="splide__arrows">
      <button class="splide__arrow splide__arrow--prev"
      >
        <SvgContainer type="primary" size="sm">
          <svg class="fill-only" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.02422 12.0008C9.02422 11.8674 9.04922 11.7384 9.09922 11.6138C9.14922 11.4884 9.21589 11.3841 9.29922 11.3008L13.8992 6.70078C14.0826 6.51745 14.3159 6.42578 14.5992 6.42578C14.8826 6.42578 15.1159 6.51745 15.2992 6.70078C15.4826 6.88411 15.5742 7.11745 15.5742 7.40078C15.5742 7.68411 15.4826 7.91745 15.2992 8.10078L11.3992 12.0008L15.2992 15.9008C15.4826 16.0841 15.5742 16.3174 15.5742 16.6008C15.5742 16.8841 15.4826 17.1174 15.2992 17.3008C15.1159 17.4841 14.8826 17.5758 14.5992 17.5758C14.3159 17.5758 14.0826 17.4841 13.8992 17.3008L9.29922 12.7008C9.19922 12.6008 9.12855 12.4924 9.08722 12.3758C9.04522 12.2591 9.02422 12.1341 9.02422 12.0008Z"/>
          </svg>
        </SvgContainer>
      </button>
      <ul class="splide__pagination splide__pagination--ltr splide__pagination-numeric" role="tablist" aria-label="Select a slide to show"></ul>
      <button class="splide__arrow splide__arrow--next">
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

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  img {
    width: 100%;
    aspect-ratio: 292 / 366;
    border-radius: 12px;
  }

  .splide__arrows {
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
        color: #000;
      }
    }
  }
</style>