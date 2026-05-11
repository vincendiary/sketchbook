<script lang="ts">
	import { base, resolve } from '$app/paths';
	import CanvasPreview from '$lib/components/CanvasPreview/CanvasPreview.svelte';
	import Tag from '$lib/components/Tag/Tag.svelte';
	import TopBar from '$lib/components/TopBar/TopBar.svelte';

	let { data } = $props();

	const assetHref = (path: string) => `${base}${path}`;
</script>

<svelte:head>
	<title>#{data.tag} — Sketchbook</title>
</svelte:head>

<div class="p-0">
	<TopBar active="tag" />

	<div class="border-b border-(--rule) px-8 pt-12 pb-10">
		<div class="mb-8 flex gap-2 font-mono text-[11px] tracking-[0.02em] text-(--ink-3)">
			<a href={resolve('/')}>Index</a> <span>/</span>
			<a href={resolve('/tags/projects')}>Tags</a> <span>/</span>
			<span class="text-(--ink)">{data.tag}</span>
		</div>
		<h1 class="m-0 mb-4 flex items-center gap-3 text-[64px] leading-none font-semibold tracking-[-0.04em] text-(--ink) before:font-mono before:text-5xl before:font-normal before:text-(--accent) before:content-['#']">{data.tag}</h1>
		<p class="m-0 mb-7 max-w-[600px] text-[17px] leading-normal text-(--ink-2)">{data.description}</p>
		<div class="flex gap-6 font-mono text-[11px] tracking-[0.02em] text-(--ink-3) [&_b]:font-semibold [&_b]:text-(--ink) [&_b]:tabular-nums">
			<span><b>{data.matches.length}</b> sketches</span>
			<span>·</span>
			<span><b>{data.years.length}</b> years</span>
			{#if data.years.length > 0}
				<span>·</span>
				<span>spans <b>{data.years[data.years.length - 1]} — {data.years[0]}</b></span>
			{/if}
		</div>
	</div>

	<div class="flex items-center gap-3 border-b border-(--rule) bg-(--rule-soft) px-8 py-3.5">
		<span class="font-mono text-[10px] tracking-[0.06em] text-(--ink-3) uppercase">Other tags:</span>
		{#each data.otherTags as t (t)}
			<a class="inline-flex cursor-pointer no-underline" href={resolve(`/tags/${t}`)}><Tag name={t} /></a>
		{/each}
	</div>

	<div class="flex flex-col">
		{#each data.years as y (y)}
			<section class="border-b border-(--rule) px-8 py-10 last:border-b-0">
				<h2 class="m-0 mb-6 inline-block rounded border border-(--rule) bg-(--bg-elev) px-2 py-1 font-mono text-xs font-medium tracking-[0.02em] text-(--ink)">{y}</h2>
				<div class="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6">
					{#each data.byYear[y] as s (s.slug)}
						<a class="group flex cursor-pointer flex-col gap-3 rounded-lg border border-(--rule) bg-(--bg-elev) p-3 text-inherit no-underline transition-all duration-150 hover:-translate-y-0.5 hover:border-(--ink)" href={resolve(`/sketches/${s.slug}`)}>
							<div class="aspect-video overflow-hidden rounded border border-(--rule) bg-(--canvas-bg)">
								{#if s.previewImage}
									<img class="block h-full w-full bg-(--canvas-bg) object-contain" src={assetHref(s.previewImage.path)} alt="" />
								{:else}
									<CanvasPreview slug={s.slug} width={260} height={140} accent="#d8d2c4" />
								{/if}
							</div>
							<div>
								<h3 class="m-0 mb-1.5 text-base font-medium tracking-[-0.01em] text-(--ink) group-hover:text-(--accent)">{s.title}</h3>
								<div class="flex items-center justify-between font-mono text-[10px] tracking-[0.02em] text-(--ink-3)">
									<span>{s.date}</span>
									<span class="flex gap-1">
										{#each s.tags.filter((t) => t !== data.tag) as t (t)}
											<Tag name={t} />
										{/each}
									</span>
								</div>
							</div>
						</a>
					{/each}
				</div>
			</section>
		{/each}
	</div>
</div>
