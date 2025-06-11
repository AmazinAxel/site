<script lang="ts">
    import { heroItems } from '$lib/config';
    import { shuffle } from '$lib/utils'

    let { children } = $props();
    
    let showHero = $state(false);
    
    const randomHero = shuffle(heroItems)[0]; // Random background
    const image = shuffle(randomHero.images)[0];
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/hero.css"/>
</svelte:head>

<div id="hero" class="blurredShadow" style="--background: url(/media/herobanners/{ image.image })" class:invertColors={(image as any).invertColors} class:heroShow={showHero}>
    {@render children?.()}
    <span
        role="article"
        onmouseenter={() => (showHero = true)} 
        onmouseleave={() => (showHero = false)}
        aria-label="Open hero information"
    >
    
    <img class="noImgStyle" style="width: 1rem; position: relative; z-index: 3;" src="/media/icons/location.svg" alt="Background location"><span>{randomHero.location}</span></span>
</div>