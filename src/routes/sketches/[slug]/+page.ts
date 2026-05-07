import { error } from '@sveltejs/kit';
import { FEATURED_SKETCH, SKETCHES, getSketch, neighbors } from '$lib/sketches';

export const prerender = true;

export function entries() {
	return SKETCHES.map((s) => ({ slug: s.slug }));
}

export function load({ params }: { params: { slug: string } }) {
	const sketch = getSketch(params.slug);
	if (!sketch) throw error(404, `Unknown sketch: ${params.slug}`);
	const featured = sketch.slug === FEATURED_SKETCH.slug ? FEATURED_SKETCH : null;
	const index = SKETCHES.findIndex((s) => s.slug === sketch.slug);
	return {
		sketch,
		featured,
		index,
		...neighbors(sketch.slug),
	};
}
