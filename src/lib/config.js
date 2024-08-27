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
				route: '/tools/textconverter'
			}
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
			}
		]
	}
];

export const projects = {
	major: [
		{
			title: 'Permafrost',
			role: 'Lead Developer and Project Manager',
			description: `
				Originally inspired from Barrenlands, a cancelled project,
				Permafrost is a winter survival game. As the sole developer
				and project manager, I create new features and maintain the
				game while also managing the community.`,
			image: 'add an image here todo'
		},
		{
			title: '',
			role: '',
			description: ''
		}
	],

	other: [
		{
			title: 'Dueling',
			role: 'Developer',
			description: 'A fast-paced, 1v1 PvP matchup tournament event server.',
			image: 'todo'
		}
	],

	archived: [
		{
			title: 'Lofi Player',
			url: 'TODO add url here',
			description:
				'The Lofi player is a music PWA intended for listening to Lo-fi music on-the-go.',
			image: 'todo'
		},
		{
			title: 'Siege',
			url: '',
			description:
				'A rotating minigame server, focused on quick-combat, close-range gameplay. Inspired from Rainbow Six Siege.'
		},
		{
			title: 'Egg Development',
			description:
				'My first solo indie game studio, I created various Minecraft servers, including: WizardryKB, EggEvents, EggSiege, and EggDuels. All assets from this studio were liquidated into the Permafrost community.',
			image: 'todo'
		},
		{
			title: ''
		}
	]
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
			'A custom Minecraft survival server based in the dark, cold, snowy Northern tundra.',
		images: [
			{
				image: 'Permafrost2.png'
			}
		]
	},
	{
		project: 'Dueling',
		description:
			'A fast-paced, 1v1 tournament-style matchup server featuring custom kits, maps, and Titles.',
		images: [
			{
				image: 'Dueling1.png',
				invertColors: true
			}
		]
	}
];
