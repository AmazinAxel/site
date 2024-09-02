<script>
    import Admonition from '$lib/components/admonition.svelte';

    export let repo;

    const icon = (repo.fork) ? "git-fork.svg" : "github.svg"
    const attributes =     [repo.forks_count, repo.stargazers_count, repo.watchers_count, repo.language]
    const attributeIcons = ['git-fork',       'star',                'eye',               'code']

    //if (!repo.language) {
        attributes.pop();
        attributeIcons.pop();
    //}
</script>

<div class="coverCard innerCard" style="--bg: url(/media/icons/{icon}); --size: 10rem;">
    <h3>{repo.name}</h3>
    <p>{repo.description || ""}</p>

    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: space-evenly;">
    {#each attributes as item, index}
        <div style="display: flex; align-items: center; gap: 0.25rem;">
            <img src="/media/icons/{attributeIcons[index]}.svg" alt="TODO" class="noImgStyle"/>
            <h4>{item || "0"}</h4>
        </div>
    {/each}
    </div>

    <!--{#if repo.archived}
        <Admonition warning>This repository is archived and no longer maintained.</Admonition>
    {/if}-->
</div>
