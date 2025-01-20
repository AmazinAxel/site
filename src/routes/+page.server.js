import { XMLParser } from 'fast-xml-parser';
import { projects } from '$lib/config';
// Load all of the posts from the journal
export const load = async () => {
	try {
		// Get Journal posts
		const journal_feed_url = `https://journal.amazinaxel.com/rss.xml`;
		const journalPosts = await fetch(journal_feed_url)
			.then((response) => response.text())
			.then((rawXml) => new XMLParser().parse(rawXml).rss.channel.item);

		// Return data
		return { journalPosts, projects };
	} catch (e) {
		console.log('No connection to external server');
		return {
			journalPosts: {},
			projectItems: {},
		};
	}
};
