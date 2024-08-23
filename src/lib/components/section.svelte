<script>
    export let link, titleText, icon, right, data;
    import Admonition from '$lib/components/admonition.svelte';
</script>


<div class="section" class:right={right}>
    <a href={link} class="notextdeco"><h2>{titleText}</h2></a>
    <div class="cardListContainer">
        {#if data.length < 1}
            <Admonition builderror>No connection to outside server! Posts could not be shown.</Admonition>
        {:else}
            {#each data as { title, link, description }}
            <div class="listCard card backgroundIcon" style="--bg: url(/media/icons/{icon}.svg)">
                <a href={link} target="_blank" rel="noreferrer noopener" style="text-decoration: none;">
                    <h4>{title}</h4>
                    <p>{description.replaceAll("and#39;", "'").replaceAll("amp;", "").split(/(?=\.)/g).slice(0, 10).join('')}...</p>
                    <div class="contentFader"></div>
                </a>
            </div>
            {/each}
        {/if}
    </div>
    </div>
    