import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import metaTags from "astro-meta-tags";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://yasin.kavakli.at",
  output: "server",
  adapter: cloudflare({
    imageService: "passthrough"
  }),
  integrations: [mdx(), sitemap(), tailwind(), metaTags(), robotsTxt()],
  markdown: {
    shikiConfig: {
      theme: "github-dark"
    }
  }
});