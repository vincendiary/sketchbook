<script lang="ts">
	import { setContext } from 'svelte';
	import { THEME_CONTEXT_KEY, type Theme, type ThemeContext } from '$lib/theme';
	import TopBar from './TopBar.svelte';

	let { active = 'home' }: { active?: 'home' | 'tag' | 'about' } = $props();

	const themeState = { value: 'light' as Theme };
	const setTheme = (theme: Theme) => {
		themeState.value = theme;
	};

	setContext<ThemeContext>(THEME_CONTEXT_KEY, { state: themeState, setTheme });
</script>

<TopBar {active} />
