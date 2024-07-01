<!-- This page handles any error encountered by the site. -->
<script>
    import { page } from '$app/stores';
</script>

<!-- TODO add a random project image as the background, use the hero styling -->
<h2>{$page.status}</h2>
<p class="subhead">{$page.error.message}</p>

<p><strong>Whoops!</strong> Something went wrong. Try <a href="/">heading back to the homepage.</a></p>
