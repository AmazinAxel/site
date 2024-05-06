<!-- This is the global layout file; it "wraps" every page on the site. (Or more accurately: is the parent component to every page component on the site.) -->
<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { currentPage, isMenuOpen } from '$lib/assets/js/store';
	import { navItems } from '$lib/config';
	import { preloadCode } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import '../styles/globals.css';
	export let data;

	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };

	$: currentPage.set(data.path); // Sets global store with the current site path

	// Pre-fetch all top-level routes in the background (for better speed)
	onMount(() => {
		const navRoutes = navItems.map((item) => item.route);
		preloadCode(...navRoutes);
	});

</script>
<svelte:head>
	<link rel="stylesheet" href="/css/typography.css"/>
	<link rel="stylesheet" href="/css/animation.css"/>
	<link rel="stylesheet" href="/css/header-and-footer.css"/>
</svelte:head>

<!-- Data below is used on every page throughout the site -->

<div class="layout" class:open={$isMenuOpen}>
	<Header/>
	{#key data.path}
		<main id="main-content" tabindex="-1" in:fade|global={transitionIn} out:fade|global={transitionOut}>
			<slot/> <!-- Main content goes here -->
		</main>
	{/key}
	<Footer/>
</div>
