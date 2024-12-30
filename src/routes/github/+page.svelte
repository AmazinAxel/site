<script>
	
	import Admonition from '$lib/components/admonition.svelte';
	import Title from '$lib/components/title.svelte';
	import GithubCard from '$lib/components/githubCard.svelte';
	
	// Necessary for the Github repo system to work
	let { data } = $props();
</script>

<Title name="GitHub Repos"/>

<div class="gridLayout">
{#if data.noConnection}
	<Admonition error>Could not connect to the GitHub API! Repositories cannot be shown.</Admonition>
{:else}
	{#each data.repos as { ...repo }}
		<a href={repo.homepage || repo.html_url}>
			<GithubCard repo={repo}/>
		</a>
	{/each}
{/if}
</div>

<a class="showMoreBtn" href="https://github.com/AmazinAxel" style="margin-top: 1rem">View Github profile</a>
