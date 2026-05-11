<script lang="ts">
	let { name, href }: { name: string; href?: string } = $props();
</script>

{#if href}
	<a class="cursor-pointer whitespace-nowrap rounded-[3px] border border-(--rule) bg-(--bg-elev) px-[7px] py-[3px] font-mono text-[10px] tracking-[0.02em] text-(--ink-2) transition-all duration-150 hover:border-(--accent) hover:text-(--accent)" {href}>{name}</a>
{:else}
	<span class="cursor-pointer whitespace-nowrap rounded-[3px] border border-(--rule) bg-(--bg-elev) px-[7px] py-[3px] font-mono text-[10px] tracking-[0.02em] text-(--ink-2) transition-all duration-150 hover:border-(--accent) hover:text-(--accent)">{name}</span>
{/if}
