<script>
    import { fly } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
	const transition = { y: 10, duration: 250, easing: cubicOut };

    import { commonIcons } from '$lib/components/tool-pages/emojipicker.js';
    const iconList = commonIcons.split('').filter((v) => v != '\n');
    let showCopyMessage = $state(), alreadyCopied = $state();
    let copyMessageTime = 0;
    function copy(event) {
        // Copy text and show admonition
        navigator.clipboard.writeText(event.target.innerText);

        if (showCopyMessage == true) {
            // If the admonition is already shown, let's play a pop animation
            alreadyCopied = true;
            setTimeout(() => { alreadyCopied = false }, 100);
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
	font-style: normal;
	font-weight: 200;
	font-display: swap;
	src: url(/fonts/Monocraft.otf) format('opentype');
    
}
button { font-family: 'Monocraft'; }
</style>

{#each iconList as icon}
    <button onclick={copy}>{icon}</button>
{/each}

{#if showCopyMessage}
    <p class="stickyAdmonition" in:fly|local={transition} out:fly|local={transition} class:alreadyCopied={alreadyCopied}>Copied!</p>
{/if}
