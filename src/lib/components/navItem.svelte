<script>
	import { currentPage, isMenuOpen } from '../assets/js/store';
	import { Icon } from 'svelte-icons-pack';
	import { AiOutlineHome, AiFillQuestionCircle } from 'svelte-icons-pack/ai';

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
		<Icon src={AiFillQuestionCircle} alt="{href} Header icon" size="50" title="{href} Header icon"/>
		<!--<Icon src={icon} color="red" size="64"title="Custom icon"/>-->
		<slot/>
	</a>
</li>
