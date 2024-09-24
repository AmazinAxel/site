<script>
    export let repo;

    const icon = (repo.fork) ? "git-fork.svg" : "github.svg"
    const attributes =     [repo.forks_count, repo.stargazers_count, repo.watchers_count]
    const attributeIcons = ['git-fork',       'star',                'eye']
</script>

<div class="coverCard innerCard" style="--bg: url(/media/icons/{icon}); --size: 10rem;">
    <h3>{repo.name}</h3>
    {#if repo.archived}<h5>📦️ ARCHIVED</h5>{/if}

    <p>{repo.description || ""}</p>

    <div class="githubCard">
    {#each attributes as item, index}
        <div>
            <img src="/media/icons/{attributeIcons[index]}.svg" alt="Git icon" class="noImgStyle"/>
            <h4>{item || "0"}</h4>
        </div>
    {/each}
    </div>
</div>
