<script>
    let { children } = $props();
</script>
<svelte:head>
	<link rel="stylesheet" href="/css/options.css"/>
</svelte:head>
<div class="selector">
    <h5 style="position: absolute; margin-top: -2rem; margin-left: 0.65rem;">OPTIONS</h5>
    <div style="height: 0.5rem;"></div>
    {@render children?.()}
</div>
