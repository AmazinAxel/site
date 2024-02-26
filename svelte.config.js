import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or used as pages)
	extensions: ['.svelte', '.md'],

	// Tells Sveltekit where to look for files
	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		},
		prerender: {
			entries: ['*']
		}
	}
};

export default config;
