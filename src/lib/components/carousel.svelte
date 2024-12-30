<script>
  import emblaCarouselSvelte from 'embla-carousel-svelte';

  let { data, smallSlide, emblaAPI = $bindable() } = $props();
  let currentlySelected = $state(0);
  let options = { loop: true, watchSlides: false };
  function initAPI(event) { emblaAPI = event.detail; emblaAPI.on('select', onSlideMoved); }

  function onSlideMoved() { 
    currentlySelected = emblaAPI.selectedScrollSnap();
  }
</script>

<section class="embla" use:emblaCarouselSvelte={{ options }} onemblaInit={initAPI}>
  <div class="embla__container">
    {#each data as { title, role, description, shortDesc, image, url, linkText, lightBackground }}
      <div class="embla__slide" class:smallSlide={smallSlide}>
        <div class="carouselContent" class:lightBackground={lightBackground}>
          <div class="name"><h4>{title}</h4></div>
          {#if !smallSlide}<h6>{role}</h6>{/if}
          <p>{(smallSlide) ? shortDesc : description}</p>
          {#if linkText} <a href={url}>{linkText}</a> {/if}
        </div>
        <img src="/media/herobanners/{image}" alt="TODO">
      </div>
    {/each}
  </div>
  {#if data.length != 1}
  {#if !smallSlide}<button class="embla__prev" onclick={() => emblaAPI.scrollPrev()}><img class="noImgStyle" src="/media/icons/arrow-left.svg" alt="Left arrow"></button>{/if}
  <button class="embla__next" onclick={() => emblaAPI.scrollNext()}><img class="noImgStyle" src="/media/icons/arrow-right.svg" alt="Right arrow"></button>
  <div class="embla__dots">
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    {#if emblaAPI}
    {#each data as _, i} <!-- Avoid shadowing by using underscore for unused loop variable --> 
    <span class:embla__dot={true} class:selected={currentlySelected == i} onclick={() => emblaAPI.scrollTo(i)}></span> 
    {/each} 
    {/if}
    </div>
  {/if}
</section>
