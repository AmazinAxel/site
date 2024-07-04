<script>
    export let inlineText;
    export let isIcon = false;
    export let style = '';
</script>

<div class="tooltip" style={style}>
    {#if isIcon}
        <img src="/media/icons/about.svg" alt="About tooltip" class="noImgStyle">
    {:else}
        { inlineText }
    {/if}
    <span class="tooltiptext">
        <slot/>
    </span>
</div>
