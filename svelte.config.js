import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	// Build error pages
	kit: { adapter: adapter({ fallback: '404.html' }) }
};

export default config;
