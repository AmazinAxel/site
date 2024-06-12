<script>
	import { isMenuOpen } from '../assets/js/store';
	import HamburgerSVG from '$lib/components/svg/HamburgerSVG.svelte';
	import XSVG from '$lib/components/svg/XSVG.svelte';

	export let closeOnly = false;

	const toggleIsMenuOpen = () => {
		isMenuOpen.set(!$isMenuOpen);
	};
</script>

<button
	on:click={toggleIsMenuOpen}
	aria-pressed={$isMenuOpen}
	class="menu-button"
	tabindex={$isMenuOpen || !closeOnly ? '0' : '-1'}
>
<!-- todo add text that says 'toggle hamburger menu' -->
	{#if closeOnly}
		<XSVG/>
	{:else}
		<HamburgerSVG/>
	{/if}
</button>
