import { persisted } from 'svelte-local-storage-store';
import { derived, readable, writable } from 'svelte/store';

export const localtime = readable<Date>(new Date(), (set) => {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return () => {
		clearInterval(interval);
	};
});

export const timeSettings = persisted<TimeSettings>('timeSettings', {
	hour: 'numeric',
	minute: 'numeric',
	second: 'numeric',
	hour12: false,
	weekday: 'short',
	year: undefined,
	month: 'short',
	day: 'numeric'
});

export const formatTime = derived([localtime, timeSettings], ([$localtime, $timeSettings]) => {
	return $localtime.toLocaleString('en-US', {
		...$timeSettings
	});
});

export const pageWidths: PageWidths = {
	sm: 768,
	md: 1024,
	lg: 1280,
	xl: 1536
};

export const mediaQuery = writable<MediaQuery>({
	sm: false,
	md: false,
	lg: false,
	xl: false
});
