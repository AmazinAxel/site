import adapter from '@sveltejs/adapter-static';

const config = {
	// Auto-builds error pages
	kit: { adapter: adapter({ fallback: '404.html' }) }
};

export default config;
