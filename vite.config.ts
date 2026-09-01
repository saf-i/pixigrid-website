import { defineConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: dir,
  publicDir: path.join(dir, "public"),
  server: {
    port: 5173,
    host: true,
  },
  build: {
    outDir: path.join(dir, "dist"),
    emptyOutDir: true,
  },
});
