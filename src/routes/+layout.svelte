<!-- Wraps every page on the site, most important parent layout -->
<script>
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { currentPage, isMenuOpen } from '$lib/assets/js/store';
	import { navItems } from '$lib/config';
	import { preloadCode } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	export let data;

	// Delays and fadeouts are glitchy atm ;(
	const transitionIn = { duration: 150 };

	$: currentPage.set(data.path); // Sets global store with the current site path

	// Prefetch all top-level routes for better speed
	onMount(() => {
		const routes = navItems.map((item) => item.route);
		preloadCode(...routes);
	});

</script>
<svelte:head>
	<!-- Top: least important styles | bottom: most important styles -->
	<link rel="stylesheet" href="/css/header-and-footer.css"/>
	<link rel="stylesheet" href="/css/layout.css"/>
	<link rel="stylesheet" href="/css/typography.css"/>
	<link rel="stylesheet" href="/css/vars.css"/>
	<link rel="stylesheet" href="/css/reset.css"/>
	<link rel="stylesheet" href="/css/other.css"/>
</svelte:head>

<!-- Data below is used on every page throughout the site -->

<div class="layout" class:open={$isMenuOpen}>
	<Header/>
	{#key data.path}
		<main tabindex="-1" in:fade|local={transitionIn}>
			<div id="content">
				<slot/> <!-- Main content goes here -->
			</div>
			<Footer/>
		</main>
	{/key}
</div>