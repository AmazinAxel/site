
/*
 * AmazinAxel.com quick config options
 * Change sidebar-related settings easily
 */

export const navItems = [
	{
		title: 'About',
		route: '/about',
		icon: 'about'
	},
	{
		title: 'Contact',
		route: '/contact',
		icon: 'contact'
	},
	{
		title: 'Projects',
		route: '/projects',
		icon: 'projects'
	},
	{
		title: 'GitHub',
		route: '/github',
		icon: 'github'
	},
	/*{ RECONSIDER: may want to remove all mention of this except for SWR posts
		title: 'Blog',
		route: 'https://alecshome.com',
		icon: 'blog'
	},*/
	{
		title: 'Tools',
		route: '/tools',
		icon: 'tools',
		subitems: [
			{
				title: 'Emojis',
				route: '/tools/emojipicker'
			},
			{
				title: 'Inventory',
				route: '/tools/inventoryids'
			},
			{
				title: 'Text Converter',
				route: '/tools/textconvert'
			},
		]
	},
	{
		title: 'Help',
		route: '/help',
		icon: 'about',
		subitems: [
			{
				title: 'Questions',
				route: '/help/askbetterquestions'
			},
			{
				title: 'Handouts',
				route: '/help/handouts'
			},
			{
				title: 'Try it Yourself',
				route: '/help/try-it-yourself'
			},
		]

	}
];

export const projects = {
	major: [
		{
			title: 'Permafrost',
			role: 'Lead Developer and Project Manager',
			description: 'desc here',
			image: 'add an image here todo'
		},
		{
			title: ''
		}
	],

	other: [
		{
			title: 'Dueling',
			role: 'Developer',
			description: 'Lead developer of a fast-paced, 1v1 PvP matchup tournament event server.',
			image: 'todo'
		},
	],

	archived: [
		{
			title: 'Lofi Player',
			url: 'TODO add url here',
			description: "The Lofi player is a music webapp intended for listening to Lo-fi music. The project was archived because I began using Spotify.",
			image: 'todo'
		},
		{
			title: 'Egg Development Games',
			description: "My first solo indie game studio, I created various Minecraft servers, including: WizardryKB, EggEvents, EggSiege, and EggDuels. All assets from this studio were liquidated into Permafrost Games.",
			image: 'todo'
		},
		{
			title: ''
		}
	]
}
