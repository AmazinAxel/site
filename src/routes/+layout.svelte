<!-- Wraps every page on the site, most important parent layout -->
<script>
	import { pages } from '$lib/config';
	import { preloadCode } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { page } from '$app/state';
	let { data, children } = $props();
	const { date } = data;

	// Prefetch all top-level routes for better speed
	onMount(() => {
		const routes = pages.map((page) => page.route);
		preloadCode(...routes);
	});
</script>
<svelte:head>
	<!-- Top: least important styles -- bottom: most important styles -->
	<link rel="stylesheet" href="/css/vars.css"/>
	<link rel="stylesheet" href="/css/footer.css"/>
	<link rel="stylesheet" href="/css/layout.css"/>
	<link rel="stylesheet" href="/css/typography.css"/>
	<link rel="stylesheet" href="/css/reset.css"/>
	<link rel="stylesheet" href="/css/other.css"/>
</svelte:head>

{#key page.url.pathname}
	<div in:fade|local={{ duration: 150 }} id="content">
		{@render children?.()}
	</div>
	<footer>
		<p>&copy;2016-{new Date().getFullYear()} AmazinAxel (Alec) • All Rights Reserved</p>
		<a href="https://github.com/AmazinAxel/site" class="date">Site last generated on {date}</a>
	</footer>
{/key}