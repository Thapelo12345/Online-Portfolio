// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";

// export default defineConfig({
//   base: "/",
//   plugins: [react()],
//   resolve: {
//     alias: { "@": path.resolve(__dirname, "./src") },More actions
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/",
  base: process.env.VITE_BASE_PATH || "/Online-Portfolio",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Add more aliases if needed
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: process.env.NODE_ENV !== "production", // Enable sourcemaps in dev
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === "production", // Remove console.log in production
      },
    },
  },
  server: {
    port: 3000,
    open: true, // Automatically open the app in browser
  },
    preview: {
      port: 3000,
    },
  });