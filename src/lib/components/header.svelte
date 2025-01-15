<script>
	import { preventDefault } from 'svelte/legacy';

	const focusMainContent = () => { document.querySelector("main").focus(); }
</script>

<nav>
	<a onclick={preventDefault(focusMainContent)} id="skipToContent" href="#content">
		Skip to content
	</a>
</nav>

<div id="unexpandParent">
	<img src="/media/icons/expand.svg" alt="Un-expand sidebar" id="unexpandbtn">
</div>