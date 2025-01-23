<script>
	import Carousel from '$lib/components/carousel.svelte';
	import Hero from '$lib/components/hero.svelte';
	import { pages } from '$lib/config';
	import { projects } from '$lib/config';

	// Necessary for the journal post system
	let { data } = $props();
	const { journalPosts } = data;
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/lists.css"/>
	<link rel="stylesheet" href="/css/carousel.css"/>
	<title>Home</title>
</svelte:head>
<Hero>
	<h1>AmazinAxel</h1>
</Hero>

<!-- Projects list -->
<div class="altBackground">
    <h2>My Projects</h2>
	<Carousel data={projects}></Carousel>
</div>

<!-- Journal posts -->
<h2>
	<a href="https://journal.amazinaxel.com">What I'm writing about</a>
	<a href="https://journal.amazinaxel.com"><span class='subtext'>Recent Journal entries</span></a>
</h2>
<div class="flexGrid">
	{#each journalPosts as { title, link }}
		<div class="card gridCard backgroundIcon" style="--bg: url(/media/icons/journal.svg)">
			<a href={link} target="_blank" rel="noreferrer noopener">
				<h1>{title}</h1>
				<div class="contentFader"></div>
			</a>
		</div>
	{/each}
</div>
<br>

<!-- Minecraft utilities -->
<div class="section right altBackground" id="utils">
	<h2>Minecraft Utilities</h2>
	<div class="flexGrid">
		{#each pages[1].subitems as util}
			<a href="/tools/{util.route}" class="gridItem" style="flex: 30%">
				<div class="card imgCard">
					<picture>
						<img src="/media/tools/previews/{util.route}.png" class="noImgStyle" alt={util.title + "preview"}>
					</picture>
					<h3>{util.title}</h3>
					{#if util.notFinished} <p style="
						margin: 0;
						padding: 0;
						position: absolute;
						bottom: 2px;
						left: 0;
						width: 100%;
						font-size: 0.8rem;">
						🚧 Not finished 🚧
					</p>
					{/if}
					<div class="contentFader"></div>
				</div>
			</a>
		{/each}
	</div>
</div>

<!-- Contact -->
<br><hr>
<a class="showMoreBtn" href="contact" style="margin: 1rem 0 0 0; gap: 4px;"><strong>Contact me</strong>• Send me a message</a>
