<script lang="ts">
    type toolItemProps = {
        route: string;
        title: string;
    }
    const props: toolItemProps = $props();
    let { title, route } = props;

</script>
<a href="/{route}">
    <div class="card imgCard">
        <picture>
            <img src="/media/tools/previews/{route}.png" class="noImgStyle" alt={title + "preview"}>
        </picture>
        <h3>{title}</h3>
        <div class="contentFader"></div>
    </div>
</a>
