// svelte.config.js

import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static'; // Use the appropriate adapter for your deployment

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    // Specify the catch-all route by using a '*' pattern in the layout file
    // This route will match any unmatched dynamic routes
    // Make sure you have the appropriate layout file (e.g., _layout.svelte)
    // Adjust the layout based on your project's requirements
    // In this example, we use the default layout
    // Example:
    // layouts: {
    //   '*': import('./src/routes/_layout.svelte'),
    // },

    // ...

  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;

