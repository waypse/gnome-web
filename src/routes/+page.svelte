<script lang="ts">
	import { timeSettings } from '$lib/stores/store.global';

	const setTimeFormat = () => {
		$timeSettings.hour12 = !$timeSettings.hour12;
	};
</script>

<div>+page</div>
<button on:click={setTimeFormat}>sheesh</button>

<style>
</style>
