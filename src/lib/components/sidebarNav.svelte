<script>
	import { navItems } from '$lib/config';
	import NavItem from '$lib/components/navItem.svelte';
	import NavSubitem from '$lib/components/navSubitem.svelte';
	import { page } from '$app/stores';
</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. 
 todo fix the messy .navbar css styling and remove its tag -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class="navItems">
	<ul>
		{#each navItems as navitem}
			<NavItem href={navitem.route} icon={navitem.icon}>
				<p>{navitem.title}</p>
			</NavItem>
			{#if typeof navitem.subitems !== 'undefined' }
				{#if $page.url.pathname.includes(navitem.title.toLowerCase())}
					<ul>
					{#each navitem.subitems as subpage}
					<NavSubitem href={subpage.route}>
						<p>{subpage.title}</p>
					</NavSubitem>
					{/each}
					</ul>
				{/if}
			{/if}

		{/each}
	</ul>
	<ul>
		<!-- Bottom Navbar -->
		<NavItem href="https://journal.amazinaxel.com" icon="journal" external><p>Journal</p></NavItem>
	</ul>
</div>
