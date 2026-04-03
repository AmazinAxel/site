<script lang="ts">
    import Anchor from "./anchor.svelte";

    type subtextProps = {
        header: string;
        subtext: string;
        url?: string;
    }
    let { header, subtext, url }: subtextProps = $props();

</script>

{#if url}
    <h2 class="sectionHeader">
        <Anchor href={url}>
            {header} <span class="subtext">{subtext}</span>
        </Anchor>
    </h2>
{:else}
    <h2>{header} <span class="subtext">{subtext}</span></h2>
{/if}
