import adapter from '@sveltejs/adapter-static';
import { escapeSvelte, mdsvex } from 'mdsvex';
import { getSingletonHighlighter } from 'shiki';

const highlighter = getSingletonHighlighter({ themes: ['one-dark-pro'], langs: ['java'] });
const basePath = process.argv.includes('dev') ? '' : process.env.BASE_PATH || '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true),
	},
	kit: {
		adapter: adapter(),
		paths: {
			base: basePath,
		},
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.md'],
			highlight: (code, lang) => {
				const html = highlighter.codeToHtml(code, { lang });
				return escapeSvelte(html);
			},
		}),
	],
};

export default config;
