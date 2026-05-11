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
	class="group inline-block cursor-pointer appearance-none rounded-full border border-transparent bg-transparent p-0 outline-none [--ts-bg-dark:#1a1f3a] [--ts-bg-light:#f5d77a] [--ts-h:28px] [--ts-icon-moon:#c4c8e0] [--ts-icon-sun:#b8801a] [--ts-pad:3px] [--ts-thumb:calc(var(--ts-h)-var(--ts-pad)*2)] [--ts-thumb-dark:#e7e9f5] [--ts-thumb-light:#fff8e6] [--ts-travel:calc(var(--ts-w)-var(--ts-thumb)-var(--ts-pad)*2)] [--ts-w:56px] focus-visible:shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent,#ff5b1f)_35%,transparent)]"
	type="button"
	role="switch"
	aria-checked={value === 'dark'}
	aria-label="Toggle theme"
	data-state={value}
	onclick={toggle}
>
	<span
		class="relative block h-(--ts-h) w-(--ts-w) overflow-hidden rounded-full bg-(--ts-bg-dark) shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),inset_0_1px_2px_rgba(0,0,0,0.4)] transition-[background,box-shadow] duration-[480ms] ease-in-out group-data-[state=light]:bg-(--ts-bg-light) group-data-[state=light]:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06),inset_0_1px_2px_rgba(0,0,0,0.08)] motion-reduce:duration-0"
		aria-hidden="true"
	>
		<span class="pointer-events-none absolute top-1/2 left-[7px] grid h-3.5 w-3.5 -translate-y-1/2 place-items-center text-sm text-(--ts-icon-sun) opacity-55 transition-[opacity,color] duration-[480ms] ease-in-out group-data-[state=light]:opacity-0 motion-reduce:duration-0"><SunIcon /></span>
		<span class="pointer-events-none absolute top-1/2 right-[7px] grid h-3.5 w-3.5 -translate-y-1/2 place-items-center text-sm text-(--ts-icon-moon) opacity-55 transition-[opacity,color] duration-[480ms] ease-in-out group-data-[state=dark]:opacity-0 motion-reduce:duration-0"><MoonIcon /></span>
		<span class="absolute top-(--ts-pad) left-(--ts-pad) grid h-(--ts-thumb) w-(--ts-thumb) translate-x-(--ts-travel) place-items-center rounded-full bg-(--ts-thumb-dark) shadow-[0_1px_2px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.18)] transition-[transform,background,box-shadow] duration-[480ms] ease-[cubic-bezier(0.68,-0.2,0.27,1.4)] group-data-[state=light]:translate-x-0 group-data-[state=light]:bg-(--ts-thumb-light) group-data-[state=light]:shadow-[0_1px_2px_rgba(0,0,0,0.12),0_4px_8px_rgba(0,0,0,0.08)] motion-reduce:duration-0">
			<span class="absolute grid h-4 w-4 place-items-center text-base text-(--ts-icon-sun) opacity-100 transition-[opacity,transform] duration-[480ms] ease-in-out group-data-[state=dark]:-rotate-90 group-data-[state=dark]:scale-60 group-data-[state=dark]:opacity-0 group-data-[state=light]:rotate-0 group-data-[state=light]:scale-100 group-data-[state=light]:opacity-100 motion-reduce:duration-0"><SunIcon /></span>
			<span class="absolute grid h-4 w-4 place-items-center text-base text-[#4a5078] opacity-100 transition-[opacity,transform] duration-[480ms] ease-in-out group-data-[state=dark]:rotate-0 group-data-[state=dark]:scale-100 group-data-[state=dark]:opacity-100 group-data-[state=light]:rotate-90 group-data-[state=light]:scale-60 group-data-[state=light]:opacity-0 motion-reduce:duration-0"><MoonIcon /></span>
		</span>
	</span>
</button>
