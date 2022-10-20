import { defineConfig } from 'vite'

export default defineConfig({
  base: "https://nate-moo.github.io/patcher/",
  esbuild: {
    minifyIdentifiers: false,
    minifySyntax: true,
    minifyWhitespace: true,
  }
})
