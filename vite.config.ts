import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // base: process.env.VITE_BASE_PATH || "/Online-Portfolio",
  base: "/",
  plugins: [react()],
  
  optimizeDeps: {
    include: [
      'langchain',
      '@langchain/community',
      '@langchain/core',
      '@langchain/google-genai'
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Add more aliases if needed
    },
  },
  build: {

    outDir: "dist",
    emptyOutDir: true,
    sourcemap: process.env.NODE_ENV !== "production", 
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === "production",
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