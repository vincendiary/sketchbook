<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import { THEME_CONTEXT_KEY, type Theme, type ThemeContext } from '$lib/theme';
	import '../app.css';

	let { children } = $props();

	const STORAGE_KEY = 'sketchbook-theme';
	const themeState = $state<{ value: Theme }>({ value: 'light' });

	const lightTheme =
		'[--accent-soft:rgba(255,91,31,0.08)] [--accent:#ff5b1f] [--bg-elev:#ffffff] [--bg:#fafaf8] [--canvas-bg:#f4f4f0] [--code-bg:#0e0e0c] [--code-ink:#d4d4cc] [--code-rule:#1d1d1a] [--ink-2:#4a4a48] [--ink-3:#8a8a86] [--ink-4:#c4c4be] [--ink:#0a0a09] [--rule-soft:#f0f0eb] [--rule:#e8e8e3]';
	const darkTheme =
		'[--accent-soft:rgba(255,91,31,0.12)] [--accent:#ff5b1f] [--bg-elev:#131311] [--bg:#0a0a09] [--canvas-bg:#0e0e0c] [--code-bg:#0e0e0c] [--code-ink:#d4d4cc] [--code-rule:#1d1d1a] [--ink-2:#b4b4ae] [--ink-3:#6e6e68] [--ink-4:#3a3a36] [--ink:#f4f4f0] [--rule-soft:#15151310] [--rule:#1d1d1a]';

	function isTheme(value: string | null): value is Theme {
		return value === 'light' || value === 'dark';
	}

	function systemTheme(): Theme {
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}

	function savedTheme(): Theme | null {
		try {
			const value = localStorage.getItem(STORAGE_KEY);
			return isTheme(value) ? value : null;
		} catch {
			return null;
		}
	}

	function saveTheme(theme: Theme) {
		try {
			localStorage.setItem(STORAGE_KEY, theme);
		} catch {
			// Ignore unavailable storage; theme still updates for this session.
		}
	}

	function setTheme(theme: Theme, { persist = true }: { persist?: boolean } = {}) {
		themeState.value = theme;
		if (persist) saveTheme(theme);
	}

	setContext<ThemeContext>(THEME_CONTEXT_KEY, {
		state: themeState,
		setTheme,
	});

	onMount(() => {
		setTheme(savedTheme() ?? systemTheme(), { persist: false });
	});
</script>

<div class={`relative min-h-full bg-(--bg) p-0 font-sans text-sm leading-6 text-(--ink) antialiased ${themeState.value === 'dark' ? darkTheme : lightTheme}`}>
	{@render children()}
</div>
