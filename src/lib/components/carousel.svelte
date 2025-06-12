<script lang="ts">
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import type { EmblaCarouselType } from 'embla-carousel';

  type carouselProps = {
      data: any;
      children?: () => any;
  }
  const props: carouselProps = $props();
  let { data, children } = props;

  let emblaAPI: EmblaCarouselType;
  let currentlySelected = $state(0);
  let options = { loop: true, watchSlides: false };
  function initAPI(event: CustomEvent) { emblaAPI = event.detail; emblaAPI.on('select', onSlideMoved); }
  const onSlideMoved = () => 
    currentlySelected = emblaAPI.selectedScrollSnap();
</script>


<section class="embla" use:emblaCarouselSvelte={{ options, plugins: [] }} onemblaInit={initAPI}>
  <div class="embla__container">
    {#each data as { title, description, image, url, lightBackground }}
      <div class="embla__slide blurredShadow" style="--background: url(/media/showcases/{image})">
        <div class="carouselContent" class:lightBackground={lightBackground}>
          {#if url}
            <div class="name"><a href={url} class="external"><h4>{title}</h4></a></div>
          {:else}
            <div class="name"><h4>{title}</h4></div>
          {/if}
          <p>{description}</p>
        </div>
      </div>
    {/each}
    {@render children?.()}
  </div>
  <button class="embla__prev" onclick={() => emblaAPI.scrollPrev()}><img class="noImgStyle" src="/media/icons/arrow-left.svg" alt="Left arrow"></button>
  <button class="embla__next" onclick={() => emblaAPI.scrollNext()}><img class="noImgStyle" src="/media/icons/arrow-right.svg" alt="Right arrow"></button>
</section>
