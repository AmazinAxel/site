<script>
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

  export let data;
  let options = { loop: true };
  let plugins = [ WheelGesturesPlugin() ];
</script>

<style>
</style>  

<div class="embla" use:emblaCarouselSvelte="{{ options, plugins }}">
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
