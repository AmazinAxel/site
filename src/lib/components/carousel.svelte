<script>
  import emblaCarouselSvelte from 'embla-carousel-svelte';

  let { 
    data,
    type,
    emblaAPI = $bindable() } = $props();
  let currentlySelected = $state(0);
  let options = { loop: true, watchSlides: false };
  function initAPI(event) { emblaAPI = event.detail; emblaAPI.on('select', onSlideMoved); }

  function onSlideMoved() { 
    currentlySelected = emblaAPI.selectedScrollSnap();
  }

  const attributes = (repo) => [repo.forks_count, repo.stargazers_count, repo.watchers_count]
  const attributeIcons =       ['git-fork',       'star',                'eye'];
  const ghIconType = (isFork) => 
    (isFork) ? "git-fork.svg" : "github.svg"
</script>

<style>
/* Github cards (temporary) */
.githubCard {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.githubCard div {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.githubCard h4 {
  position: relative;
  top: 2px;
}
h4 { text-transform: capitalize; }
</style>

<section class="embla" use:emblaCarouselSvelte={{ options }} onemblaInit={initAPI}>
  <div class="embla__container">
    {#if type == 'project'}
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
          <img src="/media/herobanners/{image}" alt="Background hero of {title} - {description}">
        </div>
      {/each}
    {:else}
      {#each data as { ...repo }}
        <div class="embla__slide narrow">
          <a href={repo.homepage || repo.html_url}>
            <div class="coverCard innerCard" style="--bg: url(/media/icons/{ghIconType(repo.fork)}); --size: 10rem;">
              <h4>{repo.name.replaceAll("-", " ")}</h4>
              {#if repo.archived}<h5>📦️ ARCHIVED</h5>{/if}
          
              <p>{repo.description || ""}</p>
          
              <div class="githubCard">
                {#each attributes(repo) as item, index}
                  <div>
                    <img src="/media/icons/{attributeIcons[index]}.svg" alt="Git icon" class="noImgStyle"/>
                    <h4>{item || "0"}</h4>
                  </div>
                {/each}
              </div>
            </div>
          </a>
        </div>
      {/each}
    {/if}
  </div>
  <button class="embla__prev" onclick={() => emblaAPI.scrollPrev()}><img class="noImgStyle" src="/media/icons/arrow-left.svg" alt="Left arrow"></button>
  <button class="embla__next" onclick={() => emblaAPI.scrollNext()}><img class="noImgStyle" src="/media/icons/arrow-right.svg" alt="Right arrow"></button>
  <div class="embla__dots">
    {#if emblaAPI}
      {#each data as _, i}
        <span class:embla__dot={true} role="button" tabindex="0" class:selected={currentlySelected == i} onkeydown={() => emblaAPI.scrollTo(i)} onclick={() => emblaAPI.scrollTo(i)}></span> 
      {/each} 
    {/if}
  </div>
</section>
