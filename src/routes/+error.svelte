<!-- This page handles any error encountered by the site. -->
<script>
    import { page } from '$app/stores';
	import Hero from '$lib/components/hero.svelte';
	import Card from '$lib/components/card.svelte';
	import Title from '$lib/components/title.svelte';
</script>

<Title name="Error {$page.status}" dontShowHeader/>

<Hero>
	<h1>Error {$page.status}: {$page.error.message}</h1>
	<p><strong>Whoops!</strong> Something went wrong. Try <a href="/" >heading back to the homepage.</a></p>
</Hero>

<Card>
	<h3>Maybe you're looking for one of these?</h3>
	<div class="innerCard">
		<ul>
			<li><a href="/projects">Projects List</a></li>
			<li><a href="/contact">Contact</a></li>
			<li><a href="/github">My GitHub repos</a></li>
			<li><a href="https://journal.amazinaxel.com">Journal</a></li>
		</ul>
	</div>
</Card>