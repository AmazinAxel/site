<script>
    export let inlineText;
    export let isIcon = false;
    export let style = '';
    export let click = '';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="tooltip" style={style} on:click={click}>
    {#if isIcon}
        <img src="/media/icons/about.svg" alt="About tooltip" class="noImgStyle">
    {:else}
        { @html inlineText }
    {/if}
    <span class="tooltiptext">
        <slot/>
    </span>
</div>
