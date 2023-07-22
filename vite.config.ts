import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/magic-flowers-boutique/",
  plugins: [react(), tsconfigPaths()],
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  build: {
    outDir: "dist",
  },
});
