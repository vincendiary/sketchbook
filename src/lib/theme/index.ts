export type Theme = 'light' | 'dark';

export const THEME_CONTEXT_KEY = Symbol('theme');

export type ThemeContext = {
	state: { value: Theme };
	setTheme: (theme: Theme, options?: { persist?: boolean }) => void;
};
