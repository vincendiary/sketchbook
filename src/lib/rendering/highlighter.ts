import { getSingletonHighlighter } from 'shiki';

export async function getHighlighter() {
	const highlighter = await getSingletonHighlighter({
		themes: ['one-dark-pro'],
		langs: ['java'],
	});
	return highlighter;
}
