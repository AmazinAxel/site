<script>
    import { fly } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    import Admonition from '../admonition.svelte';
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

<h1>Minecraft Emoji picker</h1>

<p>Character width</p>
<div class="slider_container">
    <input type="range" min="3" max="19" id="scriptType"
        oninput={(self) => document.querySelectorAll('button').forEach(b => b.style.setProperty('flex', self.target.value + '%'))}
    >
</div>
<br>

<div class="flexGrid">
    {#each iconList as icon}
        <button onclick={copy} style="min-width: unset; flex: 10%">{icon}</button>
    {/each}
</div>
{#if showCopyMessage}
    <p class="stickyAdmonition" in:fly|local={transition} out:fly|local={transition} class:alreadyCopied={alreadyCopied}>Copied!</p>
{/if}

<Admonition info>
    <p>The characters displayed here are taken directly from the Minecraft jar font.</p>
    <p>Some icons here are not displayed properly in the Monocraft font - hopefully to be fixed soon.</p>
</Admonition>
