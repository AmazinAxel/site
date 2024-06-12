<script>
	import SidebarNav from '$lib/components/SidebarNav.svelte';
	import SidebarExpandButton from '$lib/components/SidebarExpandButton.svelte';

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