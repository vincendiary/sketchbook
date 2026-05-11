import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Tag from './Tag.svelte';

describe('Tag', () => {
	it('renders a link when href is provided', () => {
		render(Tag, { name: 'projects', href: '/tags/projects' });

		const link = screen.getByRole('link', { name: 'projects' });
		expect(link).toHaveAttribute('href', '/tags/projects');
	});

	it('renders plain text without a link target', () => {
		render(Tag, { name: 'lessons' });

		expect(screen.getByText('lessons')).toBeInTheDocument();
		expect(screen.queryByRole('link', { name: 'lessons' })).not.toBeInTheDocument();
	});
});
