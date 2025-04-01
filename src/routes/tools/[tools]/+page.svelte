<script>
    let { title, data } = $props();
    const { pageContent } = data;
    import { tools } from '$lib/config';
    import { page } from '$app/state';

    // Loop each tool object and compare their route to get page title
    for (let i = 0; i < tools.length; i++) {
        let toolPage = tools[i];
        
        if (page.url.pathname.includes(toolPage.route))
            title = toolPage.title
    }

    const SvelteComponent = $derived(pageContent);
</script>

<svelte:head>
	<title>{ title } - Axel's Utils</title>
</svelte:head>

<a class="showMoreBtn otherWay" href="/#utils">Go back</a>

<SvelteComponent/>