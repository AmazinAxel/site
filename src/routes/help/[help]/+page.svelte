<script>
    export let data;
    const { articleContent } = data;
    const { title } = data.meta;
</script>

<svelte:head>
	<title>{ title } - AmazinAxel's Help Center</title>
</svelte:head>

<svelte:component this={ articleContent }/>