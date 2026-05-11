import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import CanvasPreview from './CanvasPreview.svelte';

describe('CanvasPreview', () => {
	it('renders the generated SVG preview at the requested size', () => {
		const { container } = render(CanvasPreview, {
			slug: 'flow-field',
			width: 200,
			height: 120,
			accent: '#123456',
		});

		const svg = container.querySelector('svg');
		expect(svg).toBeInTheDocument();
		expect(svg).toHaveAttribute('viewBox', '0 0 200 120');
		expect(container.innerHTML).toContain('#123456');
	});
});
