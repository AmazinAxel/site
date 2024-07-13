
<script>
    // Get all projects
    import { heroItems } from '$lib/config';
    import { shuffle } from '$lib/utils'
    
    const randomHero = shuffle(heroItems)[0]; // Random project

    const image = (typeof randomHero.images != 'undefined')
    ? shuffle(randomHero.images)[0]
    : randomHero.image
</script>

<div id="hero">
    <slot/>

    <h3>{ randomHero.project }</h3>
    <p>{ randomHero.description }</p>
    { image }
</div>