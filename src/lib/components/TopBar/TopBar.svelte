<script lang="ts">
	import { page } from '$app/state';
	import { getContext } from 'svelte';
	import ThemeSwitch from '$lib/components/ThemeSwitch/ThemeSwitch.svelte';
	import { THEME_CONTEXT_KEY, type ThemeContext } from '$lib/theme';

	let { active }: { active?: 'home' | 'tag' | 'about' } = $props();

	const current = $derived(active ?? inferActive(page.url.pathname));
	const theme = getContext<ThemeContext>(THEME_CONTEXT_KEY);

	function inferActive(path: string): 'home' | 'tag' | 'about' {
		if (path.startsWith('/tags')) return 'tag';
		if (path.startsWith('/about')) return 'about';
		return 'home';
	}
</script>

<header class="sticky top-0 z-10 flex items-center justify-between border-b border-(--rule) bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] px-8 py-4 backdrop-blur-xl">
	<div class="flex items-center gap-2">
		<span class="relative inline-block h-[18px] w-[18px] bg-(--ink) text-[0px] after:absolute after:inset-1 after:bg-(--accent)"></span>
		<a class="text-sm font-semibold tracking-[-0.01em] text-(--ink) no-underline" href="/">Sketchbook</a>
	</div>
	<nav class="flex items-center gap-1">
		<a
			class={current === 'home'
				? 'rounded bg-(--rule-soft) px-2.5 py-1.5 font-mono text-[11px] tracking-[0.02em] text-(--ink) no-underline transition-all duration-150'
				: 'rounded px-2.5 py-1.5 font-mono text-[11px] tracking-[0.02em] text-(--ink-3) no-underline transition-all duration-150 hover:text-(--ink)'}
			href="/"
		>Index</a>
		<a
			class={current === 'tag'
				? 'rounded bg-(--rule-soft) px-2.5 py-1.5 font-mono text-[11px] tracking-[0.02em] text-(--ink) no-underline transition-all duration-150'
				: 'rounded px-2.5 py-1.5 font-mono text-[11px] tracking-[0.02em] text-(--ink-3) no-underline transition-all duration-150 hover:text-(--ink)'}
			href="/tags/projects"
		>Tags</a>
		<span
			class={current === 'about'
				? 'cursor-default rounded bg-(--rule-soft) px-2.5 py-1.5 font-mono text-[11px] tracking-[0.02em] text-(--ink) opacity-55'
				: 'cursor-default rounded px-2.5 py-1.5 font-mono text-[11px] tracking-[0.02em] text-(--ink-3) opacity-55'}
		>About</span>
		<div class="ml-2 flex items-center border-l border-(--rule) pl-3">
			<ThemeSwitch value={theme.state.value} onchange={(next) => theme.setTheme(next)} />
		</div>
	</nav>
</header>
