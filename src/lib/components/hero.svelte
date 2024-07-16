
<script>
    // Get all projects
    import { heroItems } from '$lib/config';
    import { shuffle } from '$lib/utils'

    import { fly } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
	const transition = { y: 5, duration: 100, easing: cubicOut };
    
    let showHero = false;
    
    const randomHero = shuffle(heroItems)[0]; // Random project

    const image = shuffle(randomHero.images)[0]

</script>

<div id="hero" style="background-image: url(/media/herobanners/{ image.image })" class:invertColors={image.invertColors}>
    <slot/>
    <button on:click={() => (showHero = !showHero)}>
        <img src="/media/icons/about.svg" class="noImgStyle" alt="Question mark icon">
    </button>
    {#if showHero}
        <div class="heroInfo" in:fly|local={transition} out:fly|local={transition}>
            <h4>{ randomHero.project }</h4>
            <h5>{ randomHero.description }</h5>
        </div>
    {/if}
</div>