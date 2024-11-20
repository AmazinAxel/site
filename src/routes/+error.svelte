<!-- This page handles any error encountered by the site. -->
<script>
    import { page } from '$app/stores';
	import { onMount } from "svelte"; 
	import Hero from '$lib/components/hero.svelte';
	import Title from '$lib/components/title.svelte';
	let quote, author;
	let visibility = false;

	onMount(() => {
		getQuote();
	});

	function getQuote() {
		visibility = false;

// Wait a second 
	setTimeout(() => {
			// Gets a random quote from Quotes API and displays it
			fetch('https://qapi.vercel.app/api/random') // Quotable API is down - use this endpoint for now
				.then(response => response.ok ? response.json() : Promise.reject('An error occurred while fetching a quote.'))
				.then(data => { quote = data.quote; author = data.author;})
				.then(() => { visibility = true; });
		}, 500);
	};
</script>
<style>

</style>

<Title name="Error {$page.status}" dontShowHeader/>

<Hero>
	<h1>Error {$page.status}: {$page.error.message}</h1>
	<p>Something went wrong. Try <a href="/" >heading back to the homepage.</a></p>
</Hero>

<div class="card nomargin quoteParent" style="position: relative;" class:visible={visibility}>
	<blockquote>
		<p>{quote}</p>
		<p><em>- {author}</em></p>
	</blockquote>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_missing_attribute -->
	<a style="
		position: absolute;
		right: 0.5rem;
		bottom: 0.2rem;
    	color: var(--blue2);
	" 
	href="#"
	on:click={() => getQuote()}> New quote </a>
</div>