import { render, screen, waitFor } from '@testing-library/svelte';
import { afterEach, describe, expect, it, vi } from 'vitest';
import P5Sketch from './P5Sketch.svelte';

type P5Constructor = new (factory: (p: unknown) => void, host: HTMLElement) => { remove: () => void };

const p5 = vi.hoisted(() => {
	const remove = vi.fn();
	const ctor = vi.fn(function P5(factory: (p: unknown) => void, host: HTMLElement) {
		factory({});
		host.append(document.createElement('canvas'));
		return { remove };
	});
	return { ctor, remove };
});

describe('P5Sketch', () => {
	afterEach(() => {
		p5.ctor.mockClear();
		p5.remove.mockClear();
		delete (window as unknown as { p5?: P5Constructor }).p5;
		delete window.__SKETCHBOOK_ASSET_BASE__;
		delete window.__SKETCHBOOK_P5__;
		document.head.querySelectorAll('script[src$="/vendor/p5.min.js"], script[src$="/p5/demo.js"]').forEach((script) => script.remove());
	});

	it('loads a converted sketch asset and mounts a p5 instance', async () => {
		const factory = vi.fn();
		window.__SKETCHBOOK_P5__ = { demo: factory };

		const { unmount } = render(P5Sketch, {
			slug: 'demo',
			src: '/p5/demo.js',
			width: 320,
			height: 240,
			title: 'Demo sketch',
		});

		expect(screen.getByLabelText('Demo sketch rendered p5 canvas')).toBeInTheDocument();

		const vendorScript = await waitFor(() => {
			const match = document.head.querySelector<HTMLScriptElement>('script[src$="/vendor/p5.min.js"]');
			expect(match).toBeInTheDocument();
			return match as HTMLScriptElement;
		});

		(window as unknown as { p5: P5Constructor }).p5 = p5.ctor as unknown as P5Constructor;
		vendorScript.dispatchEvent(new Event('load'));

		const script = await waitFor(() => {
			const match = document.head.querySelector<HTMLScriptElement>('script[src$="/p5/demo.js"]');
			expect(match).toBeInTheDocument();
			return match as HTMLScriptElement;
		});

		script.dispatchEvent(new Event('load'));

		await waitFor(() => expect(p5.ctor).toHaveBeenCalledOnce());
		expect(factory).toHaveBeenCalledOnce();
		expect(document.querySelector('canvas')).toBeInTheDocument();

		unmount();
		expect(p5.remove).toHaveBeenCalledOnce();
	});
});
