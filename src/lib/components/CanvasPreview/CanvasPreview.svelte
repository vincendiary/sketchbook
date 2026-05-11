<script lang="ts">
	import { renderPreview } from '$lib/rendering/canvas-previews';

	let {
		slug,
		width = 320,
		height = 200,
		accent = '#d8d2c4',
	}: { slug: string; width?: number; height?: number; accent?: string } = $props();

	const html = $derived(renderPreview(slug, width, height, accent));
</script>

<div class="h-full w-full">{@html html}</div>
