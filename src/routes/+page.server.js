import { XMLParser } from 'fast-xml-parser';
import { projects } from '$lib/config';
// Load all of the posts from the journal
export const load = async () => {
	try {
		// Get Journal posts
		const RSS_URL = `https://journal.amazinaxel.com/rss.xml`;
		const journalPosts = await fetch(RSS_URL)
			.then((response) => response.text())
			.then((rawXml) => new XMLParser().parse(rawXml).rss.channel.item);
		
		const selectedProjects = [...projects.major, ...projects.other];
		const projectItems = selectedProjects.map(item => ({ // Map all project items to the post
			title: item.title, // Get title from first object split by |
			link: (item.url || ''),
			description: item.description, // Add badge from 3rd object split by |
		}));
		// Get all projects
		return { journalPosts, projectItems };
	} catch (e) {
		console.log('No connection to external server!');
		//return { }; may be required
	}
};
