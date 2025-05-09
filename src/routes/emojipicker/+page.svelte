<script>
    import { fly } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    import { allChars, searchableChars } from './emojis.js';
    import MoreInfo from '$lib/components/moreInfo.svelte';
    import Options from '$lib/components/options.svelte';
    import Fuse from 'fuse.js';
    const transition = { y: 10, duration: 250, easing: cubicOut };

    const iconList = allChars.split('').filter((v) => v != '\n');
    let showCopyMessage = $state(), alreadyCopied = $state();
    let copyMessageTime = 0;
    
    function copy(event) {
        navigator.clipboard.writeText(event.target.innerText);

        if (showCopyMessage == true) {
            alreadyCopied = true;
            setTimeout(() => alreadyCopied = false, 100);
        };

        showCopyMessage = true;
        copyMessageTime++;

        setTimeout(() => {
            copyMessageTime--;
            if (copyMessageTime == 0)
                showCopyMessage = false
        }, 3000);
    };

    // Remap to a list of objects for Fuse to read
    const formattedSearchableChars = Object.entries(searchableChars).map(([char, desc]) => ({ char, desc }));

    const fuse = new Fuse(formattedSearchableChars, {
        keys: ['desc'],
        threshold: 0.6,
        ignoreLocation: true,
    });

    export function searchCharacters(query) {
        if (!query || query.trim() === '') return [];
        return fuse.search(query);
    };

    let query = $state('');
    let results = $derived(searchCharacters(query));
    let showSearchResults = $derived(query.trim() !== '');
</script>
<style>
    @font-face {
        font-family: 'Monocraft';
        src: url(/fonts/Monocraft.otf) format('opentype');
    }
    button { font-family: 'Monocraft'; }
</style>
<svelte:head>
	<title>Minecraft Emoji Picker - Axel's Utils</title>
	<link rel="stylesheet" href="/css/lists.css"/>
</svelte:head>

<a class="showMoreBtn otherWay" href="/#utils">Go to homepage</a>
<h1>Minecraft Emoji Picker</h1>

<Options>
    <div style="display: flex; align-items: center; gap: 5px;">
        <label for="charwidth">Button width:</label>
        <input type="range" min="3" max="19" name="charwidth"
            oninput={(self) => document.querySelectorAll('button').forEach(b => b.style.setProperty('flex', self.target.value + '%'))}
        >
    </div>
    
    <label for="search">Search:</label>
    <input type="text" name="search" style="margin-bottom: 0;" bind:value={query} oninput={() => searchCharacters(query)}>
    <MoreInfo style="right: 10px; bottom: 10px;">Search feature only available for common characters</MoreInfo>
</Options>
<br>

<div class="flexGrid">
    {#if showSearchResults}
        {#each results as icon}
            <button onclick={copy} style="min-width: unset; flex: 10%">{icon.char}</button>
        {/each}
    {:else}
        {#each iconList as icon}
            <button onclick={copy} style="min-width: unset; flex: 10%">{icon}</button>
        {/each}
    {/if}
</div>

{#if showCopyMessage}
    <p class="stickyAdmonition" in:fly|local={transition} out:fly|local={transition} class:alreadyCopied={alreadyCopied}>Copied</p>
{/if}
