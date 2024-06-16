import adapter from '@sveltejs/adapter-static';

const config = {
	// Ensures .svelte files are treated as components (can be imported anywhere)
	extensions: ['.svelte'],

	// Tells Sveltekit where to look for files
	kit: {
		adapter: adapter()
	},
};

export default config;