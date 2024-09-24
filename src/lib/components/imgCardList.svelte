<script>
    export let data;
    export let alt;
    export let isHomepage;
</script>

<div style="display: flex; gap: 0.5rem; align-items: center; margin: auto;">
    {#each data as item}
        <a href={item.route} style="text-decoration: none;" class="gridItem">
            <div class="card imgCard">
                <picture>
                    <img src="/media/{item.image}" class="noImgStyle" style="border-radius: 0.5rem" alt={alt}>
                </picture>
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}{#if isHomepage}...{/if}</p>
                    {#if isHomepage}<div class="contentFader"></div>{/if}
                </div>
            </div>
        </a>
    {/each}
</div>