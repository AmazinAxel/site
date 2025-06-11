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
    <a href="https://permafrost.amazinaxel.com" class="external">
        <h2>{header} <span class="subtext">{subtext}</span></h2>
    </a>
{:else}
    <h2>{header} <span class="subtext">{subtext}</span></h2>
{/if}
