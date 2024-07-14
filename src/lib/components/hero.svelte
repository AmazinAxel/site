
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
    <button><img src="/media/icons/about.svg" class="noImgStyle" alt="Question mark icon"></button>
    <div class="heroInfo">
        <h3>{ randomHero.project }</h3>
        <p>{ randomHero.description }</p>
        { image }
    </div>
</div>