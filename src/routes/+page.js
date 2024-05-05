/*import { error } from '@sveltejs/kit';

export const load = async () => {
	try {
		const ReadMeFile = await import('../../README.md');
		const ReadMe = ReadMeFile.default;

		return {
			ReadMe
		};
	} catch (err) {
		error(500, err);
	}
};

let items = [];
async function loadRSS() {
	const res = await fetch('https://alecshome.com/rss.xml');
	const text = await res.text();
	const feedDocument = new DOMParser().parseFromString(text, 'text/xml')
	items = [...feedDocument.querySelectorAll('item')].map(item => {
		const title = item.querySelector('title').textContent;
		const url = item.querySelector('link').textContent;
		
		return { title, url };
	});
}
loadRSS()*/