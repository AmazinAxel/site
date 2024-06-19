
/*
 * AmazinAxel.com quick config option settings
 * Change commonly-modified options easily!
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
	{
		title: 'Blog',
		route: 'https://alecshome.com',
		icon: 'blog'
	},
	{
		title: 'Tools',
		route: '/tools',
		icon: 'tools',
		subitems: [
			{
				title: 'Emojis',
				route: '/tools/emojipicker',
				icon: 'about'
			},
			{
				title: 'Inventory',
				route: '/tools/inventoryids',
				icon: 'about'
			},
			{
				title: 'Text Converter',
				route: '/tools/textconvert',
				icon: 'about'
			},
		]
	},
	{
		title: 'Help',
		route: '/help',
		icon: 'about'
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
