<!-- This page handles any error encountered by the site. -->
<script>
    import { page } from '$app/stores';
</script>

<!-- TODO add a random project image as the background, use the hero styling -->
<div id="hero">
	<h1>{$page.status}</h1>
	<p>Error: {$page.error.message}</p>
</div>

<p><strong>Whoops!</strong> Something went wrong. Try <a href="/">heading back to the homepage.</a></p>
