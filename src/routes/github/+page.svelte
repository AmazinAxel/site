<script>
	// Necessary for the Github repo system to work
	export let data;
	import Admonition from '$lib/components/admonition.svelte';
	import Title from '$lib/components/title.svelte';
	import GithubCard from '$lib/components/githubCard.svelte';
</script>

<Title name="GitHub Projects"/>

<div class="gridLayout">
{#if data.noConnection}
	<Admonition error>Could not connect to the GitHub API! Repositories cannot be shown.</Admonition>
{:else}
	{#each data.repos as { ...repo }}
		{#if repo.name !== "AmazinAxel"}
			<a href={repo.homepage || repo.html_url} style="text-decoration: none; flex: 32%;">
				<GithubCard repo={repo}/>
			</a>
		{/if}
	{/each}
	<Admonition info style="display: flex; flex: 33%;">
		<div style="margin: auto">
			<p>This list excludes some repositories. View my (updated) repository list on my GitHub page</p> 
			<a href="https://github.com/AmazinAxel?tab=repositories"><button>View Repoositories on GitHub</button></a>
		</div>
	</Admonition>
{/if}
</div>