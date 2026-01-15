import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    sourcemap: false,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@store": "/src/store",
      "@slice": "/src/store/slice",
      "@styles": "/src/styles",
      "@utils": "/src/utils",
      "@data": "/src/data",
    },
  },
  server: {
    host: true,
    port: 3000,
    watch: {
      usePolling: false,
    },
    strictPort: true,
    allowedHosts: ["mylegalhelp.org.in"],
    hmr: {
      overlay: false,
    },
  },
});
