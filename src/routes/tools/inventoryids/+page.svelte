<svelte:head>
	<title>Help - Inventory IDs</title>
</svelte:head>
<script>
    const inventoryRows = ["Player", "3 rows", "4 rows", "5 rows", "6 rows"];

</script>
<h1>Minecraft Inventory ID mappings</h1>
<p>
    Ideally, you'll want to memorize the ID slot layout so you won't
    need this reference sheet. However, it still may be useful for
    visualizing inventory layouts while designing GUIs.
</p>

<label for="inventorysize">Select Inventory Type:</label>
<select name="inventorysize" id="inventorysize">
    {#each inventoryRows as item}
        <option value={item}>{item}</option>
    {/each}
</select>