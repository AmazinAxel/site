<script>
    import Carousel from '$lib/components/carousel.svelte';
    let {
        link,
        titleText,
        icon,
        right,
        data,
        carousel,
        fullwidth,
        altBackground,
    } = $props();

</script>

<div class:section={fullwidth} class:right={right} class:altBackground={altBackground}>
    <a href={link} class="notextdeco"><h2>{titleText}</h2></a>
    {#if carousel}
        <Carousel data={data}></Carousel>
    {:else}
        <div class="cardListContainer">
            {#each data as { title, link }}
                <div class="listCard card backgroundIcon" style="--bg: url(/media/icons/{icon}.svg)">
                    <a href={link} target="_blank" rel="noreferrer noopener" style="text-decoration: none;">
                        <h1>{title}</h1>
                        <div class="contentFader"></div>
                    </a>
                </div>
            {/each}
        </div>
    {/if}
</div>
