<script>
	import { fade } from 'svelte/transition';
	import Card from '$lib/components/imgCard.svelte';

	// Necessary for the SWR blog post system
	export let data;
	let randomSubtitle = "";
	let subtitleVisibility = false;
	let index = 0;

	// Shuffle list
	function shuffle(arr) {
		for (let i = arr.length - 1; i > 0; i--) {
    		// pick a random index from 0 to i inclusive
    		const j = Math.floor(Math.random() * (i + 1)); // at random index
    		// Swap arr[i] with the element
    		[arr[i], arr[j]] = [arr[j], arr[i]];
  		}
		return arr;
	}

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
		"Upcoming Neovim user"
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
		}, 500);

		// Get subtitles and remove previous subtitle from the list
		index += 1
		if (index == randomSubtitleList.length) index = 0;
	}

	// Random subtitle every 2.5 seconds
	setInterval(updSubtitle, 2500);
	updSubtitle(true)
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
	<!--{#each data.posts as { title, url, description }}
	<div class="listCard card">
		<a href={url} target="_blank" rel="noreferrer noopener" style="text-decoration: none;">
			<h4>{title}</h4>
			{description.replaceAll("and#39;", "'").replaceAll("amp;", "").split(/(?=\.)/g).slice(0, 10).join('')}...
		</a>
	</div>
	{/each}-->
</div>

<h1>Learn more about me</h1>

<h1>GitHub repositories</h1>

<h1>Minecraft utilities</h1>

<h1>Help articles</h1>
