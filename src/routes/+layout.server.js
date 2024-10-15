import { error } from '@sveltejs/kit';

// Make all pages statically pre-render at build time
export const prerender = true;

// Client-side routing for page transitions and link prefetching
export const csr = true;

export const load = async () => {
	try {
		return {
			date: new Date().toLocaleString()
		};
	} catch (err) {
		error(500, err);
	}
};
