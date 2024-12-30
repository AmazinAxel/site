<script>
    let { items } = $props();
</script>

<div class="cardListContainer">
    {#each items as item}
        <div class="listCard card">
            { item }
        </div>
    {/each}
</div>
