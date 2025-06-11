<script lang="ts">
    type moreInfoProps = {
        imgInfo?: boolean;
        style?: string;
        children: () => any;
    }
    const props: moreInfoProps = $props();

    let {
        imgInfo,
        style,
        children
    } = props;

    let showInfo = $state(false);
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
	const transition = { y: -10, duration: 200, easing: quintOut };
</script>

<div class="moreInfoBtn" style={style}>
    <img src="/media/icons/about.svg" alt="More info" class="noImgStyle" onmouseenter={() => showInfo = true} onmouseleave={() => showInfo = false}>
    {#if showInfo}
        <span class="moreInfo" class:imgInfo={imgInfo} in:fly|local={transition} out:fly|local={transition}>{@render children?.()}</span>
    {/if}
</div>
