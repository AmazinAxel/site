import adapter from '@sveltejs/adapter-static';
/*import { mdsvex } from 'mdsvex'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'*/

const config = {
	// Ensures .svelte files are treated as components (can be imported anywhere)
	extensions: ['.svelte', '.md'],

	/*preprocess: [
		mdsvex({
			// The default mdsvex extension is .svx; this overrides that.
			extensions: ['.md'],

			// Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
			],
		}),
	],*/

	// Tells Sveltekit where to look for files
	kit: {
		adapter: adapter()
	},
	// todo look this up
	prerender: {
		entries: ['*', '/', '/help/', '/help/*']
	}
};

export default config;
