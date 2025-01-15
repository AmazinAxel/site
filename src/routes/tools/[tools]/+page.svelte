<script>
    let { data } = $props();
    const { pageContent } = data;
    import { pages } from '$lib/config';
    import { page } from '$app/state';
    
    let title = $state();

    // Loop each tool item and compare their route
    // If route matches, set the title
    for (let i = 0; i < pages[3].subitems.length; i++) {
        let toolPage = pages[3].subitems[i];
        
        if (page.url.pathname.includes(toolPage.route))
            title = toolPage.title
    }

    const SvelteComponent = $derived(pageContent);
</script>

<svelte:head> <!-- Custom title ending -->
	<title>{ title } - Axel's Utils</title>
</svelte:head>

<SvelteComponent/>