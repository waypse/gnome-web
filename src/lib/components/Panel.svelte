<script lang="ts">
	import { formatTime } from '$lib/stores/store.global';
	import Icon from '@iconify/svelte';
</script>

<div class="pannel">
	<div>
		<div class="button">Activities</div>
		<div class="button">cc</div>
	</div>
	<div class="time">
		<div class="button">
			{$formatTime}
		</div>
	</div>
	<div>
		<div class="button">
			<Icon icon="mingcute:wifi-line" height="18px" />
			<Icon icon="ps:sound-level-two" height="14px" />
			<Icon icon="ion:power" height="16px" />
		</div>
	</div>
</div>

<style>
	.button {
		-webkit-user-select: none; /* Safari */
		-ms-user-select: none; /* IE 10 and IE 11 */
		user-select: none; /* Standard syntax */
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2px 10px;
		border-radius: 20px;
		transition: 0.15s ease;
		gap: 0.3rem;
	}
	.button:hover {
		background-color: rgba(97, 97, 97, 0.5);
	}
	.pannel {
		position: relative;
		display: grid;
		align-items: center;
		grid-template-columns: 1fr 1fr 1fr;
		background-color: rgb(14, 14, 14);
		color: white;
		box-sizing: border-box;
		padding: 0.25rem;
		padding-top: 0.1rem;
	}
	.pannel::after,
	.pannel::before {
		z-index: 99;
		content: '';
		position: absolute;
		background-color: transparent;
		bottom: -40px;
		height: 40px;
		width: 15px;
		box-shadow: 0 -25px 0 0 rgb(14, 14, 14);
	}
	.pannel::before {
		border-top-left-radius: 20px;
		left: 0;
	}
	.pannel::after {
		border-top-right-radius: 20px;
		right: 0;
	}
	.pannel div {
		z-index: 100;
		display: flex;
		font-size: 0.85rem;
		font-weight: 600;
	}
	.pannel div:nth-child(1) {
		justify-self: start;
	}
	.pannel div:nth-child(2) {
		justify-self: center;
	}
	.pannel div:nth-child(3) {
		justify-self: end;
	}
</style>
