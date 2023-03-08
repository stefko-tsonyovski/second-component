import { defineConfig } from "vite";

import { rollupExternals } from "./rollupExternals";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./src/main.ts",
      name: "secondComponent",
      fileName: (format) => `second-component-contract.${format}.js`,
    },
    rollupOptions: {
      ...rollupExternals,
    },
  },
});
