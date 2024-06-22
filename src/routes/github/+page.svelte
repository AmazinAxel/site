<script>
	// Necessary for the Github repo system to work
	export let data;
</script>
<svelte:head>
	<title>GitHub Projects</title>
</svelte:head>


{#each data.repos as { ...repo }}
	{repo.name}
{/each}