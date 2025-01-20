<!-- Wraps every page on the site, most important parent layout -->
<script>
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { pages } from '$lib/config';
	import { preloadCode } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { page } from '$app/state';
	let { data, children } = $props();
	const { date } = data;

	// Delays and fadeouts are glitchy atm ;(
	const transitionIn = { duration: 150 };

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

<div class="layout">
	<Header/>
	{#key page.url.pathname}
		<main tabindex="-1" in:fade|local={transitionIn}>
			<div id="content">
				{@render children?.()}
			</div>
			<Footer date={date}/>
		</main>
	{/key}
</div>