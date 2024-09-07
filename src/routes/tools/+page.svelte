<script>
	import Title from '$lib/components/title.svelte';
	import Card from '$lib/components/imgCard.svelte';
	import Admonition from '$lib/components/admonition.svelte';
	import { navItems } from '$lib/config';
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
	{#each navItems[3].subitems as tool}
		<a href="/tools/{tool.url}" style="text-decoration: none;" class="gridItem">
		<Card>
			<div>
				<h3>{tool.title}</h3>
				<p>{tool.description}</p>
			</div>
			<img src="/media/{tool.image}" alt="Screenshot of the {tool.title} page">
		</Card>
		</a>
	{/each}
</div>
