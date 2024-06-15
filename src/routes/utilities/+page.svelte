<svelte:head>
	<title>Utilities</title>
</svelte:head>

<script>
	import Card from '$lib/components/imgCard.svelte';
</script>


<h1>Useful Minecraft Development Utilities</h1>
<p>Utilities that speeds up development and makes your server look professional.</p>

<div style="display: flex; gap: 14px;">
	<a href="" style="text-decoration: none;">
	<Card>
		<div>
			<h3>Small Text Converter</h3>
			<p>Easily convert normal text to small text, featuring reversibility and different font options!</p>
		</div>
		<img src="/media/temporary-img-cover.png" alt="Screenshot of the text converter page">
	</Card>
	</a>

	<a href="" style="text-decoration: none;">
	<Card>
		<div>
			<h3>Emoji Picker</h3>
			<p>Pick the perfect emoji for your server with a list of every textured emoji and their previews</p>
		</div>
		<img src="/media/temporary-img-cover.png" alt="Screenshot of the emoji picker page">
	</Card>
	</a>

	<a href="" style="text-decoration: none;">
		<Card>
			<div>
				<h3>Skript Inventory Slot ID Mappings</h3>
				<p>Visualize slot ID's and mapping values to speed up your Skript development.</p>
			</div>
			<img src="/media/temporary-img-cover.png" alt="Screenshot of the inventory ID mappings page">
		</Card>
		</a>	
</div>
