import adapter from '@sveltejs/adapter-node';
import preprocess from "svelte-preprocess";

export default {
	kit: {
		adapter: adapter({
			// default options are shown
			out: 'build',
			precompress: true,
			envPrefix: 'PRODUCTION_',
			polyfill: true,
			preprocess: preprocess({sass: true}),
		})
	}
};
