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
		
		// Get projects
		const selectedProjects = [...projects.major, ...projects.other];
		const projectItems = selectedProjects.map(item => ({ // Map all project items to the post
			title: item.title, // Get title from first object split by |
			link: (item.url || ''),
			description: item.description, // Add badge from 3rd object split by |
		}));

		// Get Github repos
		const repo_url = `https://api.github.com/users/amazinaxel/repos`;
		const githubRepos = await fetch(repo_url).then((response) => response.json());

		// Return data
		return { journalPosts, projectItems, githubRepos };
	} catch (e) {
		console.log('No connection to external server!');
		//return { }; may be required
	}
};
