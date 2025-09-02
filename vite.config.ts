import { build, defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@types": path.resolve(__dirname, "./src/utils/types.ts"),
      "@helpers": path.resolve(__dirname, "./src/utils/helpers.ts"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@styles": path.resolve(__dirname, "./src/styles/scss"),
      "@ui": path.resolve(__dirname, "./src/ui"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  build: { minify: "esbuild" },
});

// TODO Настроить окружение и конфиг сборщика
