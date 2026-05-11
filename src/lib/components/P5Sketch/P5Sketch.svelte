<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	type P5Constructor = new (factory: (p: unknown) => void, host: HTMLElement) => { remove: () => void };

	let {
		slug,
		src,
		width,
		height,
		title,
	}: {
		slug: string;
		src: string;
		width: number;
		height: number;
		title: string;
	} = $props();

	let host: HTMLDivElement;
	let error = $state('');
	let p5Loader: Promise<P5Constructor> | undefined;

	function loadScript(src: string): Promise<void> {
		const existing = document.head.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
		if (existing?.dataset.loaded === 'true') return Promise.resolve();

		return new Promise((resolve, reject) => {
			const script = existing ?? document.createElement('script');
			script.src = src;
			script.async = true;
			script.onload = () => {
				script.dataset.loaded = 'true';
				resolve();
			};
			script.onerror = () => reject(new Error(`Failed to load ${src}`));
			if (!existing) document.head.append(script);
		});
	}

	function loadP5(): Promise<P5Constructor> {
		p5Loader ??= loadScript(`${base}/vendor/p5.min.js`).then(() => {
			const runtimeWindow = window as unknown as { p5?: P5Constructor };
			if (!runtimeWindow.p5) throw new Error('p5 global unavailable');
			return runtimeWindow.p5;
		});
		return p5Loader;
	}

	onMount(() => {
		let sketch: { remove: () => void } | undefined;
		let cancelled = false;

		async function mount() {
			try {
				const P5 = await loadP5();
				const runtimeWindow = window as unknown as {
					__SKETCHBOOK_ASSET_BASE__: string;
					__SKETCHBOOK_P5__?: Record<string, (p: unknown) => void>;
				};
				runtimeWindow.__SKETCHBOOK_ASSET_BASE__ = base;

				await loadScript(`${base}${src}`);
				if (cancelled) return;
				const factory = runtimeWindow.__SKETCHBOOK_P5__?.[slug];
				if (!factory) {
					error = 'Converted sketch not found.';
					return;
				}
				host.replaceChildren();
				sketch = new P5(factory, host);
			} catch {
				error = 'Sketch failed to load.';
			}
		}

		mount();

		return () => {
			cancelled = true;
			sketch?.remove();
		};
	});
</script>

<div class="relative h-full w-full bg-(--canvas-bg)" aria-label={`${title} rendered p5 canvas`}>
	<div
		bind:this={host}
		class="flex h-full w-full items-center justify-center [&_canvas]:!h-full [&_canvas]:!w-full [&_canvas]:object-contain"
		style={`aspect-ratio: ${width} / ${height}`}
	></div>
	{#if error}
		<div class="absolute inset-0 flex items-center justify-center px-6 text-center font-mono text-[11px] text-(--ink-3)">
			{error}
		</div>
	{/if}
</div>
