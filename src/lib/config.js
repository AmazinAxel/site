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
				title: 'Emoji Picker',
				route: 'emojipicker',
				image: 'temporary-img-cover.png'
			},
			{
				title: 'Inventory IDs',
				route: 'inventoryids',
				image: 'temporary-img-cover.png'
			},
			{
				title: 'Text Converter',
				route: 'textconverter',
				image: 'temporary-img-cover.png'
			}
		]
	}
];

export const projects = {
	major: [
		{
			title: 'Permafrost',
			role: 'Lead Developer & Project Manager',
			description: `
				A northern tundra survival Minecraft server. Survive the
				harsh, cold environment and adapt to its changing landscapes. 
				As the sole developer and (current) project manager, 
				I must maintain and update the server according to community needs.
				`,
			image: 'Permafrost2.png'
		},
		{
			title: 'Nix Flake',
			role: 'Developer',
			description: `
				After many long hours of perfecting a Linux desktop which fit
				my needs, I made this Nix flake available so anyone can use my personal configs.
				`,
			image: 'Permafrost2.png'
		},
		{
			title: '...',
			role: '-',
			description: `
			todo
			`,
			image: 'Permafrost2.png'
		}
	],

	other: [
		{
			title: 'Dueling',
			role: 'Developer',
			description: 'A fast-paced, 1v1 PvP matchup tournament event server',
			image: 'Dueling1.png'
		},
		{
			title: 'My Journal',
			role: 'Developer',
			description: 'Although this site was created with SvelteKit, my Journal site uses a custom-made SSG created with pure JS and Squirrelly as the templating engine. It was created to handle thousands of posts in an organized manner.',
			image: 'Dueling1.png'
		}
	],
};

export const heroItems = [
	{
		project: 'Myst',
		description: 'A discontinued Roblox exploration game.',
		images: [{ image: 'Myst.jpg' }]
	},
	{
		project: 'Permafrost',
		description:
			'A custom Minecraft survival server based in the dark, cold, snowy Northern tundra',
		images: [
			{
				image: 'Permafrost2.png'
			}
		]
	},
	{
		project: 'Dueling',
		description:
			'A fast-paced, 1v1 tournament-style matchup Minecraft server featuring rotating kits, maps, and collectible Titles',
		images: [
			{
				image: 'Dueling1.png',
				invertColors: true
			}
		]
	}
];
