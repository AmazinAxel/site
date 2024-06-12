import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Ensures .svelte files are treated as components (can be imported anywhere)
	extensions: ['.svelte'],

	// Tells Sveltekit where to look for files
	kit: {
		adapter: adapter({
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			},
			/*platformProxy: {
				environment: undefined,
				experimentalJsonConfig: false,
				persist: false
			}*/
		})
	},
	preprocess: vitePreprocess()
};

export default config;
