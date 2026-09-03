<script lang="ts">
	import { otherShowcases, minecraftServers } from '$lib/config';
	import Carousel from '$lib/components/carousel.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Subtext from '$lib/components/subtext.svelte';
    import ToolItem from '$lib/components/toolItem.svelte';

	let { data } = $props(); // For journal posts

	let copied = $state('');
	let copiedTimeout: ReturnType<typeof setTimeout>;

	const copyIp = (ip: string) => {
		navigator.clipboard.writeText(ip);
		copied = ip;
		clearTimeout(copiedTimeout);
		copiedTimeout = setTimeout(() => copied = '', 2000);
	};
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

<!-- MC servers -->
<h2 class="sectionHeader">Minecraft server projects</h2>
<div class="featuredList">
	{#each minecraftServers as { title, image, description, align, headerClass, url, label, copy }}
		<div class="featured blurredShadow align-{align}" style="--background: url(/media/showcases/{image})">
			<div class="featuredBorder"></div>
		<h1 class={headerClass}>{title}</h1>
			<h2>{description}</h2>
			{#if copy}
				<button class="button" onclick={() => copyIp(copy)}>{copied === copy ? 'IP copied!' : copy}</button>
			{:else}
				<a class="showMoreBtn button" href={url} target="_blank" rel="noopener noreferrer">{label}</a>
			{/if}
		</div>
	{/each}
</div>

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
<Subtext header="What I'm writing about" subtext="Recent journal entries" url="https://journal.amazinaxel.com"/>
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
