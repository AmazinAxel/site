<script>
    export let error = false;
</script>

{#if error}
    <div class="card error"><h4><slot/></h4></div>
{:else}
    <div class="card info"><slot/></div>
{/if}
