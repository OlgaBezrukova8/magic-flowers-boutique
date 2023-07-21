import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
import sass from 'vite-plugin-sass';

export default defineConfig({
  base: "/magic-flowers-boutique/",
  plugins: [react(), sass()],
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  build: {
    outDir: "dist",
  },
});
