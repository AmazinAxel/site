<script lang="ts">
    let { href, children } = $props();
</script>
<div class="selector">
    <a href={href} class="external" target="_blank" rel="noopener noreferrer">{@render children?.()}</a>
</div>
