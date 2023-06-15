<script lang="ts">
	import { browser } from '$app/environment';
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
	{#if $mediaQuery.sm}
		<div class="mobile">
			<span>
				use computer bro <br /> its a desktop os <br /> so obviously it ain't workin on mobile</span
			>
		</div>
	{:else}
		<slot />
	{/if}
</div>

<style>
	div span {
		font-weight: bold;
		line-height: 1rem;
	}
</style>
