<script>
    export let builderror, important, warning, tip, note, info = false;
    export let size = 20;

    let t, i;
    if (builderror) { t = 'error'; }
    else if (important) { t = 'important'; }
    else if (warning) { t = 'warning'; }
    else if (tip) { t = 'tip' }
    else if (note) { t = 'note'; i = 'about'; }
    else if (info) { t = 'info'; i = 'about'; }

</script>

<div class="coverCard {t} innerCard" style="--bg: url(/media/icons/{i}.svg); --size: {size}rem"><slot/></div>

