<!-- Wraps every page on the site, most important parent layout -->
<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { currentPage, isMenuOpen } from '$lib/assets/js/store';
	import { navItems } from '$lib/config';
	import { preloadCode } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
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
	<!-- Top: least important styles | bottom: most important styles -->
	<link rel="stylesheet" href="/css/header-and-footer.css"/>
	<link rel="stylesheet" href="/css/layout.css"/>
	<link rel="stylesheet" href="/css/typography.css"/>
	<style lang="postcss">
		@tailwind base;
    	@tailwind components;
    	@tailwind utilities;

		@layer main {
			@keyframes slide_in_left {
				from {
					opacity: 0;
					transform: translateX(-2rem);
				}
				to {
					opacity: 1;
					transform: translateX(0);
				}
			}
		}
	</style>
</svelte:head>

<!-- Data below is used on every page throughout the site -->

<div class="layout" class:open={$isMenuOpen}>
	<Header/>
	{#key data.path}
		<main id="main-content" tabindex="-1" in:fade|global={transitionIn} out:fade|global={transitionOut}>
			<slot/> <!-- Main content goes here -->
			<Footer/>
		</main>
	{/key}
</div>