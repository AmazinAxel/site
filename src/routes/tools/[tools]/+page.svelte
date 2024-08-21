<script>
    export let data;
    const { pageContent } = data;
</script>

<svelte:head>
	<title>article - AmazinAxel's Tools</title>
</svelte:head>

<svelte:component this={pageContent}/>