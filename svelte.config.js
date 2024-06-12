import adapter from '@sveltejs/adapter-cloudflare';

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
	}
};

export default config;
