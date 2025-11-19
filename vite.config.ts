import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";
import packageJson from './package.json'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "host-remote-rick",
      filename: "remoteEntry.js",
      remotes: {
        remoteMorty: "http://localhost:5174/assets/remoteEntry.js",
      },
      shared: packageJson.dependencies
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    emptyOutDir: false,
    lib: {
      entry: "src/index.ts",
      name: "ReactCardComponentLibrary",
      formats: ["es"],
      fileName: () => "index.mjs",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
