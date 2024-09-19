<script>
    import Title from '$lib/components/title.svelte';
	import Carousel from '$lib/components/carousel.svelte';

	import { projects } from '$lib/config';
</script>
<svelte:head>
	<link rel="stylesheet" href="/css/carousel.css"/>
</svelte:head>

<Title name="Projects"/>

<!-- Major projects -->
<Carousel data={projects.major}/>


<h2>Other</h2>

<Carousel data={projects.other}/>


<h2>Archived</h2>
<p>
	All projects listed here will not recieve support. They are 
	for archival purposes only.
</p>
TODO make this a grid showing archived projects