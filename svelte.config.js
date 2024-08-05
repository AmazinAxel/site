import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';

const config = {
	// Ensures .svelte files are treated as components (can be imported anywhere)
	extensions: ['.svelte', '.md'],

	preprocess: [
		mdsvex({
			extensions: ['.md'],

			// Adds IDs to headings
			rehypePlugins: [rehypeSlug]
		})
	],

	// Tells Sveltekit where to look for files
	kit: { adapter: adapter() },
	prerender: {
		entries: [
		  '404',
		]
	  }
  
};

export default config;
