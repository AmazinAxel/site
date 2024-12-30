<script>
	import { preventDefault } from 'svelte/legacy';

	import SidebarNav from '$lib/components/sidebarNav.svelte';

	const focusMainContent = () => { document.querySelector("main").focus(); }
</script>

<nav>
	<a onclick={preventDefault(focusMainContent)} id="skipToContent" href="#content">
		Skip to content
	</a>
	
	<img src="/favicon.png" alt="AmazinAxel logo" id="logoicon">
	<a href="/" class="site-title">AmazinAxel</a>
	<img src="/media/icons/expand.svg" alt="Expand sidebar" id="expandbtn">
	<SidebarNav/>
</nav>
<div id="unexpandParent">
	<img src="/media/icons/expand.svg" alt="Un-expand sidebar" id="unexpandbtn">
</div>