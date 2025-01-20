<script>
	import Carousel from '$lib/components/carousel.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Section from '$lib/components/section.svelte';
	import ImgCardList from '$lib/components/imgCardList.svelte';
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
<Section link="https://journal.amazinaxel.com" titleText="What I'm writing about" icon="journal" data={ journalPosts }/>

<!-- Minecraft utilities -->
<div class="section right altBackground">
	<h2>Minecraft Utilities</h2>
	<ImgCardList data={pages[1].subitems} alt="Picture of"/>
</div>

<!-- Contact -->
<div class="section" style="padding-top: 1rem;">
	<h4 style="flex: 50%; margin: 0;">Contact me</h4>
	<a class="showMoreBtn" href="contact" style="margin: unset">Send me a message</a>
</div>