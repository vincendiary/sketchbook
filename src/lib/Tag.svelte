<script lang="ts">
	let { name, href }: { name: string; href?: string } = $props();
</script>

{#if href}
	<a class="sb-tag" {href}>{name}</a>
{:else}
	<span class="sb-tag">{name}</span>
{/if}
