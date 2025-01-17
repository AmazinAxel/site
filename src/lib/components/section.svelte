<script>
    import Carousel from '$lib/components/carousel.svelte';
    let {
        link,
        titleText,
        icon,
        right,
        data,
        carousel,
        github
    } = $props();

    const attributes = (repo) => [repo.forks_count, repo.stargazers_count, repo.watchers_count]
	const attributeIcons =       ['git-fork',       'star',                'eye'];
	const ghIconType = (isFork) => 
		(isFork) ? "git-fork.svg" : "github.svg"
</script>
<style>
	/* Github cards (temporary) */
	.githubCard {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	.githubCard div {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.githubCard h4 {
		position: relative;
		top: 2px;
	}
	h3 { text-transform: capitalize; }
</style>
<div class="section" class:right={right}>
    <a href={link} class="notextdeco"><h2>{titleText}</h2></a>
    {#if carousel}
        <Carousel data={data}></Carousel>
    {:else if github }
        <div>
            <div class="gridLayout">
            {#each data as { ...repo }}
                <a href={repo.homepage || repo.html_url}>
                    <div class="coverCard innerCard" style="--bg: url(/media/icons/{ghIconType(repo.fork)}); --size: 10rem;">
                        <h3>{repo.name.replaceAll("-", " ")}</h3>
                        {#if repo.archived}<h5>📦️ ARCHIVED</h5>{/if}
                    
                        <p>{repo.description || ""}</p>
                    
                        <div class="githubCard">
                        {#each attributes(repo) as item, index}
                            <div>
                                <img src="/media/icons/{attributeIcons[index]}.svg" alt="Git icon" class="noImgStyle"/>
                                <h4>{item || "0"}</h4>
                            </div>
                        {/each}
                        </div>
                    </div>
                </a>
            {/each}
            </div>
            <a class="showMoreBtn" href="https://github.com/AmazinAxel" target="_blank" style="margin-top: 1rem">View Github profile</a>
        </div>
    {:else}
        <div class="cardListContainer">
            {#each data as { title, link }}
                <div class="listCard card backgroundIcon" style="--bg: url(/media/icons/{icon}.svg)">
                    <a href={link} target="_blank" rel="noreferrer noopener" style="text-decoration: none;">
                        <h1>{title}</h1>
                        <div class="contentFader"></div>
                    </a>
                </div>
            {/each}
        </div>
    {/if}
</div>
