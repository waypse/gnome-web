<script lang="ts">
	import Panel from '$lib/components/Panel.svelte';
</script>

<div class="de-wrapper">
	<Panel />
	<slot />
</div>

<style>
	.de-wrapper {
		display: flex;
		flex-direction: column;
	}
</style>
