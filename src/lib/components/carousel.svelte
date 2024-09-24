<script>
  import emblaCarouselSvelte from 'embla-carousel-svelte';

  export let data;
  let options = { loop: true, watchSlides: false };
</script>

<div class="embla" use:emblaCarouselSvelte="{{ options }}">
  <div class="embla__container">
    {#each data as { title, role, description, image }}
    <div class="embla__slide">
      <div class="carouselContent">
        <h4>{title}</h4>
        <h6>{role}</h6>
        <p>{description}</p>
      </div>
      <img src="/media/herobanners/{image}" alt="TODO">
    </div>
    {/each}
  </div>
</div>