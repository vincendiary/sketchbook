import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import TopBarHarness from './TopBar.test.svelte';

describe('TopBar', () => {
	it('renders primary navigation and the theme switch', () => {
		render(TopBarHarness, { active: 'tag' });

		expect(screen.getByRole('link', { name: 'Sketchbook' })).toHaveAttribute('href', '/');
		expect(screen.getByRole('link', { name: 'Index' })).toHaveAttribute('href', '/');
		expect(screen.getByRole('link', { name: 'Tags' })).toHaveAttribute('href', '/tags/projects');
		expect(screen.getByText('About')).toBeInTheDocument();
		expect(screen.getByRole('switch', { name: 'Toggle theme' })).toBeInTheDocument();
	});
});
