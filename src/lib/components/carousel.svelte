<script lang="ts">
  import emblaCarouselSvelte from 'embla-carousel-svelte';

  let options = { loop: true, watchSlides: false };
  let { data, emblaAPI = $bindable() } = $props();
  let currentlySelected = $state(0);
  function initAPI(event: CustomEvent) { emblaAPI = event.detail; emblaAPI.on('select', onSlideMoved); }
  const onSlideMoved = () => 
    currentlySelected = emblaAPI.selectedScrollSnap();
</script>


<section class="embla" use:emblaCarouselSvelte={{ options, plugins: [] }} onemblaInit={initAPI}>
  <div class="embla__container">
    {#each data as { title, role, description, image, url, lightBackground }}
      <div class="embla__slide">
        <div class="carouselContent" class:lightBackground={lightBackground}>
          {#if url}
            <div class="name"><a href={url}><h4>{title}</h4></a></div>
          {:else}
            <div class="name"><h4>{title}</h4></div>
          {/if}
          <h6>{role}</h6>
          <p>{description}</p>
        </div>
        <img src="/media/projects/{image}" alt="Background hero of {title} - {description}">
      </div>
    {/each}
  </div>
  <button class="embla__prev" onclick={() => emblaAPI.scrollPrev()}><img class="noImgStyle" src="/media/icons/arrow-left.svg" alt="Left arrow"></button>
  <button class="embla__next" onclick={() => emblaAPI.scrollNext()}><img class="noImgStyle" src="/media/icons/arrow-right.svg" alt="Right arrow"></button>
</section>
<div class="embla__dots">
  {#if emblaAPI}
    {#each data as _, i}
      <span class:embla__dot={true} role="button" tabindex="0" class:selected={currentlySelected == i} onkeydown={() => emblaAPI.scrollTo(i)} onclick={() => emblaAPI.scrollTo(i)}></span> 
    {/each} 
  {/if}
</div>
