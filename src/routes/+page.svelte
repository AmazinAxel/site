<script>
	import Carousel from '$lib/components/carousel.svelte';
	import Hero from '$lib/components/hero.svelte';
	import { tools } from '$lib/config';
	import { projects } from '$lib/config';

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

<!-- Projects list -->
<div>
    <h2>Projects</h2>
	<Carousel data={projects}></Carousel>
</div>

<!-- Permafrost
<h2>
	<a href="https://permafrost.amazinaxel.com">Permafrost</a>
	<a href="https://permafrost.amazinaxel.com"><span class='subtext'>Custom Minecraft survival</span></a>
</h2>
<div class="altBackground">
	<p></p>
</div>-->

<!-- Minecraft utilities -->
<div class="section right altBackground" id="utils" style="margin-top: 1rem">
	<h2>Minecraft Utilities</h2>
	<div class="flexGrid">
		{#each tools as tool}
			<a href="/tools/{tool.route}" class="gridItem" style="flex: 30%">
				<div class="card imgCard">
					<picture>
						<img src="/media/tools/previews/{tool.route}.png" class="noImgStyle" alt={tool.title + "preview"}>
					</picture>
					<h3>{tool.title}</h3>
					<div class="contentFader"></div>
				</div>
			</a>
		{/each}
	</div>
</div>

<!-- Journal posts -->
<h2>
	<a href="https://journal.amazinaxel.com">What I'm writing about</a>
	<a href="https://journal.amazinaxel.com"><span class='subtext'>Recent Journal entries</span></a>
</h2>
<div class="flexGrid">
	{#each [data.journalPosts] as {link, title}}
		<div class="card gridCard backgroundIcon" style="--bg: url(/media/icons/journal.svg)">
			<a href={link} target="_blank" rel="noreferrer noopener">
				<h1>{title}</h1>
				<div class="contentFader"></div>
			</a>
		</div>
	{/each}
</div>

<!-- Contact -->
<br><br><hr>
<a class="showMoreBtn" href="contact" style="margin: 1rem 0 0 0; gap: 4px; font-weight: bold;">Contact me</a>
