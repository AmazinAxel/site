import adapter from '@sveltejs/adapter-cloudflare';

const config = {
	// Build error pages
	kit: { adapter: adapter({ fallback: '404.html' }) }
};

export default config;
