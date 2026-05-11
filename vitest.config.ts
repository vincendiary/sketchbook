import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [svelteTesting(), sveltekit(), Icons({ compiler: 'svelte' })],
	test: {
		environment: 'jsdom',
		include: ['src/**/*.{test,spec}.ts'],
		setupFiles: ['./tests/setup.ts'],
		clearMocks: true,
		restoreMocks: true,
	},
});
