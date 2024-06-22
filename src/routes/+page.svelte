<script>
	// Necessary for the SWR blog post system
	export let data;

	const randomSubtitles = [
		"Permafrost lead developer and manager", 
		"Back-end web developer",
		"Obviously not a good Svelte developer",
		"Terrible at low-level languages",
		"AI prompt engineer",
		"Minecraft server manager and developer",
		"Avid Linux and NixOS user",
		"Average Skript enjoyer"
	];

	/*TODO make this work
	/* after finishing this then move on to fixing text converter
	not updating text after clicking the button */

	function getRandomSubtitle() {
		
		// Get random element
		const subtitle = items[items.length * Math.random() | 0];
	}

	import Card from '$lib/components/imgCard.svelte';
</script>

<svelte:head>
	<title>AmazinAxel's Stuff</title>
</svelte:head>

<div id="hero">
	<h1>AmazinAxel</h1>
	<p>Game developer and fullstack web developer</p>	
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
