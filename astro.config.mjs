import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import remarkObsidianCallout from "remark-obsidian-callout"

import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  site: "https://fastsnowy.github.io",
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    ,
    react(),
  ],
  markdown: {
    syntaxHighlight: "shiki",
    remarkPlugins: [remarkObsidianCallout],
  },
})
