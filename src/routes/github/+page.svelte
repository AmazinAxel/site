<script>
	// Necessary for the Github repo system to work
	export let data;
	import Admonition from '$lib/components/admonition.svelte';
</script>
<svelte:head>
	<title>GitHub Projects</title>
</svelte:head>

{#if data.noConnection}
	<Admonition builderror>Could not connect to the GitHub API! Repositories cannot be shown.</Admonition>
{:else}
	{#each data.repos as { ...repo }}
		{#if repo.name !== "AmazinAxel"}
		<a href={repo.html_url} style="text-decoration: none">
			
			<div class="card backgroundIcon" style="--bg: url(/media/icons/github.svg)">
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
			
				{#if repo.fork}
					This is a fork!<br>
				{/if}

				{#if repo.archived}
					This repository is archived and not maintained anymore.
				{/if}
			</div>
		</a>
		{/if}
	{/each}
{/if}