<script>
    export let items;
</script>

<div class="cardListContainer">
    {#each items as item}
        <div class="listCard card">
            { item }
        </div>
    {/each}
</div>
