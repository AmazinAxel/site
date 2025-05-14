<script lang="ts">
    import { page } from '$app/state';
	import { onMount } from "svelte"; 
	import Hero from '$lib/components/hero.svelte';
	let quote = $state(), author = $state();
	let visibility = $state(false);

	function getQuote() {
		visibility = false;

		setTimeout(() => {
			fetch('https://transcendentalism.amazinaxel.com')
				.then(response => response.ok ? response.json() : Promise.reject('Error occurred while fetching a quote'))
				.then(data => ({ author, quote } = data))
				.then(() => visibility = true);
		}, 500);
	};

	// @ts-ignore - this code runs fine
	onMount(getQuote());
</script>
<style>
	.quoteParent button {
		position: absolute;
		right: 0.5rem;
		bottom: 0.5rem;
    	color: var(--blue2);
		background: none;
		border: 0;
		cursor: pointer;
	}
</style>
<svelte:head><title>Error {page.status} - AmazinAxel.com</title></svelte:head>

<a class="showMoreBtn otherWay" href="/">Go to homepage</a>

<Hero>
	<h1>Error {page.status}: {page.error?.message}</h1>
</Hero>

<div class="card nomargin quoteParent" class:visible={visibility}>
	<blockquote>
		<p>{quote}</p>
		<p><em>- {author}</em></p>
	</blockquote>
	<button class="nostyle"
	onclick={() => getQuote()}>New quote</button>
</div>