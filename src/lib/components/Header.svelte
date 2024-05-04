<script>
	import MainNav from './sidebarNav.svelte'
	import HamburgerMenuButton from './sidebarExpandButton.svelte'

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	}
</script>


<header>
	<a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">
		Skip to main content
	</a>
	
	<a href="/" class="site-title">AmazinAxel</a>
	
	<HamburgerMenuButton />
	<MainNav />

</header>