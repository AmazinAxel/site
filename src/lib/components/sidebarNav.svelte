<script>
	import { navItems } from '$lib/config';
	import { isMenuOpen } from '../assets/js/store';
	import NavItem from './navItem.svelte';
	import SidebarExpandButton from './sidebarExpandButton.svelte';
</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->
<nav class="navbar" class:open={$isMenuOpen}>
	<NavItem href="/" icon="link">AmazinAxel</NavItem>
	<ul>
		{#each navItems as page}
			<NavItem href={page.route} icon={page.icon}>
				{page.title}
			</NavItem>
		{/each}
	</ul>

	<!-- Bottom Navbar -->
	<NavItem href="/privacy-policy" icon="link">Privacy Policy</NavItem>
	<SidebarExpandButton closeOnly="true"/>
</nav>
