import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import adapterStatic from '@sveltejs/adapter-static'; // Import the adapter-static module

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

// Add the adapter-static configuration
if (process.env.NODE_ENV === 'production') {
	config.kit.adapter = adapterStatic({
		// Specify the paths to serve
		// Adjust this path to point to your translations directory
		assets: 'translations',
	});
}

export default config;
