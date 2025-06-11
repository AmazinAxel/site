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

<!-- Permafrost make it look background like hero but not blurry -->
<h2 class="sectionHeader">Featured Project</h2>
<div id="featured" style="--heroBackground: url(/media/showcases/permafrost-2.png">
	<h2 style="justify-content: center; display: flex; margin: 0;">
		<a class="external" href="https://permafrost.pages.dev">Permafrost</a>
	</h2>
	<p>Explore, gather, survive, and build in all all-custom survival Minecraft server</p>
</div>

<!-- Showcases -->
<div>
    <h2 class="sectionHeader">Other Projects</h2>
	<Carousel data={showcases}>
		<!-- Other carousel items -->
		<!--<div class="flexGrid">
			<ToolItem title="Text Converter" route="textconverter"/>
			<ToolItem title="Emoji Picker" route="emojipicker"/>
		</div>-->
	</Carousel>
</div>

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
