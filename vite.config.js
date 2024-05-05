import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['.']
		}
	},
  alias: {
    src: '/src',
  },
	build: {
		target: "es2020"
	},
	// Enable brotliSize display to see the compressed size
    // of your assets after build
    brotliSize: true,
    // Terser options for minification
    terserOptions: {
      compress: {
        hoist_funs: true, // Reduce computation in loops
        drop_console: true, // Remove console spam
        drop_debugger: true, // Remove debugger statements
      }
    }
};

export default config;
