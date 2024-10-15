<script>
    export let data;
    const { articleContent } = data;
    const { title } = data.meta;
</script>
<svelte:head> <!-- Custom title ending -->
	<title>{ title } - AmazinAxel's Resources</title>
</svelte:head>
<svelte:component this={ articleContent }/>
