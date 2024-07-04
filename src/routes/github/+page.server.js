// Load all Github repos from my personal account
export const load = async () => {
	try {
		const githubUserReposAPI = `https://api.github.com/users/amazinaxel/repos`;
		const repos = await fetch(githubUserReposAPI).then((response) => response.json());

		return { repos };
	} catch (e) {
		console.log('No connection to external site!');
		return {
			title: 'Unable to find repositories',
			link: 'https://amazinaxel.com',
			description: 'The build server cannot connect the GitHub API so the repository list could not be generated.'
		};
	};
};

