
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

export const projects = [
	{
		title: 'Permafrost',
		role: 'Lead Developer and Project Manager',
		description: 'desc here',
		image: 'add an image here todo'
	},
	{
		title: 'Dueling',
		role: 'Developer',
		description: 'description here',
		image: 'todo'
	},
	{
		title: 'more coming soon',
		role: 'yes',
		description: 'hohoho',
		image: 'todo'
	}
]
