import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';
import Icons from 'unplugin-icons/vite';
import { defineConfig, type Plugin } from 'vite';

export default defineConfig({
	build: {
		rolldownOptions: {
			checks: {
				pluginTimings: false,
			},
		},
	},
	plugins: [sketchbookAssets(), tailwindcss(), sveltekit(), Icons({ compiler: 'svelte' })],
});

function sketchbookAssets(): Plugin {
	const virtualId = 'virtual:sketchbook-assets';
	const resolvedVirtualId = `\0${virtualId}`;

	return {
		name: 'sketchbook-assets',
		resolveId(id) {
			return id === virtualId ? resolvedVirtualId : null;
		},
		load(id) {
			if (id !== resolvedVirtualId) return null;

			const staticDir = path.resolve(__dirname, 'static');
			const files = walk(staticDir);
			const sources = files.filter((file) => file.publicPath.toLowerCase().endsWith('.pde')).map((file) => ({
				...toAsset(file),
				code: fs.readFileSync(file.absolutePath, 'utf8'),
			}));
			const markdown = files.filter((file) => file.publicPath.toLowerCase().endsWith('.md')).map((file) => ({
				...toAsset(file),
				code: fs.readFileSync(file.absolutePath, 'utf8'),
			}));
			const assets = files
				.filter((file) => !file.publicPath.toLowerCase().endsWith('.pde') && !file.publicPath.toLowerCase().endsWith('.md'))
				.map(toAsset);

			for (const file of files) this.addWatchFile(file.absolutePath);

			return [
				`export const PROCESSING_SOURCES = ${JSON.stringify(sources)};`,
				`export const PROCESSING_MARKDOWN = ${JSON.stringify(markdown)};`,
				`export const PROCESSING_ASSETS = ${JSON.stringify(assets)};`,
			].join('\n');
		},
	};
}

function walk(root: string, dir = root): Array<{ absolutePath: string; publicPath: string }> {
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	const files: Array<{ absolutePath: string; publicPath: string }> = [];

	for (const entry of entries) {
		if (entry.name.startsWith('.')) continue;

		const absolutePath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			files.push(...walk(root, absolutePath));
			continue;
		}

		files.push({
			absolutePath,
			publicPath: `/${path.relative(root, absolutePath).replaceAll(path.sep, '/')}`,
		});
	}

	return files;
}

function toAsset(file: { absolutePath: string; publicPath: string }) {
	const stats = fs.statSync(file.absolutePath);
	return {
		path: file.publicPath,
		name: path.basename(file.absolutePath),
		size: stats.size,
	};
}
