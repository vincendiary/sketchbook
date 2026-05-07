<script lang="ts">
	import { renderPreview } from './canvas-previews';

	let {
		slug,
		width = 320,
		height = 200,
		accent = '#d8d2c4',
	}: { slug: string; width?: number; height?: number; accent?: string } = $props();

	const html = $derived(renderPreview(slug, width, height, accent));
</script>

<div class="cp-wrap">{@html html}</div>

<style>
	.cp-wrap {
		width: 100%;
		height: 100%;
	}
</style>
