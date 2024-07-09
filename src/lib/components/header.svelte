<script>
	import SidebarNav from '$lib/components/sidebarNav.svelte';

	const focusMainContent = () => { document.querySelector("main").focus(); }
</script>

<nav>
	<a on:click|preventDefault={focusMainContent} class="skip-to-content-link" href="#content">
		Skip to main content
	</a>
	
	<img src="/favicon.png" alt="AmazinAxel logo" id="logoicon">
	<a href="/" class="site-title">AmazinAxel</a>
	<img src="/media/icons/expand.svg" alt="Expand sidebar" id="expandbtn">
	<SidebarNav/>
</nav>
<img src="/media/icons/expand.svg" alt="Un-expand sidebar" id="unexpandbtn">