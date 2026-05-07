<script lang="ts">
	import { resolve } from '$app/paths';
	import CanvasPreview from '$lib/CanvasPreview.svelte';
	import Tag from '$lib/Tag.svelte';
	import TopBar from '$lib/TopBar.svelte';
	import { highlightP5 } from '$lib/highlight';

	let { data } = $props();

	const s = $derived(data.sketch);
	const featured = $derived(data.featured);
	const codeHtml = $derived(featured ? highlightP5(featured.code) : '');
	const lineCount = $derived(featured ? featured.code.split('\n').length : 0);
	const num = $derived(String(data.index + 1).padStart(2, '0'));
</script>

<svelte:head>
	<title>{s.title} — Sketchbook</title>
</svelte:head>

<div class="sb-page sb-detail">
	<TopBar />

	<div class="sb-detail-crumbs">
		<a href={resolve('/')}>Index</a> <span>/</span>
		<a href={resolve(`/tags/${s.year}`)}>{s.year}</a> <span>/</span>
		<span class="sb-crumb-current">{s.title}</span>
	</div>

	<div class="sb-detail-head">
		<div>
			<span class="sb-detail-num">№ {num}</span>
			<h1 class="sb-detail-title">{s.title}</h1>
			<div class="sb-detail-tags">
				{#each s.tags as t (t)}
					<Tag name={t} href={resolve(`/tags/${t}`)} />
				{/each}
			</div>
		</div>
		<div class="sb-detail-nav">
			{#if data.prev}
				<a class="sb-nav-btn" href={resolve(`/sketches/${data.prev.slug}`)}>← {data.prev.title}</a>
			{/if}
			{#if data.next}
				<a class="sb-nav-btn" href={resolve(`/sketches/${data.next.slug}`)}>{data.next.title} →</a>
			{/if}
		</div>
	</div>

	<div class="sb-detail-grid sb-layout-side">
		<div class="sb-canvas-wrap">
			<div class="sb-canvas-frame">
				<CanvasPreview slug={s.slug} width={640} height={480} accent="#d8d2c4" />
			</div>
			<div class="sb-canvas-caption">
				<span>800 × 600 · p5.js</span>
				<button class="sb-canvas-btn">↻ replay</button>
			</div>
		</div>

		<div class="sb-code-wrap">
			<div class="sb-code-head">
				<span class="sb-code-filename">{s.slug}.js</span>
				<span class="sb-code-bytes">{lineCount || '—'} lines</span>
			</div>
			{#if featured}
				<pre class="sb-code"><code>{codeHtml}</code></pre>
				<div class="sb-code-foot">
					<span class="sb-code-note"
						>read-only — code preview is decoupled from the canvas above</span
					>
				</div>
			{:else}
				<pre class="sb-code"><code><span class="tk-co">// source not archived</span></code></pre>
				<div class="sb-code-foot">
					<span class="sb-code-note">no code captured for this sketch</span>
				</div>
			{/if}
		</div>

		<aside class="sb-meta">
			<h3 class="sb-meta-h">Details</h3>
			<dl class="sb-meta-list">
				<dt>Date</dt>
				<dd>{s.date}</dd>
				<dt>Year</dt>
				<dd>{s.year}</dd>
				<dt>Tools</dt>
				<dd>p5.js, Atom</dd>
				<dt>Tags</dt>
				<dd>{s.tags.join(', ')}</dd>
			</dl>
			{#if featured}
				<h3 class="sb-meta-h">Purpose</h3>
				<p class="sb-meta-purpose">{featured.purpose}</p>
			{/if}
		</aside>

		<article class="sb-journal">
			<h3 class="sb-journal-h">Journal</h3>
			{#if featured}
				{#each featured.journal as p (p)}
					<p class="sb-journal-p">{p}</p>
				{/each}
				<div class="sb-journal-sig">— me, the night of March 3rd</div>
			{:else}
				<p class="sb-journal-p">No journal entry archived for this sketch.</p>
			{/if}
		</article>
	</div>
</div>
