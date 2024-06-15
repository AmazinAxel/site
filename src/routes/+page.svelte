<script>
	// Necessary for the blog post system
	export let data;
</script>

<style>
	#attentionGrabber {
		text-align: center;
    	height: 25rem;
    	display: grid;
    	align-items: end;
    	align-content: center;
	}
	#attentionGrabber h1 {
		margin: 0;
	}
</style>

<svelte:head>
	<title>AmazinAxel's Stuff</title>
</svelte:head>

<div id="attentionGrabber">
	<h1>AmazinAxel</h1>
	<p>Game developer and fullstack web developer</p>	
</div>


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
