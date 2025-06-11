<script lang="ts">
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
        <a href={url} class="external">
            {header} <span class="subtext">{subtext}</span>
        </a>
    </h2>
{:else}
    <h2>{header} <span class="subtext">{subtext}</span></h2>
{/if}
