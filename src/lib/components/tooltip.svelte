<script>
    export let inlineText;
</script>

<div class="tooltip">
    { inlineText }
    <span class="tooltiptext">
        <slot/>
    </span>
</div>
