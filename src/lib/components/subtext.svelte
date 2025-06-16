<script lang="ts">
    import Anchor from "./anchor.svelte";

    type subtextProps = {
        header: string;
        subtext: string;
        url?: string;
    }
    const props: subtextProps = $props();

    let {
        header,
        subtext,
        url,
    } = props;

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
