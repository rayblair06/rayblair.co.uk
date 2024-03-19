import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Docs: https://github.com/antfu/vite-ssg | https://github.com/antfu/vite-ssg/blob/main/src/types.ts#L6
  ssgOptions: {
    crittersOptions: {
      // Preload strategy - https://github.com/GoogleChromeLabs/critters#usage
      preload: "media",
      formatting: "minify",
      script: "async",
    },
  },
});
