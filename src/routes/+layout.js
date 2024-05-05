import { error } from '@sveltejs/kit';

// Make all pages statically pre-render at build time
export const prerender = true;

// Client-side routing for page transitions and link prefetching
export const csr = true;

export const load = async ({ url }) => {
	try {
		return {
			path: url.pathname
		};
	} catch (err) {
		error(500, err);
	}
};
