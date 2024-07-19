import { XMLParser } from 'fast-xml-parser';

// Load all of the posts from alecshome.com
export const load = async () => {
	try {
		const RSS_URL = `https://alecshome.com/rss.xml`;
		const posts = await fetch(RSS_URL)
			.then((response) => response.text())
			.then((rawXml) => new XMLParser().parse(rawXml).rss.channel.item);

		return { posts };
	} catch (e) {
		console.log('No connection to external server!');
		return { noConnection: true };
	}
};
