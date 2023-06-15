// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { Writable } from 'svelte/store';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface TimeSettings {
		hour: 'numeric' | '2-digit' | undefined;
		minute: 'numeric' | '2-digit' | undefined;
		second: 'numeric' | '2-digit' | undefined;
		hour12: boolean;
		weekday: 'long' | 'short' | 'narrow' | undefined;
		year: 'numeric' | '2-digit' | undefined;
		month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow' | undefined;
		day: 'numeric' | '2-digit' | undefined;
	}

	interface PageWidths {
		sm: number;
		md: number;
		lg: number;
		xl: number;
	}

	interface MediaQuery {
		[index: string]: boolean;
		sm: boolean;
		md: boolean;
		lg: boolean;
		xl: boolean;
	}

	interface User {
		name: string;
		password: string;
	}
}

export {};
