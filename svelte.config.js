import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Ensures .svelte files are treated as components (can be imported anywhere)
	extensions: ['.svelte'],

	// Tells Sveltekit where to look for files
	kit: {
		adapter: adapter({ precompress: true })
	},
	preprocess: vitePreprocess()
};

export default config;