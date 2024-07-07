<script>
    export let data;
    const { articleContent } = data;
</script>

<svelte:head>
	<title>Help Center</title>
</svelte:head>

<svelte:component this={ articleContent }/>