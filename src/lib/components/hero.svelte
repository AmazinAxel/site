<script>
    // Get all projects
    import { heroItems } from '$lib/config';
    import { shuffle } from '$lib/utils'

    import { fly } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
	const transition = { x: 10, duration: 150, easing: cubicOut };
    
    let showHero = false;
    
    const randomHero = shuffle(heroItems)[0]; // Random project

    const image = shuffle(randomHero.images)[0]

</script>

<div id="hero" style="--heroBackground: url(/media/herobanners/{ image.image })" class:invertColors={image.invertColors} class:heroShow={showHero}>
    <slot/>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <span 
        on:mouseenter={() => (showHero = true)} 
        on:mouseleave={() => (showHero = false)}
        aria-label="Open hero information"
    >{randomHero.project} <span>- {randomHero.description} </span></span>
</div>