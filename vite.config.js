import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  base: '/site-quiz/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    sourcemap: false
  },
  server: {
    port: 3000,
    open: true
  }
});

