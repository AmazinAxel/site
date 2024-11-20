<script>
	import { page } from '$app/stores';
	export let href;

	$: isCurrentPage = $page.url.pathname.startsWith(href);
</script>

<li>
	<a
		{href}
		class:active={isCurrentPage}
		aria-current={isCurrentPage ? 'page' : false}
	>
		<slot/>
	</a>
</li>
