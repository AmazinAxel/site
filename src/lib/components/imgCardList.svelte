<script>
    let { data, alt } = $props();
</script>
<div class="flexGrid">
    {#each data as item}
        <a href="/tools/{item.route}" class="gridItem">
            <div class="card imgCard">
                <picture>
                    <img src="/media/tools/previews/{item.image}" class="noImgStyle" alt={alt + item.title}>
                </picture>
                <h3>{item.title}</h3>
                <div class="contentFader"></div>
            </div>
        </a>
    {/each}
</div>