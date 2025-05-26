import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio-tdt2",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Évite les warnings de chunk > 500kB
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          framer: ['framer-motion'],
          typewriter: ['typewriter-effect'],
        }
      }
    }
  }
});
