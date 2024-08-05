<!-- This page handles any error encountered by the site. -->
<script>
    import { page } from '$app/stores';
	import Hero from '$lib/components/hero.svelte';
</script>

<Hero>
	<h1>Error {$page.status}: {$page.error.message}</h1>
	<p><strong>Whoops!</strong> Something went wrong. Try <a href="/" >heading back to the homepage.</a></p>
</Hero>
