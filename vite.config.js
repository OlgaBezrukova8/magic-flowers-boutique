import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/magic-flowers-boutique/",
  plugins: [react()],
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  build: {
    outDir: "dist",
  },
});
