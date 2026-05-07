<script lang="ts">
	import { resolve } from '$app/paths';
	import CanvasPreview from '$lib/CanvasPreview.svelte';
	import Tag from '$lib/Tag.svelte';
	import TopBar from '$lib/TopBar.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>#{data.tag} — Sketchbook</title>
</svelte:head>

<div class="sb-page">
	<TopBar active="tag" />

	<div class="sb-tag-hero">
		<div class="sb-tag-crumbs">
			<a href={resolve('/')}>Index</a> <span>/</span>
			<a href={resolve('/tags/projects')}>Tags</a> <span>/</span>
			<span class="sb-crumb-current">{data.tag}</span>
		</div>
		<h1 class="sb-tag-title">{data.tag}</h1>
		<p class="sb-tag-desc">{data.description}</p>
		<div class="sb-tag-stats">
			<span><b>{data.matches.length}</b> sketches</span>
			<span>·</span>
			<span><b>{data.years.length}</b> years</span>
			{#if data.years.length > 0}
				<span>·</span>
				<span>spans <b>{data.years[data.years.length - 1]} — {data.years[0]}</b></span>
			{/if}
		</div>
	</div>

	<div class="sb-tag-other">
		<span class="sb-tag-other-l">Other tags:</span>
		{#each data.otherTags as t (t)}
			<a class="sb-tag-other-a" href={resolve(`/tags/${t}`)}><Tag name={t} /></a>
		{/each}
	</div>

	<div class="sb-tag-list">
		{#each data.years as y (y)}
			<section class="sb-tag-year">
				<h2 class="sb-tag-year-label">{y}</h2>
				<div class="sb-tag-cards">
					{#each data.byYear[y] as s (s.slug)}
						<a class="sb-tag-card" href={resolve(`/sketches/${s.slug}`)}>
							<div class="sb-tag-card-canvas">
								<CanvasPreview slug={s.slug} width={260} height={140} accent="#d8d2c4" />
							</div>
							<div class="sb-tag-card-body">
								<h3 class="sb-tag-card-title">{s.title}</h3>
								<div class="sb-tag-card-meta">
									<span>{s.date}</span>
									<span class="sb-tag-card-tags">
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
