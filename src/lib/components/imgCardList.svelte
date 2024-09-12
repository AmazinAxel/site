<script>
    export let data;
    export let doScroll;
    export let alt;
</script>

<div style="display: flex; gap: 0.5rem;">
    {#each data as item}
        <a href="/tools/{item.url}" style="text-decoration: none;" class="gridItem">
            <div class="card imgCard">
                <img src="/media/{item.image}" class="noImgStyle" style="border-radius: 0.5rem" alt="TODo">
                <div>
                    <h3>{item.title}</h3>
                    <div style="height: 0.5rem"/>
                    <p>{item.description}</p>
                </div>
            </div>
        </a>
    {/each}
</div>