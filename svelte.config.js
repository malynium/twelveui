import adapter from "svelte-adapter-github";
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
      domain: 'twelveui.com'
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