<!-- This page handles any error encountered by the site. -->
<script>
    import { page } from '$app/stores';
	import Hero from '$lib/components/hero.svelte';
</script>

<Hero>
	<h1>{$page.status}</h1>
	<p>{$page.error.message}</p>
</Hero>

<p><strong>Whoops!</strong> Something went wrong. Try <a href="/">heading back to the homepage.</a></p>
