import { PROCESSING_ASSETS, PROCESSING_MARKDOWN, PROCESSING_SOURCES, type ProcessingAsset } from 'virtual:sketchbook-assets';

export type Tag = 'assignments' | 'lessons' | 'projects' | 'quizzes' | 'references';

export type SketchAsset = ProcessingAsset & {
	kind: 'audio' | 'document' | 'font' | 'image' | 'other';
};

export type SketchSourceFile = ProcessingAsset & {
	code: string;
	lineCount: number;
};

export type Sketch = {
	slug: string;
	title: string;
	year: number;
	date: string;
	sortDate: number;
	tags: Tag[];
	sourcePath: string;
	sourceFiles: SketchSourceFile[];
	assets: SketchAsset[];
	previewImage?: SketchAsset;
	p5AssetPath: string;
	canvasWidth: number;
	canvasHeight: number;
	description?: string;
	code: string;
	lineCount: number;
};

export const TAGS: Tag[] = ['projects', 'assignments', 'lessons', 'quizzes', 'references'];

export const TAG_DESCRIPTIONS: Record<Tag, string> = {
	assignments: 'Coursework and exercises pulled from the archived Processing folders.',
	lessons: 'Class demos and small practice sketches used to learn Processing basics.',
	projects: 'Larger experiments, summatives, and just-for-fun sketches from the archive.',
	quizzes: 'Quiz missions and short assessment sketches from the Processing course folders.',
	references: 'Reusable examples and tiny reference sketches saved for later projects.',
};

export const SKETCHES: Sketch[] = buildSketches();
export const YEARS = [...new Set(SKETCHES.map((sketch) => sketch.year))].sort((a, b) => b - a);

export function getSketch(slug: string): Sketch | undefined {
	return SKETCHES.find((s) => s.slug === slug);
}

export function neighbors(slug: string): { prev?: Sketch; next?: Sketch } {
	const i = SKETCHES.findIndex((s) => s.slug === slug);
	if (i === -1) return {};
	return { prev: SKETCHES[i - 1], next: SKETCHES[i + 1] };
}

function buildSketches(): Sketch[] {
	const groups = new Map<string, SketchSourceFile[]>();

	for (const source of PROCESSING_SOURCES) {
		const root = dirname(source.path);
		const sourceFile = {
			...source,
			lineCount: source.code.split(/\r\n|\r|\n/).length,
		};
		groups.set(root, [...(groups.get(root) ?? []), sourceFile]);
	}

	return [...groups.entries()]
		.map(([root, sourceFiles]) => {
			const sortedSourceFiles = sourceFiles.sort(comparePath);
			const year = yearFromPath(root);
			const assets = PROCESSING_ASSETS.filter((asset) => asset.path.startsWith(`${root}/`))
				.sort(comparePath)
				.map((asset) => ({ ...asset, kind: assetKind(asset.name) }));
			const tags = tagsFromPath(root);
			const dateInfo = dateFromPath(root, year);
			const markdown = PROCESSING_MARKDOWN.find((asset) => dirname(asset.path) === root);
			const code = sortedSourceFiles
				.map((source) => (sortedSourceFiles.length === 1 ? source.code : `// ${source.name}\n${source.code}`))
				.join('\n\n');
			const canvasSize = sizeFromCode(code);
			const slug = slugify(root.slice(1));

			return {
				slug,
				title: titleFromPath(root, sortedSourceFiles),
				year,
				date: dateInfo.label,
				sortDate: dateInfo.sortDate,
				tags,
				sourcePath: sortedSourceFiles[0].path,
				sourceFiles: sortedSourceFiles,
				assets,
				previewImage: assets.find((asset) => asset.kind === 'image'),
				p5AssetPath: `/p5/${slug}.js`,
				canvasWidth: canvasSize.width,
				canvasHeight: canvasSize.height,
				description: markdown?.code.trim(),
				code,
				lineCount: code.split(/\r\n|\r|\n/).length,
			};
		})
		.sort((a, b) => b.sortDate - a.sortDate || a.title.localeCompare(b.title));
}

function sizeFromCode(code: string): { width: number; height: number } {
	const match = code.match(/\bsize\s*\(\s*(\d+)\s*,\s*(\d+)/);
	return match ? { width: Number(match[1]), height: Number(match[2]) } : { width: 640, height: 480 };
}

function dirname(filePath: string): string {
	return filePath.split('/').slice(0, -1).join('/');
}

function yearFromPath(filePath: string): number {
	const match = filePath.match(/^\/(\d{4})(?:\/|$)/);
	return match ? Number(match[1]) : 0;
}

function dateFromPath(filePath: string, year: number): { label: string; sortDate: number } {
	const match = filePath.match(/(?:^|\/)(\d{1,2})-(\d{1,2})-(\d{4})(?:\b|[^0-9])/);
	if (!match) {
		return { label: String(year), sortDate: Date.UTC(year, 0, 1) };
	}

	const month = Number(match[1]);
	const day = Number(match[2]);
	const parsedYear = Number(match[3]);
	const date = new Date(Date.UTC(parsedYear, month - 1, day));

	return {
		label: date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric', timeZone: 'UTC' }),
		sortDate: date.getTime(),
	};
}

function titleFromPath(root: string, sources: SketchSourceFile[]): string {
	const folder = root.split('/').at(-1) ?? '';
	const mainSource = sources.find((source) => stripExtension(source.name).toLowerCase() === folder.toLowerCase()) ?? sources[0];
	const folderIsGeneric = /^(assignment|summative|project|prototype|sketch|lesson)s?$/i.test(folder);
	const candidate = folderIsGeneric ? stripExtension(mainSource.name) : folder;
	return humanize(candidate);
}

function humanize(value: string): string {
	return value
		.replace(/[_-]+/g, ' ')
		.replace(/([a-z])(\d)/g, '$1 $2')
		.replace(/(\d)([a-z])/gi, '$1 $2')
		.replace(/\s+/g, ' ')
		.trim()
		.split(' ')
		.map((part) => {
			if (/^[A-Z0-9]+$/.test(part)) return part;
			if (/^[AQ]\d+$/i.test(part)) return part.toUpperCase();
			return `${part.slice(0, 1).toUpperCase()}${part.slice(1).toLowerCase()}`;
		})
		.join(' ');
}

function tagsFromPath(filePath: string): Tag[] {
	const lower = filePath.toLowerCase();
	const tags: Tag[] = [];

	if (lower.includes('project') || lower.includes('summative') || lower.includes('just for fun')) tags.push('projects');
	if (lower.includes('assignment') || lower.includes('/a-') || lower.includes('/a0')) tags.push('assignments');
	if (lower.includes('lesson')) tags.push('lessons');
	if (lower.includes('quiz') || lower.includes('/q-') || lower.includes('/q0')) tags.push('quizzes');
	if (lower.includes('reference')) tags.push('references');

	return tags.length > 0 ? tags : ['projects'];
}

function assetKind(name: string): SketchAsset['kind'] {
	const extension = stripExtension(name, false).toLowerCase();
	if (['.gif', '.jpeg', '.jpg', '.png', '.webp'].includes(extension)) return 'image';
	if (['.mp3', '.wav', '.ogg'].includes(extension)) return 'audio';
	if (['.doc', '.docx', '.pdf'].includes(extension)) return 'document';
	if (['.ttf', '.vlw', '.woff', '.woff2'].includes(extension)) return 'font';
	return 'other';
}

function stripExtension(name: string, remove = true): string {
	const index = name.lastIndexOf('.');
	if (index === -1) return remove ? name : '';
	return remove ? name.slice(0, index) : name.slice(index);
}

function comparePath(a: { path: string }, b: { path: string }): number {
	return a.path.localeCompare(b.path);
}

function slugify(value: string): string {
	return value
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}
