import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import ThemeSwitch from './ThemeSwitch.svelte';

describe('ThemeSwitch', () => {
	it('reflects the current theme and toggles to the next value', async () => {
		const user = userEvent.setup();
		const onchange = vi.fn();
		render(ThemeSwitch, { value: 'light', onchange });

		const button = screen.getByRole('switch', { name: 'Toggle theme' });
		expect(button).toHaveAttribute('aria-checked', 'false');
		expect(button).toHaveAttribute('data-state', 'light');

		await user.click(button);

		expect(onchange).toHaveBeenCalledWith('dark');
		expect(button).toHaveAttribute('aria-checked', 'true');
		expect(button).toHaveAttribute('data-state', 'dark');
	});
});
