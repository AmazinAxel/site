<script>
    let {
        error,
        warning,
        important,
        note,
        info,
        children
    } = $props();

    let t = $state(), i = $state();
    if (error) { t = 'error'; i = 'error'; }
    else if (warning) { t = 'warning'; i = 'warning'; }
    else if (important) { t = 'important'; i = 'warning';  }
    else if (note) { t = 'note'; i = 'about'; }
    else if (info) { t = 'info'; i = 'about'; }
</script>

<div class="coverCard {t} innerCard" style="--bg: url(/media/icons/{i}.svg); --size: 20rem;">{@render children?.()}</div>
