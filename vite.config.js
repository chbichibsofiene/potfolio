import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
// Allow overriding the base path at build time by setting the
// BASE_PATH environment variable (useful for GitHub Pages under
// `https://username.github.io/repo-name/`).
const basePath = process.env.BASE_PATH || "/";

export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss()],
});
