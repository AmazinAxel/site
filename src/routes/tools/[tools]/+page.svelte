<script>
    export let data;
    const { pageContent } = data;
    let title;

    // TODO: there must be a better way to do this...
    switch(data.path.split("/")[2]) {
        case 'emojipicker':
            title = "Emoji Picker";
            break;
        case 'inventoryids':
            title = "Inventory ID's";
            break;
        case 'textconverter':
            title = "Text Converter";
            break;
        default:
            title = "Unknown";
            break;
    }
</script>

<svelte:head> <!-- Custom title ending -->
	<title>{ title } - AmazinAxel's Utilities</title>
</svelte:head>

<svelte:component this={pageContent}/>