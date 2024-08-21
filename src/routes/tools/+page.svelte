<svelte:head>
	<title>Utilities</title>
</svelte:head>

<script>
	import Card from '$lib/components/imgCard.svelte';
</script>


<h1>Useful Minecraft Development Utilities</h1>
<p>
	I'm not a person who wants to reinvent the wheel.
	These utilities were created because there were no
	other better alternatives. These utilities help to speed
	up development time by reducing wasted time and
	optimizing your existing tools.
</p>

<div class="gridLayout">
	<a href="/tools/textconverter/" style="text-decoration: none;" class="gridItem">
	<Card>
		<div>
			<h3>Small Text Converter</h3>
			<p>Easily convert normal text to small text commonly seen in new servers.</p>
		</div>
		<img src="/media/temporary-img-cover.png" alt="Screenshot of the text converter page">
	</Card>
	</a>

	<a href="/tools/emojipicker" style="text-decoration: none;" class="gridItem">
	<Card>
		<div>
			<h3>Minecraft Emoji Picker</h3>
			<p>Pick the perfect emoji for your server with a list of every textured emoji and their previews.</p>
		</div>
		<img src="/media/temporary-img-cover.png" alt="Screenshot of the emoji picker page">
	</Card>
	</a>

	<a href="/tools/inventoryids" style="text-decoration: none;" class="gridItem">
		<Card>
			<div>
				<h3>Skript Inventory Slot ID Mappings</h3>
				<p>Visualize slot IDs and see mapping values to speed up Skript development.</p>
			</div>
			<img src="/media/temporary-img-cover.png" alt="Screenshot of the inventory ID mappings page">
		</Card>
		</a>	
</div>
