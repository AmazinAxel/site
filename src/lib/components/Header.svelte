<script>
	import SidebarNav from './SidebarNav.svelte';
	import SidebarExpandButton from './SidebarExpandButton.svelte';

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