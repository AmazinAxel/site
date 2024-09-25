<script>
	import { currentPage, isMenuOpen } from '../assets/js/store';

	export let href, icon, external;

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
		<img class="noImgStyle" 
			src="/media/icons/{icon}.svg" 
			alt="{href} Header icon"
			target={external ? "_blank" : ''}
   			rel={external ? "noopener noreferrer" : ''}
		/>
		<slot/>
		{#if external}
			<img class="noImgStyle external" src="/media/icons/external.svg" alt="External icon"/>
		{/if}
	</a>
</li>
