import { XMLParser } from 'fast-xml-parser';

export const load = async () => {
	try {
		// Get Journal posts
		const journal_feed_url = `https://journal.amazinaxel.com/rss.xml`;
		const journalPosts = await fetch(journal_feed_url)
			.then((response) => response.text())
			.then((rawXml) => new XMLParser().parse(rawXml).rss.channel.item);

		return { journalPosts };
	} catch (e) {
		console.log('No connection to external server');
		return { journalPosts: {} };
	}
};
