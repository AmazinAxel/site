<script lang="ts">
	import { otherShowcases } from '$lib/config';
	import Carousel from '$lib/components/carousel.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Subtext from '$lib/components/subtext.svelte';
    import ToolItem from '$lib/components/toolItem.svelte';

	let { data } = $props(); // For journal posts
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/home/lists.css"/>
	<link rel="stylesheet" href="/css/carousel.css"/>
	<title>Home</title>
</svelte:head>
<Hero>
	<h1>AmazinAxel</h1>
</Hero>

<!--<h2 class="sectionHeader">A little about me</h2>
<div id="about" style="display: flex; padding: 1rem">
	<p style="text-align: left; width: 100%;">...</p>
</div>-->

<!-- Permafrost -->
<h2 class="sectionHeader">Minecraft server projects</h2>
<div id="featured" class="blurredShadow" style="--background: url(/media/showcases/permafrost.png">
	<h1 style="justify-content: center; display: flex; margin: 0; font-size: 3rem;" class="permafrostHeader">Permafrost</h1>
	<h2 style="font-size: 1.1rem; margin: 0; font-weight: 400; font-family: 'Sora';">Snowy hardcore survival server</h2>
	<div style="height: 1rem;"></div>
	<a class="showMoreBtn button" href="https://permafrostmc.com" target="_blank" rel="noopener noreferrer">Playtesting soon!</a>
</div>

<!-- <div id="featured" class="blurredShadow" style="--background: url(/media/showcases/nocturn.png"> -->
	<!-- <h1 style="justify-content: center; display: flex; margin: 0; font-size: 3rem;">Nocturn</h1> -->
	<!-- <h2 style="font-size: 1.1rem; margin: 0; font-weight: 400; font-family: 'Sora';">Murder mystery server with a ton of roles</h2> -->
	<!-- <div style="height: 1rem;"></div> -->
	<!-- <a class="showMoreBtn button" href="https://permafrostmc.com" target="_blank" rel="noopener noreferrer">nocturn.minekeep.gg</a> -->
<!-- </div> -->

<!-- Showcases -->
<h2 class="sectionHeader">Other projects</h2>
<Carousel data={otherShowcases}>
	<!-- Other carousel items -->
	<div class="embla__slide blurredShadow">
		<h2>MC dev tools</h2>
		<ToolItem title="Text Converter" route="textconverter"/>
		<ToolItem title="Emojis" route="emojipicker"/>
	</div>
</Carousel>

<!-- Journal posts -->
<Subtext header="What I'm writing about" subtext="Journal entries" url="https://journal.amazinaxel.com"/>
<div class="flexGrid">
	{#each data.journalPosts as {link, title}}
		<div class="card gridCard backgroundIcon" style="--bg: url(/media/icons/journal.svg)">
			<a href={link} target="_blank" class="external journalExternal" rel="noreferrer noopener">
				<h1>{title}</h1>
				<div class="contentFader"></div>
			</a>
		</div>
	{/each}
</div>

<!-- Contact -->
<br><hr>
<a class="showMoreBtn" href="contact" style="margin: 1rem 0 0 0; gap: 4px; font-weight: bold;">Contact me</a>
