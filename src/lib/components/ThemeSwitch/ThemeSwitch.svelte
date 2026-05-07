<script lang="ts">
	import SunIcon from '~icons/solar/sun-bold-duotone';
	import MoonIcon from '~icons/solar/moon-bold-duotone';

	type Theme = 'light' | 'dark';

	let {
		value = $bindable<Theme>('dark'),
		onchange,
	}: { value?: Theme; onchange?: (theme: Theme) => void } = $props();

	function toggle() {
		value = value === 'dark' ? 'light' : 'dark';
		onchange?.(value);
	}
</script>

<button
	class="ts"
	type="button"
	role="switch"
	aria-checked={value === 'dark'}
	aria-label="Toggle theme"
	data-state={value}
	onclick={toggle}
>
	<span class="ts-track" aria-hidden="true">
		<span class="ts-icon ts-icon--sun"><SunIcon /></span>
		<span class="ts-icon ts-icon--moon"><MoonIcon /></span>
		<span class="ts-thumb">
			<span class="ts-thumb-icon ts-thumb-icon--sun"><SunIcon /></span>
			<span class="ts-thumb-icon ts-thumb-icon--moon"><MoonIcon /></span>
		</span>
	</span>
</button>

<style>
	.ts {
		--ts-w: 56px;
		--ts-h: 28px;
		--ts-pad: 3px;
		--ts-thumb: calc(var(--ts-h) - var(--ts-pad) * 2);
		--ts-travel: calc(var(--ts-w) - var(--ts-thumb) - var(--ts-pad) * 2);

		--ts-bg-light: #f5d77a;
		--ts-bg-dark: #1a1f3a;
		--ts-thumb-light: #fff8e6;
		--ts-thumb-dark: #e7e9f5;
		--ts-icon-sun: #b8801a;
		--ts-icon-moon: #c4c8e0;

		appearance: none;
		border: 1px solid transparent;
		padding: 0;
		background: none;
		cursor: pointer;
		display: inline-block;
		border-radius: 999px;
		outline: none;
	}
	.ts:focus-visible {
		box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent, #ff5b1f) 35%, transparent);
	}

	.ts-track {
		position: relative;
		display: block;
		width: var(--ts-w);
		height: var(--ts-h);
		border-radius: 999px;
		background: var(--ts-bg-dark);
		transition:
			background 480ms cubic-bezier(0.4, 0, 0.2, 1),
			box-shadow 480ms ease;
		box-shadow:
			inset 0 0 0 1px rgba(255, 255, 255, 0.05),
			inset 0 1px 2px rgba(0, 0, 0, 0.4);
		overflow: hidden;
	}
	.ts[data-state='light'] .ts-track {
		background: var(--ts-bg-light);
		box-shadow:
			inset 0 0 0 1px rgba(0, 0, 0, 0.06),
			inset 0 1px 2px rgba(0, 0, 0, 0.08);
	}

	.ts-icon {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		display: grid;
		place-items: center;
		width: 14px;
		height: 14px;
		font-size: 14px;
		opacity: 0.55;
		transition:
			opacity 360ms ease,
			color 480ms ease;
		pointer-events: none;
	}
	.ts-icon--sun {
		left: 7px;
		color: var(--ts-icon-sun);
	}
	.ts-icon--moon {
		right: 7px;
		color: var(--ts-icon-moon);
	}
	.ts[data-state='light'] .ts-icon--sun {
		opacity: 0;
	}
	.ts[data-state='dark'] .ts-icon--moon {
		opacity: 0;
	}

	.ts-thumb {
		position: absolute;
		top: var(--ts-pad);
		left: var(--ts-pad);
		width: var(--ts-thumb);
		height: var(--ts-thumb);
		border-radius: 50%;
		background: var(--ts-thumb-dark);
		transform: translateX(var(--ts-travel));
		transition:
			transform 480ms cubic-bezier(0.68, -0.2, 0.27, 1.4),
			background 480ms ease,
			box-shadow 480ms ease;
		box-shadow:
			0 1px 2px rgba(0, 0, 0, 0.3),
			0 4px 8px rgba(0, 0, 0, 0.18);
		display: grid;
		place-items: center;
	}
	.ts[data-state='light'] .ts-thumb {
		transform: translateX(0);
		background: var(--ts-thumb-light);
		box-shadow:
			0 1px 2px rgba(0, 0, 0, 0.12),
			0 4px 8px rgba(0, 0, 0, 0.08);
	}

	.ts-thumb-icon {
		position: absolute;
		display: grid;
		place-items: center;
		width: 16px;
		height: 16px;
		font-size: 16px;
		transition:
			opacity 320ms ease,
			transform 480ms cubic-bezier(0.4, 0, 0.2, 1);
	}
	.ts-thumb-icon--sun {
		color: var(--ts-icon-sun);
	}
	.ts-thumb-icon--moon {
		color: #4a5078;
	}
	.ts[data-state='dark'] .ts-thumb-icon--sun {
		opacity: 0;
		transform: rotate(-90deg) scale(0.6);
	}
	.ts[data-state='light'] .ts-thumb-icon--moon {
		opacity: 0;
		transform: rotate(90deg) scale(0.6);
	}
	.ts[data-state='light'] .ts-thumb-icon--sun {
		opacity: 1;
		transform: rotate(0) scale(1);
	}
	.ts[data-state='dark'] .ts-thumb-icon--moon {
		opacity: 1;
		transform: rotate(0) scale(1);
	}

	@media (prefers-reduced-motion: reduce) {
		.ts-track,
		.ts-thumb,
		.ts-icon,
		.ts-thumb-icon {
			transition-duration: 0ms;
		}
	}
</style>
