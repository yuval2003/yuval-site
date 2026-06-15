// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Static output only — every route is static HTML; the contact form posts to a
// third-party service (Web3Forms), so no SSR adapter is needed (PLAN.md §6).
export default defineConfig({
  output: "static",
  site: "https://yuval-site.pages.dev",
  vite: {
    // @ts-expect-error — type-only vite version skew between @tailwindcss/vite
    // and the vite Astro bundles (HotUpdatePluginContext shape). Correct at
    // runtime; the build emits Tailwind CSS as expected.
    plugins: [tailwindcss()],
  },
});
