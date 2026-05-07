<script lang="ts">
	import { page } from '$app/state';

	let { active }: { active?: 'home' | 'tag' | 'about' } = $props();

	const current = $derived(active ?? inferActive(page.url.pathname));

	function inferActive(path: string): 'home' | 'tag' | 'about' {
		if (path.startsWith('/tags')) return 'tag';
		if (path.startsWith('/about')) return 'about';
		return 'home';
	}
</script>

<header class="sb-topbar">
	<div class="sb-topbar-left">
		<span class="sb-mark"></span>
		<a class="sb-wordmark" href="/" style="text-decoration:none">Sketchbook</a>
	</div>
	<nav class="sb-topnav">
		<a class={current === 'home' ? 'is-active' : ''} href="/">Index</a>
		<a class={current === 'tag' ? 'is-active' : ''} href="/tags/projects">Tags</a>
		<span class:is-active={current === 'about'} class="sb-topnav-disabled">About</span>
	</nav>
</header>

<style>
	:global(.sb-topnav .sb-topnav-disabled) {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		letter-spacing: 0.02em;
		color: var(--ink-3);
		padding: 6px 10px;
		border-radius: 4px;
		opacity: 0.55;
		cursor: default;
	}
</style>
