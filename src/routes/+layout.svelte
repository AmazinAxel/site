<!-- Wraps every page on the site, most important parent layout -->
<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { currentPage, isMenuOpen } from '$lib/assets/js/store';
	import { navItems } from '$lib/config';
	import { preloadCode } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import "../app.css"; // Kinda broken on cf idek y
	export let data;

	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };

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

	<link rel="stylesheet" href="/css/other.css"/>
</svelte:head>

<!-- Data below is used on every page throughout the site -->

<div class="layout" class:open={$isMenuOpen}>
	<Header/>
	{#key data.path}
		<main id="main" tabindex="-1" in:fade|global={transitionIn} out:fade|global={transitionOut}>
			<slot/> <!-- Main content goes here -->
			<Footer/>
		</main>
	{/key}
</div>