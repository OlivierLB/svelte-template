import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import svelte from "rollup-plugin-svelte";
import autoPreprocess from "svelte-preprocess";

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  plugins: [
    svelte({
      onwarn: (warning, handler) => {
        const { code, frame } = warning;
        if (code === "css-unused-selector")
          return;

        handler(warning);
      },
    }),
  ]
}
