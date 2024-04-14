import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

const site = import.meta.env.SITE || "https://jolafun.be/";
const base = import.meta.env.BASE || "/";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site,
  base,
});
