/*
 * AmazinAxel.com quick config options
 * Change sidebar-related settings easily
 */

export const navItems = [
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
		title: 'Tools',
		route: '/tools',
		icon: 'tools',
		subitems: [
			{
				title: 'Text Converter',
				route: 'textconverter',
				image: 'textconverter.png'
			},
			{
				title: 'Emoji Picker',
				route: 'emojipicker',
				image: 'placeholder.png'
			},
			{
				title: 'Inventory IDs',
				route: 'inventoryids',
				image: 'placeholder.png'
			}
		]
	}
];

export const projects = {
	major: [
		/* 
			When another project is added here, remove the code from the carousel.svelte file
			that hides elements when only one project is available 
		*/
		{
			title: 'Permafrost',
			role: 'Project Manager',
			description: `
				An entirely custom Minecraft survival server. Survive the harsh winter 
				and explore the cold snowy tundra wasteland, or scavenge for resources 
				with friends. Build a hideout and gather resources or attack enemy 
				compounds for loot. Exeperience survival gameplay like never before.
				`,
			shortDesc: 'A custom survival Minecraft server set in a snowy tundra',
			image: 'Permafrost2.png',
			lightBackground: true
		}
	],

	other: [
		{
			title: 'Dueling',
			role: '',
			description:
				'A competitive 1v1 PvP matchup tournament event server. Duel others to the death in quick 1v1 duels. Featuring collectible Titles, various custom kits, and rotating maps. Available on Minekeep.',
			shortDesc: 'A competitive 1v1 PvP matchup tournament server',
			image: 'Dueling1.png'
		},
		{
			title: 'Nix Flake',
			role: '',
			image: '../projects/flake.png',
			description:
				'My Nix desktop & machine configurations. Built using Astal and home-manager.',
			shortDesc: 'Personal Nix desktop and machine configurations',
			url: 'https://github.com/AmazinAxel/flake',
			linkText: 'GitHub'
		}
	]
};

export const heroItems = [
	{
		project: 'Myst',
		description: 'A discontinued Roblox exploration game',
		images: [{ image: 'Myst.jpg' }]
	},
	{
		project: 'Permafrost',
		description: 'A custom Minecraft survival server',
		images: [
			{
				image: 'Permafrost2.png'
			}
		]
	},
	{
		project: 'Dueling',
		description: '1v1 tournament matchup Minecraft server',
		images: [
			{
				image: 'Dueling1.png',
				invertColors: true
			}
		]
	}
];
