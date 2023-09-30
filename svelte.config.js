import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import adapterStatic from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    
    // Add the fallback option here
    // You can specify a URL or a function
    // Example 1: Specify a URL to a fallback page
    fallback: 'fallback.html',

    // Example 2: Specify a function for custom fallback logic
    // fallback: async (request) => {
    //   // Implement your custom fallback logic here
    //   return new Response('Custom Fallback Page', { status: 404 });
    // },
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

// Add the adapter-static configuration
if (process.env.NODE_ENV === 'production') {
  config.kit.adapter = adapterStatic({
    assets: 'translations',
  });
}

export default config;
