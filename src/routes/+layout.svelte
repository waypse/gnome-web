<script lang="ts">
	import { browser } from '$app/environment';
	import Panel from '$lib/components/Panel.svelte';
	import { pageWidths, mediaQuery } from '$lib/stores/store.global';

	const setWidthValues = () => {
		const width = window.innerWidth;
		for (const [key, value] of Object.entries(pageWidths)) {
			$mediaQuery[key] = width < value;
		}
	};

	if (browser) setWidthValues();
</script>

<svelte:window on:resize={setWidthValues} />

<div class="de-wrapper">
	<Panel />
	{#if $mediaQuery.sm}
		<div class="mobile">
			<span>
				access<br />on<br />a<br />computer<br />for<br />the<br />best<br />experience.
			</span>
		</div>
	{:else}
		<slot />
	{/if}
</div>

<style>
	.de-wrapper {
		display: flex;
		flex-direction: column;
	}
	div span {
		font-weight: bold;
		line-height: 1rem;
	}
</style>
