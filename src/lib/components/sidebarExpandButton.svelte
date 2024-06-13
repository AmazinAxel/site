<script>
	import { isMenuOpen } from '../assets/js/store';

	export let closeOnly = true;

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
	<img src="/media/icons/xmark.svg" alt="Toggle hamburger menu" title="Toggle hamburger menu"/>
</button>
