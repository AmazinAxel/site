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
		description: 'An all-custom & unique Minecraft survival server set in a desolate tundra.',
		image: 'Permafrost2.png',
		lightBackground: true
	},
	{
		title: 'Dueling',
		role: '',
		description:
			`A competitive 1v1 PvP matchup tournament event server.
			Featuring collectible Titles and rotating kits/maps.
			Available on Minekeep.`,
		image: 'Dueling1.png'
	},
	{
		title: 'Nix Flake',
		role: '',
		image: '../projects/flake.png',
		description: 'My Nix desktop & machine configurations. Built using Astal and home-manager.',
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
