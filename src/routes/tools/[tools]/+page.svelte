<script>
    let { title, data } = $props();
    const { pageContent } = data;
    import { pages } from '$lib/config';
    import { page } from '$app/state';

    // Loop each tool object and compare their route to get page title
    for (let i = 0; i < pages[1].subitems.length; i++) {
        let toolPage = pages[1].subitems[i];
        
        if (page.url.pathname.includes(toolPage.route))
            title = toolPage.title
    }

    const SvelteComponent = $derived(pageContent);
</script>

<svelte:head> <!-- Custom title ending -->
	<title>{ title } - Axel's Utils</title>
</svelte:head>

<a class="showMoreBtn otherWay" href="/#utils">Go back</a>

<SvelteComponent/>