<script>
	let items = [];
	async function load() {
		const res = await fetch('https://alecshome.com/rss.xml');
		const text = await res.text();
		const feedDocument = new DOMParser().parseFromString(text, 'text/xml')
		items = [...feedDocument.querySelectorAll('item')].map(item => {
			const title = item.querySelector('title').textContent;
			const url = item.querySelector('link').textContent;
			
			return { title, url };
		});
	}
	load()
</script>

<h1>My Latest Announcements</h1>
<ul>
	{#each items as { title, url }}
		<li>
			<a href={url} target="_blank" rel="noreferrer noopener">
				{title}
			</a>
		</li>
	{/each}
</ul>