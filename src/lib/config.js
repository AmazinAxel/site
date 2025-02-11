export const pages = [
	{
		title: 'Contact',
		route: '/contact',
		icon: 'contact'
	},
	{
		title: 'Tools',
		route: '/tools',
		icon: 'tools',
		subitems: [
			{
				title: 'Text Converter',
				route: 'textconverter'
			},
			{
				title: 'Emoji Picker',
				route: 'emojipicker'
			}
		]
	}
];

export const projects = [
	{
		title: 'Permafrost',
		role: 'Project Manager',
		description: `
			An entirely custom Minecraft survival server. Survive the harsh winter 
			and explore the cold snowy tundra wasteland, or scavenge for resources 
			with friends. Build a hideout and gather resources or attack enemy 
			compounds for loot. Exeperience survival gameplay like never before.
			`,
		image: 'Permafrost2.png',
		lightBackground: true
	},
	{
		title: 'Dueling',
		role: '',
		description:
			'A competitive 1v1 PvP matchup tournament event server. Duel others to the death in quick 1v1 duels. Featuring collectible Titles, various custom kits, and rotating maps. Available on Minekeep.',
		image: 'Dueling1.png'
	},
	{
		title: 'Nix Flake',
		role: '',
		image: '../projects/flake.png',
		description:
			'My Nix desktop & machine configurations. Built using Astal and home-manager.',
		url: 'https://github.com/AmazinAxel/flake',
	}
]

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
				image: 'Permafrost1.png'
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
			},
			{
				image: 'Dueling2.png',
				invertColors: true
			}
		]
	}
];
