declare module 'virtual:sketchbook-assets' {
	export type ProcessingAsset = {
		path: string;
		name: string;
		size: number;
	};

	export type ProcessingSource = ProcessingAsset & {
		code: string;
	};

	export const PROCESSING_SOURCES: ProcessingSource[];
	export const PROCESSING_MARKDOWN: ProcessingSource[];
	export const PROCESSING_ASSETS: ProcessingAsset[];
}
