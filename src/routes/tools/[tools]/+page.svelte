<script>
    export let data;
    const { pageContent } = data;
    import { navItems } from '$lib/config';
    import { page } from '$app/stores';    


    let title;

    // Loop each tool item and compare their route
    // If their route matches, set the title
    for (let i = 0; i < navItems[3].subitems.length; i++) {
        let navItem = navItems[3].subitems[i];
        
        if ($page.url.pathname.includes(navItem.route)) 
            title = navItem.title
    }
</script>

<svelte:head> <!-- Custom title ending -->
	<title>{ title } - AmazinAxel's Utilities</title>
</svelte:head>

<svelte:component this={pageContent}/>