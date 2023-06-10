<script lang="ts">
	import { formatTime } from '$lib/stores/store.global';
</script>

<div class="pannel">
	<div>apps</div>
	<div class="time">
		{$formatTime}
	</div>
	<div>disconnect</div>
</div>

<style>
	.pannel {
		display: flex;
		justify-content: space-between;
		background-color: black;
		color: white;
		box-sizing: border-box;
		padding: 0.25rem 1rem;
	}
</style>
