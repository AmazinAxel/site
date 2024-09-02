<script>
	import Title from '$lib/components/title.svelte';
	import Card from '$lib/components/imgCard.svelte';
	import Admonition from '$lib/components/admonition.svelte';
</script>

<Title name="Utilities"/>

<h1>Useful Minecraft Development Utilities</h1>
<Admonition info>
<p>
	As much as I hate to reinvent the wheel,
	these utilities were created because there were no
	other better alternatives. These tools can help to
	speed up development time by reducing wasted time.
</p>
</Admonition>

<div class="gridLayout">
	<a href="/tools/textconverter/" style="text-decoration: none;" class="gridItem">
	<Card>
		<div>
			<h3>Small Text Converter</h3>
			<p>Easily convert text to small text commonly seen in new servers.</p>
		</div>
		<img src="/media/temporary-img-cover.png" alt="Screenshot of the text converter page">
	</Card>
	</a>

	<a href="/tools/emojipicker" style="text-decoration: none;" class="gridItem">
	<Card>
		<div>
			<h3>Minecraft Emoji Picker</h3>
			<p>Pick the perfect emoji with a list of every character preview.</p>
		</div>
		<img src="/media/temporary-img-cover.png" alt="Screenshot of the emoji picker page">
	</Card>
	</a>

	<a href="/tools/inventoryids" style="text-decoration: none;" class="gridItem">
		<Card>
			<div>
				<h3>Skript Inventory IDs</h3>
				<p>Visualize slot numbers and see mapping values to speed up Skript development.</p>
			</div>
			<img src="/media/temporary-img-cover.png" alt="Screenshot of the inventory ID mappings page">
		</Card>
		</a>
</div>
