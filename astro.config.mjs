// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  site: "https://zachbuttram.com",
  // Keep the directory layout from the old Gatsby site so the existing
  // Cloudflare Pages settings (output directory: public) keep working.
  publicDir: "./static",
  outDir: "./public",
  vite: {
    plugins: [tailwindcss()],
  },
})
