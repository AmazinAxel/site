<script>
    // Get all projects
    import { heroItems } from '$lib/config';
    import { shuffle } from '$lib/utils'

    import { fly } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
	const transition = { y: 10, duration: 150, easing: cubicOut };
    
    let showHero = false;
    
    const randomHero = shuffle(heroItems)[0]; // Random project

    const image = shuffle(randomHero.images)[0]

</script>

<div id="hero" style="--heroBackground: url(/media/herobanners/{ image.image })" class:invertColors={image.invertColors} class:heroShow={showHero}>
    <slot/>
    <button class="nostyle" on:click={() => (showHero = !showHero)}>
        <img src="/media/icons/about.svg" class="noImgStyle" alt="Open hero information">
    </button>
    {#if showHero}
        <div class="heroInfo" in:fly|local={transition} out:fly|local={transition}>
            <button class="heroClose nostyle" on:click={() => (showHero = !showHero)}>
                <img src="/media/icons/xmark.svg" class="noImgStyle" alt="Close hero information">
            </button>        
            <h6>BACKGROUND INFORMATION</h6>
            <p><strong>{ randomHero.project }:</strong> { randomHero.description }</p>
        </div>
    {/if}
</div>