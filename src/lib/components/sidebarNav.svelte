<script>
	import { navItems } from '$lib/config';
	import { isMenuOpen } from '../assets/js/store';
	import NavItem from './navButton.svelte';
	import SidebarExpandButton from './sidebarExpandButton.svelte';
</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->
<nav class="navbar" class:open={$isMenuOpen}>
	<ul>
		{#each navItems as page}
			<NavItem href={page.route}>
				{page.title}
			</NavItem>
		{/each}
	</ul>
	<SidebarExpandButton closeOnly="true"/>
</nav>
