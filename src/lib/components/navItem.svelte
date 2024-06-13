<script>
	import { currentPage, isMenuOpen } from '../assets/js/store';

	export let href;
	export let icon;

	$: isCurrentPage = $currentPage.startsWith(href);

	const maybeCloseMenu = () => {
		if (href != $currentPage) {
			isMenuOpen.set(false);
		}
	};
</script>

<li>
	<a
		{href}
		on:click={maybeCloseMenu}
		class:active={isCurrentPage}
		aria-current={isCurrentPage ? 'page' : false}
	>
		<img src="/media/icons/{icon}.svg" alt="{href} Header icon" title="{href} Header icon"/>
		<slot/>
	</a>
</li>
