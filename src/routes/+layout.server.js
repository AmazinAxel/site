import { error } from '@sveltejs/kit';

export const prerender = true;
export const csr = true;

export const load = async () => {
	try {
		return {
			date: new Date().toLocaleString('en-US', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',

				hour: 'numeric',
				minute: 'numeric',
				hour12: true,
				timeZoneName: 'short'
			})
		};
	} catch (err) {
		error(500, err);
	}
};
