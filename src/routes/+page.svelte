<script>
	import Admonition from '$lib/components/admonition.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Section from '$lib/components/section.svelte';
	import Title from '$lib/components/title.svelte';
	import ImgCardList from '$lib/components/imgCardList.svelte';
	import { shuffle } from '$lib/utils'
	import { navItems } from '$lib/config';

	// Necessary for the journal post system
	export let data;
	const { journalPosts } = data;
	const { projectItems } = data;

	const randomSubtitle = shuffle([
		"Permafrost lead developer and project manager",
		"Open source enjoyer",
		"Professional Linux sdesktop ricer",
	])[0];
</script>

<Title name="Home" dontShowHeader/>
<Hero>
	<h1>AmazinAxel</h1>
	<!--<p>{randomSubtitle}</p>-->
</Hero>

<Admonition error>
	<h3>🚧 Under construction 🚧</h3>
	<p>
		<strong>Please revisit later when this website is completed.</strong> 
		<br>
		Expect some features to be missing and/or broken.
	</p>
</Admonition>
<br>

<!-- Projects list -->
<Section link="projects" titleText="My Projects" icon="projects" right data={ projectItems }/>

<!-- Journal posts -->
<Section link="https://journal.amazinaxel.com" titleText="What I'm writing about" icon="journal" data={ journalPosts }/>
	
<!-- Minecraft utilities -->
<div class="section right">
	<a href="tools" class="notextdeco"><h2>Minecraft Utilities</h2></a>
	<ImgCardList data={navItems[3].subitems} alt="Picture of"/>
</div>
<!-- Help articles 

<a href="help" class="notextdeco"><h2>Help articles</h2></a>
-->