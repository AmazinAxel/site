<script lang="ts">
    type AdmonitionProps = {
        error?: boolean;
        warning?: boolean;
        important?: boolean;
        note?: boolean;
        info?: boolean;
        children?: () => any;
    }

    let { error, warning, important, note, info, children }: AdmonitionProps = $props();

    const type = $derived(
        error ? 'error' :
        warning ? 'warning' :
        important ? 'important' :
        note ? 'note' :
        info ? 'info' : undefined
    );
    const icon = $derived(
        error ? 'error' :
        (warning || important) ? 'warning' :
        (note || info) ? 'about' : undefined
    );
</script>

<div class="coverCard {type} innerCard" style="--bg: url(/media/icons/{icon}.svg); --size: 20rem;">{@render children?.()}</div>
