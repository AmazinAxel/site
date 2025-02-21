import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	build: {
		target: 'es2020'
	},

	terserOptions: {
		compress: {
			hoist_funs: true, // Reduce computation in loops
			drop_console: true, // Remove console spam
			drop_debugger: true // Remove debugger statements
		}
	}
};

export default config;
