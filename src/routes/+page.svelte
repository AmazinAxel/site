<script>
	import { fade } from 'svelte/transition';

	// Necessary for the SWR blog post system
	export let data;
	let randomSubtitle = "";
	let subtitleVisibility = false;

	// TODO: update randomness calc to start at a random index
	// and increase by 1 instead of choosing a random subtitle
	const randomSubtitles = [
		"Permafrost lead developer and project manager",
		"Back-end web dev",
		"Not a good low-level programmer",
		"Enjoys Linux server administrating & IT/IoT",
		"Professional AI prompt engineer",
		"Minecraft server manager and developer",
		"Avid Linux/NixOS user",
		"Addicted to Minecraft server development",
		"Average Skript enjoyer",
		"Stuck in the Linux rabbit hole"
	];

	function updSubtitle() {
		subtitleVisibility = false;
		// Get subtitles and remove previous subtitle from the list
		const subtitles = randomSubtitles.filter(word => word !== randomSubtitle);

		// Get random element
		setTimeout(function() {
			randomSubtitle = subtitles[subtitles.length * Math.random() | 0];
			subtitleVisibility = true;		
		}, 500);
	}

	// Random subtitle every 2.5 seconds
	setInterval(updSubtitle, 2500);
	updSubtitle()


	import Card from '$lib/components/imgCard.svelte';
</script>

<svelte:head>
	<title>AmazinAxel's Stuff</title>
</svelte:head>

<div id="hero">
	<h1>AmazinAxel</h1>
	{#if subtitleVisibility}
		<p out:fade={{ duration: 500 }} in:fade={{ duration: 500 }}>{randomSubtitle}</p>
	{/if}	
</div>

<Card>
	<h3>🚧 This site is currently under construction! 🚧</h3>
	<p>Please revisit later when this website is completed. In the meantime, check out <a href="https://alecshome.com">my other site</a> for up-to-date information.</p>
</Card>
<hr>

<h2>My Projects</h2>
<h2>What I'm working on</h2>
<div class="cardListContainer">
	{#each data.posts as { title, url, description }}
	<div class="listCard card">
		<a href={url} target="_blank" rel="noreferrer noopener" style="text-decoration: none;">
			<h4>{title}</h4>
			{description.replaceAll("and#39;", "'").replaceAll("amp;", "").split(/(?=\.)/g).slice(0, 10).join('')}...
		</a>
	</div>
	{/each}
</div>

<h1>Learn more about me</h1>

<h1>GitHub repositories</h1>

<h1>Minecraft utilities</h1>

<h1>Help articles</h1>
