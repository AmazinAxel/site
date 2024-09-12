<script>
	import Title from '$lib/components/title.svelte';
	import Admonition from '$lib/components/admonition.svelte';
	import { navItems } from '$lib/config';
	import ImgCardList from '$lib/components/imgCardList.svelte';
</script>

<Title name="Utilities" dontShowHeader/>
<h1>Minecraft Development Tools</h1>

<Admonition info>
<p>
	These tools are designed to optimize development time
	by providing a quicker, improved alternative to
	existing development tools.
</p>
</Admonition>

<ImgCardList data={navItems[3].subitems}/>
