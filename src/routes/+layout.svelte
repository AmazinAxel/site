<script lang="ts">
	import { fade } from 'svelte/transition';
	import { page } from '$app/state';
	let { data, children } = $props();
	const { date } = data;
</script>
<svelte:head>
	<!-- Bottom-to-top in order of importance -->
	<link rel="stylesheet" href="/css/vars.css"/>
	<link rel="stylesheet" href="/css/footer.css"/>
	<link rel="stylesheet" href="/css/layout.css"/>
	<link rel="stylesheet" href="/css/typography.css"/>
	<link rel="stylesheet" href="/css/reset.css"/>
	<link rel="stylesheet" href="/css/other.css"/>
</svelte:head>

<!-- Key reactivity for page animation -->
{#key page.url.pathname}
	<div in:fade|local={{ duration: 150 }} id="content">
		{@render children?.()}
	</div>

	{#if page.status == 200}
		<footer>
			<div id="inner">
				<div>
					<p>&copy;2016-{new Date().getFullYear()} AmazinAxel (Alec) • All Rights Reserved</p>
					<a href="https://github.com/AmazinAxel/site" id="date">Site last generated on {date}</a>
				</div>
				<a href="https://derpydoggo.is-a.dev" class="showMoreBtn" style="margin: 0; font-size: 0.9rem;">Lil' bro's site</a>
			</div>
		</footer>
	{/if}
{/key}