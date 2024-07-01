import { error } from '@sveltejs/kit';
import { XMLParser } from 'fast-xml-parser';

// Load all of the posts from alecshome.com
export const load = async () => {
	try {
 		const RSS_URL = `https://alecshome.com/rss.xml`;
 		const posts = await fetch(RSS_URL)
 		   .then((response) => response.text())
 		   .then((rawXml) => new XMLParser().parse(rawXml).rss.channel.item);			  
		
		console.log(posts) // TODO fix this to throw error properly
		// and then add it to the Github thing too
		return { posts };
	} catch (e) {
		console.log('No connection to external server!');
		const returnValue = {
			"title": "ae",
			"url": "https://amazinaxel.com",
			"description": "NO"
		}
		return returnValue;
	}
};