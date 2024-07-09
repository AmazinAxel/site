import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const article = await import(`$lib/components/help-pages/${params.help}.md`);
		return {
			articleContent: article.default
		};
	} catch (err) {
		error(404, "The article you're looking for cannot be found.");
	}
};
