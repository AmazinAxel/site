<script>
	// Necessary for the SWR blog post system
	export let data;
</script>

<svelte:head>
	<title>AmazinAxel's Stuff</title>
</svelte:head>

<div id="hero">
	<h1>AmazinAxel</h1>
	<p>Game developer and fullstack web developer</p>	
</div>


<h3>🚧 This site is currently under construction! 🚧</h3>
<p>Please check back later when this website is completed.</p>
<br><br><hr><br>

<h2>My Projects</h2>

<h2>What I'm working on</h2>
<ul>
	{#each data.posts as { title, url, description }}
		<li>
			<a href={url} target="_blank" rel="noreferrer noopener">
				{title}
				{description}
			</a>
		</li>
	{/each}
</ul>

<h1>Learn more about me</h1>
