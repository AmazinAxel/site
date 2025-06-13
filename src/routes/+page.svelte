<script lang="ts">
	import { showcases } from '$lib/config';
	import Carousel from '$lib/components/carousel.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Subtext from '$lib/components/subtext.svelte';
    import ToolItem from '$lib/components/toolItem.svelte';

	let { data } = $props(); // For journal posts
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/lists.css"/>
	<link rel="stylesheet" href="/css/carousel.css"/>
	<title>Home</title>
</svelte:head>
<Hero>
	<h1>AmazinAxel</h1>
</Hero>

<!-- Permafrost -->
<h2 class="sectionHeader">Featured Project</h2>
<div id="featured" class="blurredShadow" style="--background: url(/media/showcases/permafrost.png">
	<h1 style="justify-content: center; display: flex; margin: 0;" class="permafrostHeader">Permafrost</h1>
	<p>Explore, gather, survive, and build in an all-custom Minecraft server</p>
	<div style="height: 1rem;"></div>
	<a class="showMoreBtn button" href="https://permafrost.pages.dev">See more</a>
</div>

<!-- Showcases -->
<h2 class="sectionHeader">Other Projects</h2>
<Carousel data={showcases}>
	<!-- Other carousel items -->
	<div class="embla__slide blurredShadow">
		<h2>Minecraft Tools</h2>
		<ToolItem title="Text Converter" route="textconverter"/>
		<ToolItem title="Emoji Picker" route="emojipicker"/>
	</div>
</Carousel>

<!-- Journal posts -->
<Subtext header="What I'm writing about" subtext="Recent Journal entries" url="https://journal.amazinaxel.com"/>
<div class="flexGrid">
	{#each data.journalPosts as {link, title}}
		<div class="card gridCard backgroundIcon" style="--bg: url(/media/icons/journal.svg)">
			<a href={link} target="_blank" rel="noreferrer noopener">
				<h1>{title}</h1>
				<div class="contentFader"></div>
			</a>
		</div>
	{/each}
</div>

<!-- Contact -->
<br><hr>
<a class="showMoreBtn" href="contact" style="margin: 1rem 0 0 0; gap: 4px; font-weight: bold;">Contact me</a>
