<script lang="ts">
	import { resolve } from '$app/paths';
	import { SKETCHES } from '$lib/sketches';
	import Tag from '$lib/Tag.svelte';
	import TopBar from '$lib/TopBar.svelte';

	const years = [2018, 2017, 2016, 2015];
	const byYear = years.reduce<Record<number, typeof SKETCHES>>((acc, y) => {
		acc[y] = SKETCHES.filter((s) => s.year === y);
		return acc;
	}, {});
</script>

<svelte:head>
	<title>Sketchbook</title>
</svelte:head>

<div class="sb-page">
	<TopBar active="home" />

	<div class="sb-hero">
		<div>
			<div class="sb-hero-eyebrow">Index · 2015 — 2018</div>
			<h1 class="sb-hero-title">Sketchbook</h1>
			<p class="sb-hero-sub">
				Four years of code-as-drawing — assignments, lessons, and side projects from high school,
				collected so I can remember what I was thinking.
			</p>
		</div>
		<dl class="sb-hero-stats">
			<div>
				<div class="sb-hero-stat-num">{SKETCHES.length}</div>
				<div class="sb-hero-stat-lbl">Sketches</div>
			</div>
			<div>
				<div class="sb-hero-stat-num">04</div>
				<div class="sb-hero-stat-lbl">Years</div>
			</div>
			<div>
				<div class="sb-hero-stat-num">p5</div>
				<div class="sb-hero-stat-lbl">Tooling</div>
			</div>
		</dl>
	</div>

	<div class="sb-timeline">
		{#each years as year (year)}
			<section class="sb-year">
				<div class="sb-year-rail">
					<div class="sb-year-dot"></div>
				</div>
				<div class="sb-year-body">
					<div class="sb-year-head">
						<h2 class="sb-year-label">{year}</h2>
						<span class="sb-year-count">{byYear[year].length} sketches</span>
					</div>
					<ol class="sb-sketch-list">
						{#each byYear[year] as s, i (s.slug)}
							<li class="sb-sketch-item">
								<span class="sb-sketch-num">{String(i + 1).padStart(2, '0')}</span>
								<a class="sb-sketch-title" href={resolve(`/sketches/${s.slug}`)}>{s.title}</a>
								<span class="sb-sketch-date">{s.date.split(',')[0]}</span>
								<span class="sb-sketch-tags">
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

	<footer class="sb-footer">
		<span>Made between math homework</span>
		<span>·</span>
		<span>Last updated June 2018</span>
	</footer>
</div>
