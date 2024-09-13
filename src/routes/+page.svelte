<script>
	import { fade } from 'svelte/transition';
	import Admonition from '$lib/components/admonition.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Section from '$lib/components/section.svelte';
	import Title from '$lib/components/title.svelte';
	import GithubCard from '$lib/components/githubCard.svelte';
	import ImgCardList from '$lib/components/imgCardList.svelte';
	import { shuffle } from '$lib/utils'
	import { navItems } from '$lib/config';

	// Necessary for the journal post system
	export let data;
	const { journalPosts } = data;
	const { projectItems } = data;
	const { githubRepos } = data;

	let randomSubtitle = "";
	let subtitleVisibility = false;
	let index = 0;

	const randomSubtitleList = [
		"Permafrost lead developer and project manager",
		"Avid Linux/NixOS user",
		"Full-stack web dev",
		"Open source enjoyer",
		"Linux server administrator & IT/IoT enthusiast",
		"Average 10x Skript user",
		"Professional Linux desktop ricer",
		"Upcoming (Neo)vim user",
	];

	const randomSubtitles = shuffle(randomSubtitleList);
	function updSubtitle(isInstant = false) {
		if (isInstant == true) {
			subtitleVisibility = true;
			randomSubtitle = randomSubtitles[index];
			index += 1
			return;
		}

		subtitleVisibility = false;

		// Get random element
		setTimeout(function() {
			randomSubtitle = randomSubtitles[index];
			subtitleVisibility = true;
		}, 300);

		// Get subtitles and remove previous subtitle from the list
		index += 1
		if (index == randomSubtitleList.length) index = 0;
	}

	// Random subtitle every 10 seconds
	setInterval(updSubtitle, 10000);
	updSubtitle(true)
</script>

<Title name="Home" dontShowHeader/>
<Hero>
	<h1>AmazinAxel</h1>
	{#if subtitleVisibility}
		<p out:fade={{ duration: 300 }} in:fade={{ duration: 300 }}>{randomSubtitle}</p>
	{/if}
</Hero>

<Admonition error>
	<h3>🚧 This site is currently under construction! 🚧</h3>
	<p>Please revisit later when this website is completed. In the meantime, visit <a href="https://journal.amazinaxel.com">my Journal site</a> for up-to-date information.</p>
</Admonition>
<br><hr>

<!-- Projects list -->
<Section link="projects" titleText="My Projects" icon="projects" right data={ projectItems }/>

<!-- Journal posts -->
<Section link="https://journal.amazinaxel.com" titleText="What I'm writing about" icon="journal" data={ journalPosts }/>
	
<!-- Github repos -->
<div class="section right">
	<a href="github" class="notextdeco"><h2>GitHub Repos</h2></a>
    <div class="cardListContainer">

		{#each githubRepos as { ...repo }}
			{#if repo.name !== "AmazinAxel" && !repo.archived}
				<GithubCard repo={repo}/>
			{/if}
		{/each}
	</div>
</div>

<!-- Minecraft utilities -->
<div class="section">
	<a href="tools" class="notextdeco"><h2>Minecraft Utilities</h2></a>
	<ImgCardList data={navItems[3].subitems} alt="Picture of"/>
</div>
<!-- Help articles 

<a href="help" class="notextdeco"><h2>Help articles</h2></a>
-->