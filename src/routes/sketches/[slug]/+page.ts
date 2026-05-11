import { error } from '@sveltejs/kit';
import { SKETCHES, getSketch, neighbors } from '$lib/data/sketches';

export const prerender = true;

export function entries() {
	return SKETCHES.map((s) => ({ slug: s.slug }));
}

export function load({ params }: { params: { slug: string } }) {
	const sketch = getSketch(params.slug);
	if (!sketch) throw error(404, `Unknown sketch: ${params.slug}`);
	const index = SKETCHES.findIndex((s) => s.slug === sketch.slug);
	return {
		sketch,
		index,
		...neighbors(sketch.slug),
	};
}
