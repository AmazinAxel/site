<script>
	// Necessary for the SWR blog post system
	export let data;
	let randomSubtitle = "";

	const randomSubtitles = [
		"Permafrost lead developer and project manager", 
		"Back-end web developer",
		"Not a good low-level programmer",
		"Enjoys Linux server administrating & IT/IoT",
		"Professional AI prompt engineer",
		"Minecraft server manager and developer",
		"Avid Linux/NixOS user",
		"Addicted to Minecraft server development",
		"Average Skript enjoyer"
	];

	/*fixing text converter not updating text after clicking the button */

	function getRandomSubtitle() {
		
		// Get subtitles and remove previous subtitle from the list
		const subtitles = randomSubtitles.filter(word => word !== randomSubtitle);

		// Get random element
		randomSubtitle = subtitles[subtitles.length * Math.random() | 0];
	}

	const interval = setInterval(function() {
		getRandomSubtitle()
	}, 5000);
	getRandomSubtitle()


	import Card from '$lib/components/imgCard.svelte';
</script>

<svelte:head>
	<title>AmazinAxel's Stuff</title>
</svelte:head>

<div id="hero">
	<h1>AmazinAxel</h1>
	<p>{randomSubtitle}</p>	
</div>

<Card>
	<h3>🚧 This site is currently under construction! 🚧</h3>
	<p>Please revisit later when this website is completed. In the meantime, check out <a href="https://alecshome.com">my other site</a> for up-to-date information.</p>
</Card>
<hr>

<h2>My Projects</h2>
<h2>What I'm working on</h2>
<ul>
	{#each data.posts as { title, url, description }}
		<li>
			<a href={url} target="_blank" rel="noreferrer noopener">
				<h4>{title}</h4>
				{description.replaceAll("and#39;", "'").replaceAll("amp;", "").split(/(?=\.)/g).slice(0, 10).join('')}...
			</a>
		</li>
	{/each}
</ul>

<h1>Learn more about me</h1>
