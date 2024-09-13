<script>
    export let data;
    export let doScroll;
    export let alt;
</script>

<div style="display: flex; gap: 0.5rem;">
    {#each data as item}
        <a href={item.route} style="text-decoration: none;" class="gridItem">
            <div class="card imgCard">
                <picture>
                    <img src="/media/{item.image}" class="noImgStyle" style="border-radius: 0.5rem" alt="TODo">
                </picture>
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            </div>
        </a>
    {/each}
</div>