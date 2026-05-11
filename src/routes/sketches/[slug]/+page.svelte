<script lang="ts">
	import { base, resolve } from '$app/paths';
	import P5Sketch from '$lib/components/P5Sketch/P5Sketch.svelte';
	import Tag from '$lib/components/Tag/Tag.svelte';
	import TopBar from '$lib/components/TopBar/TopBar.svelte';
	import { highlightP5 } from '$lib/rendering/highlight';
	import { renderMarkdown } from '$lib/rendering/markdown';

	let { data } = $props();

	const s = $derived(data.sketch);
	const codeHtml = $derived(highlightP5(s.code));
	const descriptionHtml = $derived(s.description ? renderMarkdown(s.description) : '');
	const num = $derived(String(data.index + 1).padStart(2, '0'));
	const assetHref = (path: string) => `${base}${path}`;
</script>

<svelte:head>
	<title>{s.title} — Sketchbook</title>
</svelte:head>

<div class="p-0">
	<TopBar />

	<div class="flex items-center gap-2 border-b border-(--rule) px-8 py-4 font-mono text-[11px] tracking-[0.02em] text-(--ink-3) [&_a]:cursor-pointer [&_a]:text-(--ink-3) [&_a]:no-underline hover:[&_a]:text-(--ink)">
		<a href={resolve('/')}>Index</a> <span>/</span>
		<span>{s.year}</span> <span>/</span>
		<span class="text-(--ink)">{s.title}</span>
	</div>

	<div class="grid grid-cols-[1fr_auto] items-end gap-8 border-b border-(--rule) px-8 pt-12 pb-8">
		<div>
			<span class="font-mono text-[11px] tracking-[0.06em] text-(--ink-3) uppercase">№ {num}</span>
			<h1 class="m-0 mt-2 mb-4 text-[56px] leading-none font-semibold tracking-[-0.03em] text-(--ink)">{s.title}</h1>
			<div class="flex gap-1.5">
				{#each s.tags as t (t)}
					<Tag name={t} href={resolve(`/tags/${t}`)} />
				{/each}
			</div>
		</div>
		<div class="flex shrink-0 gap-1.5">
			{#if data.prev}
				<a class="cursor-pointer rounded border border-(--rule) bg-(--bg-elev) px-3 py-2 font-mono text-[11px] tracking-[0.02em] text-(--ink-2) no-underline transition-all duration-150 hover:border-(--ink) hover:text-(--ink)" href={resolve(`/sketches/${data.prev.slug}`)}>← {data.prev.title}</a>
			{/if}
			{#if data.next}
				<a class="cursor-pointer rounded border border-(--rule) bg-(--bg-elev) px-3 py-2 font-mono text-[11px] tracking-[0.02em] text-(--ink-2) no-underline transition-all duration-150 hover:border-(--ink) hover:text-(--ink)" href={resolve(`/sketches/${data.next.slug}`)}>{data.next.title} →</a>
			{/if}
		</div>
	</div>

	<div class="grid grid-cols-[1.4fr_1fr] gap-px border-b border-(--rule) bg-(--rule) [&>*]:bg-(--bg) [&>*]:p-8">
		<div>
			<div class="relative aspect-[4/3] overflow-hidden rounded-md border border-(--rule) bg-(--canvas-bg)">
				<P5Sketch slug={s.slug} src={s.p5AssetPath} width={s.canvasWidth} height={s.canvasHeight} title={s.title} />
			</div>
			<div class="flex items-center justify-between pt-3 font-mono text-[11px] tracking-[0.02em] text-(--ink-3)">
				<span>{s.canvasWidth}×{s.canvasHeight} · p5.js instance mode</span>
				<div class="flex gap-1.5">
					<a class="cursor-pointer rounded border border-(--rule) bg-(--bg-elev) px-2.5 py-1 font-mono text-[11px] text-(--ink-2) no-underline transition-all duration-150 hover:border-(--ink) hover:text-(--ink)" href={assetHref(s.p5AssetPath)}>p5</a>
					<a class="cursor-pointer rounded border border-(--rule) bg-(--bg-elev) px-2.5 py-1 font-mono text-[11px] text-(--ink-2) no-underline transition-all duration-150 hover:border-(--ink) hover:text-(--ink)" href={assetHref(s.sourcePath)}>pde</a>
				</div>
			</div>
		</div>

		<div class="!bg-(--code-bg) !p-0 flex flex-col">
			<div class="flex items-center justify-between border-b border-(--code-rule) px-4 py-3 font-mono text-[11px] tracking-[0.02em] text-[#8a8a86] before:mr-3 before:text-[8px] before:tracking-[4px] before:text-[#3a3a36] before:content-['●_●_●']">
				<span class="flex-1 font-medium text-[#d4d4cc]">{s.sourceFiles.length === 1 ? s.sourceFiles[0].name : `${s.sourceFiles.length} PDE files`}</span>
				<span class="text-[#6e6e68]">{s.lineCount} lines</span>
			</div>
			<pre class="m-0 flex-1 overflow-auto p-5 font-mono text-xs leading-[1.7] whitespace-pre text-(--code-ink) select-text"><code>{@html codeHtml}</code></pre>
			<div class="border-t border-(--code-rule) px-4 py-2.5 font-mono text-[10px] tracking-normal text-[#6e6e68]">
				<span>read-only archive source from {s.sourcePath}</span>
			</div>
		</div>

		<aside>
			<h3 class="m-0 mb-3.5 flex items-center gap-2 font-mono text-[10px] font-medium tracking-[0.08em] text-(--ink-3) uppercase before:h-1 before:w-1 before:rounded-full before:bg-(--accent) before:content-['']">Details</h3>
			<dl class="m-0 mb-2 grid grid-cols-[72px_1fr] gap-x-4 gap-y-2.5 text-[13px] [&_dd]:m-0 [&_dd]:font-sans [&_dd]:text-(--ink) [&_dt]:pt-0.5 [&_dt]:font-mono [&_dt]:text-[10px] [&_dt]:tracking-[0.04em] [&_dt]:text-(--ink-3) [&_dt]:uppercase">
				<dt>Date</dt>
				<dd>{s.date}</dd>
				<dt>Year</dt>
				<dd>{s.year}</dd>
				<dt>Tools</dt>
				<dd>p5.js</dd>
				<dt>Source</dt>
				<dd>{s.sourceFiles.length} PDE file{s.sourceFiles.length === 1 ? '' : 's'}</dd>
				<dt>Canvas</dt>
				<dd>{s.canvasWidth}×{s.canvasHeight}</dd>
				<dt>Assets</dt>
				<dd>{s.assets.length}</dd>
				<dt>Tags</dt>
				<dd>{s.tags.join(', ')}</dd>
			</dl>
		</aside>

		<article>
			<h3 class="m-0 mb-5 flex items-center gap-2 font-mono text-[10px] font-medium tracking-[0.08em] text-(--ink-3) uppercase before:h-1 before:w-1 before:rounded-full before:bg-(--accent) before:content-['']">Description</h3>
			{#if s.description}
				<div class="mb-[18px] text-[15px] leading-[1.65] text-(--ink) [&_a]:text-(--accent) [&_code]:font-mono [&_code]:text-xs [&_code]:text-(--ink-2) [&_h3]:m-0 [&_h3]:mb-3 [&_h3]:text-xl [&_li]:mb-1 [&_p]:m-0 [&_p]:mb-[18px] [&_ul]:m-0 [&_ul]:mb-[18px] [&_ul]:pl-5">
					{@html descriptionHtml}
				</div>
			{:else}
				<p class="m-0 mb-[18px] text-[15px] leading-[1.65] text-(--ink) [&_code]:font-mono [&_code]:text-xs [&_code]:text-(--ink-2)">
					This page is generated from the Processing project folder at <code>{s.sourcePath}</code>.
				</p>
			{/if}
			<h3 class="m-0 mb-5 flex items-center gap-2 font-mono text-[10px] font-medium tracking-[0.08em] text-(--ink-3) uppercase before:h-1 before:w-1 before:rounded-full before:bg-(--accent) before:content-['']">Archive</h3>
			<div class="flex flex-col gap-1.5">
				{#each s.sourceFiles as file (file.path)}
					<a class="flex justify-between gap-4 rounded border border-(--rule) bg-(--bg-elev) px-2.5 py-2 font-mono text-[11px] text-(--ink) no-underline hover:border-(--accent) hover:text-(--accent)" href={assetHref(file.path)}>{file.name}<span class="whitespace-nowrap text-(--ink-3)">{file.lineCount} lines</span></a>
				{/each}
				<a class="flex justify-between gap-4 rounded border border-(--rule) bg-(--bg-elev) px-2.5 py-2 font-mono text-[11px] text-(--ink) no-underline hover:border-(--accent) hover:text-(--accent)" href={assetHref(s.p5AssetPath)}>converted p5.js<span class="whitespace-nowrap text-(--ink-3)">js</span></a>
			</div>
			{#if s.assets.length > 0}
				<h3 class="mt-7 mb-5 flex items-center gap-2 font-mono text-[10px] font-medium tracking-[0.08em] text-(--ink-3) uppercase before:h-1 before:w-1 before:rounded-full before:bg-(--accent) before:content-['']">Assets</h3>
				<div class="flex flex-col gap-1.5">
					{#each s.assets as asset (asset.path)}
						<a class="flex justify-between gap-4 rounded border border-(--rule) bg-(--bg-elev) px-2.5 py-2 font-mono text-[11px] text-(--ink) no-underline hover:border-(--accent) hover:text-(--accent)" href={assetHref(asset.path)}>{asset.name}<span class="whitespace-nowrap text-(--ink-3)">{asset.kind}</span></a>
					{/each}
				</div>
			{:else}
				<p class="m-0 mb-[18px] text-[15px] leading-[1.65] text-(--ink)">No companion assets were found in this sketch folder.</p>
			{/if}
		</article>
	</div>
</div>
