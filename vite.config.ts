import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote-root",
      remotes: {
        remote_details: "http://localhost:5001/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "tailwindcss"],
    }),
    tailwindcss(),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
