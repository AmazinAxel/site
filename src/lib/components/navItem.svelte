<script>
	import { currentPage } from '../assets/js/store';

	export let href, icon, external, nolink;

	$: isCurrentPage = $currentPage.startsWith(href);
</script>

<li>
	<a
		href={nolink ? '' : href}
		class:active={isCurrentPage}
		class:nolink={nolink}
		aria-current={isCurrentPage ? 'page' : false}
		target={external ? "_blank" : ''}
		rel={external ? "noopener noreferrer" : ''}
	>
		<img class="noImgStyle" 
			src="/media/icons/{icon}.svg" 
			alt="{href} Header icon"
		/>
		<slot/>
		{#if external}
			<img class="noImgStyle external" src="/media/icons/external.svg" alt="External icon"/>
		{/if}
	</a>
</li>
