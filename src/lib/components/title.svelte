<script>
    let { name, dontShowHeader } = $props();
</script>
<svelte:head>
	<title>{ name } - AmazinAxel.com</title>
</svelte:head>

{#if !dontShowHeader}<h1>{name}</h1>{/if}