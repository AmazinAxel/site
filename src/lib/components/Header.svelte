<script>
	import SidebarNav from './sidebarNav.svelte';
	import SidebarExpandButton from './sidebarExpandButton.svelte';

	const focusMainContent = () => { document.querySelector("main-content").focus(); }
</script>


<header>
	<a on:click|preventDefault={focusMainContent} class="skip-to-content-link" href="#main-content">
		Skip to main content
	</a>
	
	<a href="/" class="site-title">AmazinAxel</a>
	
	<SidebarExpandButton/>
	<SidebarNav/>

</header>