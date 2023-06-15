<script lang="ts">
	import Panel from '$lib/components/Panel.svelte';
	import { user } from '$lib/stores/store.global';

	const color = 'rgba(30,30,30)';
</script>

<Panel {color} noActivities />
<div class="login-page" style="background-color: {color};">
	{#if $user}
		<div class="user-card" />
	{:else}
		<div class="create-form" />
	{/if}
</div>

<style>
	.login-page {
		height: 100dvh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.user-card {
		width: 300px;
		height: 75px;
		background-color: rgb(59, 59, 59, 0.8);
		border-radius: 10px;
	}
</style>
