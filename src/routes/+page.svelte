<script>
	import { fade } from 'svelte/transition';
	import Card from '$lib/components/imgCard.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Section from '$lib/components/section.svelte';
	import { shuffle } from '$lib/utils'

	// Necessary for the journal post system
	export let data;
	const { journalPosts } = data;
	const { projectItems } = data;
	console.log(projectItems)
	let randomSubtitle = "";
	let subtitleVisibility = false;
	let index = 0;

	const randomSubtitleList = [
		"Permafrost lead developer and project manager",
		"Full-stack web dev",
		"Not a good low-level programmer",
		"Enjoys Linux server administrating & IT/IoT",
		"Minecraft server manager and developer",
		"Avid Linux/NixOS user",
		"Addicted to Minecraft server development",
		"Average Skript enjoyer",
		"Stuck in the Linux rabbit hole",
		"Lofi and synthwave music enjoyer",
		"Bubble tea addict",
		"Upcoming Neovim user",
		"Professional Linux desktop ricer"
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

<Hero>
	<h1>AmazinAxel</h1>
	{#if subtitleVisibility}
		<p out:fade={{ duration: 300 }} in:fade={{ duration: 300 }}>{randomSubtitle}</p>
	{/if}
</Hero>

<Card>
	<h3>🚧 This site is currently under construction! 🚧</h3>
	<p>Please revisit later when this website is completed. In the meantime, check out <a href="https://journal.amazinaxel.com">my other site</a> for up-to-date information.</p>
</Card>
<hr>

<Section link="projects" titleText="My Projects" icon="projects" right data={ projectItems }/>

<Section link="https://journal.amazinaxel.com" titleText="What I'm writing about" icon="journal" data={ journalPosts }/>	
	
<a href="github" class="notextdeco"><h2>GitHub repositories</h2></a>
<!--{#each data.repos as { ...repo }}
	{#if repo.name !== "AmazinAxel" && !repo.archived}
	<a href={repo.html_url} style="text-decoration: none">
		<div class="card">
			<h3>{repo.name}</h3>
			<p>{repo.description}</p>

			<p>Forks: {repo.forks_count}<br>
			Issues: {repo.open_issues_count}<br>
			Stars: {repo.stargazers_count}<br>
			{#if repo.homepage}
				Homepage: {repo.homepage}<br>
			{/if}
			{#if repo.language}
				Language: {repo.language}<br>
			{/if}
			Watchers: {repo.watchers_count}<br>
			</p>

		</div>
	</a>
	{/if}
{/each}-->
<a href="tools" class="notextdeco"><h2>Minecraft utilities</h2></a>

<a href="help" class="notextdeco"><h2>Help articles</h2></a>
