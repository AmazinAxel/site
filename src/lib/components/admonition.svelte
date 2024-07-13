<script>
    export let builderror, important, warning, tip, note = false;

    let t;
    if (builderror) {
        t = "error";
    } else if (important) {
        t = "important";
    } else if (warning) {
        t = "warning";
    } else if (tip) {
        t = "tip"
    } else if (note) {
        t = "info";
    }

</script>

<div class="card {t}"><slot/></div>

