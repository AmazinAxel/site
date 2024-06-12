<script>
	import SidebarNav from '$lib/components/sidebarNav.svelte';
	import SidebarExpandButton from '$lib/components/sidebarExpandButton.svelte';

	const focusMainContent = () => { document.querySelector("main").focus(); }
</script>


<header>
	<a on:click|preventDefault={focusMainContent} class="skip-to-content-link" href="#main">
		Skip to main content
	</a>
	
	<a href="/" class="site-title">AmazinAxel</a>
	
	<SidebarExpandButton/>
	<SidebarNav/>

</header>