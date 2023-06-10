import { derived, readable } from 'svelte/store';

export const localtime = readable(new Date(), (set) => {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return () => {
		clearInterval(interval);
	};
});

export const formatTime = derived(localtime, ($localtime) => {
	return $localtime.toLocaleString('en-US', {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		hour12: true,
		weekday: 'long',
		year: 'numeric'
	});
});
