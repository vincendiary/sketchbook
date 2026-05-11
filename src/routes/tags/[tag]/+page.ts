import { error } from '@sveltejs/kit';
import { SKETCHES, TAGS, TAG_DESCRIPTIONS, type Tag } from '$lib/data/sketches';

export const prerender = true;

export function entries() {
	return TAGS.map((tag) => ({ tag }));
}

export function load({ params }: { params: { tag: string } }) {
	const tag = params.tag as Tag;
	if (!TAGS.includes(tag)) throw error(404, `Unknown tag: ${params.tag}`);
	const matches = SKETCHES.filter((s) => s.tags.includes(tag));
	const byYear: Record<number, typeof SKETCHES> = {};
	for (const s of matches) (byYear[s.year] ??= []).push(s);
	const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);
	return {
		tag,
		description: TAG_DESCRIPTIONS[tag],
		matches,
		byYear,
		years,
		otherTags: TAGS.filter((t) => t !== tag),
	};
}
