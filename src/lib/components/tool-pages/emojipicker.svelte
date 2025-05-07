<script>
    import { fly } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    import MoreInfo from '../moreInfo.svelte';
    import Options from '../options.svelte';
	const transition = { y: 10, duration: 250, easing: cubicOut };

    import { allChars } from '$lib/components/tool-pages/emojipicker.js';
    const iconList = allChars.split('').filter((v) => v != '\n');
    let showCopyMessage = $state(), alreadyCopied = $state();
    let copyMessageTime = 0;
    function copy(event) {
        // Copy text and show admonition
        navigator.clipboard.writeText(event.target.innerText);

        if (showCopyMessage == true) {
            // Play pop animation if admonition is visible
            alreadyCopied = true;
            setTimeout(() => alreadyCopied = false, 100);
        };

        showCopyMessage = true;
        copyMessageTime++;

        // After 3 seconds, hide the admonition
        setTimeout(() => {
            copyMessageTime--;
            if (copyMessageTime == 0)
                showCopyMessage = false
        }, 3000);
    };
</script>
<style>
    @font-face {
        font-family: 'Monocraft';
        src: url(/fonts/Monocraft.otf) format('opentype');
    }
    button { font-family: 'Monocraft'; }
</style>
<svelte:head>
	<link rel="stylesheet" href="/css/lists.css"/>
</svelte:head>

<h1>Minecraft Emoji Picker</h1>

<Options>
    <div style="display: flex; align-items: center; gap: 5px;">
        <label for="charwidth">Button width:</label>
        <input type="range" min="3" max="19" name="charwidth"
            oninput={(self) => document.querySelectorAll('button').forEach(b => b.style.setProperty('flex', self.target.value + '%'))}
        >
    </div>
    <!--<label for="search">Search:</label>
    <input type="text" name="search" style="margin-bottom: 0;">
    <MoreInfo>Only available for some commonly-used emojis</MoreInfo>-->
</Options>
<br>

<div class="flexGrid">
    {#each iconList as icon}
        <button onclick={copy} style="min-width: unset; flex: 10%">{icon}</button>
    {/each}
</div>
{#if showCopyMessage}
    <p class="stickyAdmonition" in:fly|local={transition} out:fly|local={transition} class:alreadyCopied={alreadyCopied}>Copied</p>
{/if}
