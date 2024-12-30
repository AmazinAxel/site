<script>
    let {
        inlineText,
        isIcon = false,
        style = '',
        click = '',
        children
    } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="tooltip" style={style} onclick={click}>
    {#if isIcon}
        <img src="/media/icons/about.svg" alt="About tooltip" class="noImgStyle">
    {:else}
        {@html inlineText}
    {/if}
    <span class="tooltiptext">
        {@render children?.()}
    </span>
</div>
