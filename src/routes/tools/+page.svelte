<script>
	import Title from '$lib/components/title.svelte';
	import Card from '$lib/components/imgCard.svelte';
	import Admonition from '$lib/components/admonition.svelte';
</script>

<Title name="Utilities" dontShowHeader/>
<h1>Minecraft Development Tools</h1>

<Admonition info>
<p>
	After much frustration from using other tools, I
	created these to do what other tools didn't.
	My tools are designed to optimize development time
	by providing a quicker & improved alternative to
	existing development tools.
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
