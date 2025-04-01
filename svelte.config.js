import adapter from '@sveltejs/adapter-static';

const config = {
	// Build error pages
	kit: { adapter: adapter({ fallback: '404.html' }) }
};

export default config;
