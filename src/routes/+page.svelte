<script lang="ts">
	import { resolve } from '$app/paths';
	import { SKETCHES, YEARS } from '$lib/data/sketches';
	import Tag from '$lib/components/Tag/Tag.svelte';
	import TopBar from '$lib/components/TopBar/TopBar.svelte';

	const years = YEARS;
	const byYear = years.reduce<Record<number, typeof SKETCHES>>((acc, y) => {
		acc[y] = SKETCHES.filter((s) => s.year === y);
		return acc;
	}, {});
	const yearRange = `${years[years.length - 1]} — ${years[0]}`;
</script>

<svelte:head>
	<title>Sketchbook</title>
</svelte:head>

<div class="p-0">
	<TopBar active="home" />

	<div class="grid grid-cols-[1fr_auto] items-end gap-12 border-b border-(--rule) px-8 pt-20 pb-16">
		<div>
			<div class="mb-5 flex items-center gap-2 font-mono text-[11px] tracking-[0.06em] text-(--ink-3) uppercase before:h-px before:w-6 before:bg-(--accent) before:content-['']">Index · {yearRange}</div>
			<h1 class="m-0 mb-6 text-[88px] leading-[0.95] font-semibold tracking-[-0.04em] text-(--ink)">Sketchbook</h1>
			<p class="m-0 max-w-[540px] text-lg leading-[1.45] font-normal text-(--ink-2)">
				Processing sketches recovered from the archive: assignments, lessons, quizzes, references,
				and side projects from high school.
			</p>
		</div>
		<dl class="grid grid-cols-3 gap-8 border-y border-(--rule) py-4">
			<div>
				<div class="font-mono text-[32px] leading-none font-medium tracking-[-0.02em] text-(--ink) tabular-nums">{SKETCHES.length}</div>
				<div class="mt-1.5 font-mono text-[10px] tracking-[0.06em] text-(--ink-3) uppercase">Sketches</div>
			</div>
			<div>
				<div class="font-mono text-[32px] leading-none font-medium tracking-[-0.02em] text-(--ink) tabular-nums">{String(years.length).padStart(2, '0')}</div>
				<div class="mt-1.5 font-mono text-[10px] tracking-[0.06em] text-(--ink-3) uppercase">Years</div>
			</div>
			<div>
				<div class="font-mono text-[32px] leading-none font-medium tracking-[-0.02em] text-(--ink) tabular-nums">PDE</div>
				<div class="mt-1.5 font-mono text-[10px] tracking-[0.06em] text-(--ink-3) uppercase">Tooling</div>
			</div>
		</dl>
	</div>

	<div class="px-8">
		{#each years as year (year)}
			<section class="grid grid-cols-[80px_1fr] border-b border-(--rule) last:border-b-0">
				<div class="relative flex flex-col items-start border-r border-(--rule) py-8 before:absolute before:top-0 before:right-[-1px] before:bottom-0 before:w-px before:bg-(--rule) before:content-['']">
					<div class="absolute top-[38px] right-[-3.5px] z-[2] h-1.5 w-1.5 rounded-full bg-(--accent)"></div>
				</div>
				<div class="py-8 pl-8">
					<div class="mb-6 flex items-baseline gap-4">
						<h2 class="m-0 rounded border border-(--rule) bg-(--bg-elev) px-2 py-1 font-mono text-sm font-medium tracking-[0.02em] text-(--ink)">{year}</h2>
						<span class="font-mono text-[11px] tracking-[0.02em] text-(--ink-3)">{byYear[year].length} sketches</span>
					</div>
					<ol class="m-0 flex list-none flex-col p-0">
						{#each byYear[year] as s, i (s.slug)}
							<li class="group grid cursor-pointer grid-cols-[32px_1fr_80px_auto] items-center gap-4 rounded-md px-3 py-2.5 transition-colors duration-150 hover:bg-(--rule-soft)">
								<span class="font-mono text-[11px] text-(--ink-4) tabular-nums">{String(i + 1).padStart(2, '0')}</span>
								<a class="text-[15px] font-medium tracking-[-0.01em] text-(--ink) no-underline group-hover:text-(--accent)" href={resolve(`/sketches/${s.slug}`)}>{s.title}</a>
								<span class="font-mono text-[11px] tracking-[0.02em] text-(--ink-3) tabular-nums">{s.date.split(',')[0]}</span>
								<span class="flex gap-1">
									{#each s.tags as t (t)}
										<Tag name={t} href={resolve(`/tags/${t}`)} />
									{/each}
								</span>
							</li>
						{/each}
					</ol>
				</div>
			</section>
		{/each}
	</div>

	<footer class="mt-0 flex justify-between border-t border-(--rule) px-8 py-6 font-mono text-[11px] tracking-[0.02em] text-(--ink-3)">
		<span>Built from archived Processing source files</span>
		<span>·</span>
		<span>Last updated June 2018</span>
	</footer>
</div>
