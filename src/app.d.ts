// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import 'unplugin-icons/types/svelte';

declare global {
	interface Window {
		__SKETCHBOOK_ASSET_BASE__?: string;
		__SKETCHBOOK_P5__?: Record<string, (p: unknown) => void>;
	}

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
