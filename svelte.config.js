//import adapter from "svelte-adapter-github";
import adapter from "@sveltejs/adapter-static";
import path from 'path';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      "postcss": true
    }),
  ],

  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs'
    }),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    vite: {
      resolve: {
        alias: {
          'twelveui': path.resolve('src/lib/')
        }
      }
    }
  }
};