<script>
	import { navItems } from '$lib/config';
	import NavItem from '$lib/components/navItem.svelte';
</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. 
 todo fix the messy .navbar css styling adn remove its tag -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class="navItems">
	<ul>
		{#each navItems as page}
			<NavItem href={page.route} icon={page.icon}>
				<p>{page.title}</p>
			</NavItem>
		{/each}

		<!-- Bottom Navbar (todo organize this into a new list)
		<NavItem href="/privacy-policy" icon="link"><p>Privacy Policy</p></NavItem>-->
	</ul>
</div>
