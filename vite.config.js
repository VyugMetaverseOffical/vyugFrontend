import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      crypto: "crypto-browserify", // Use crypto-browserify for the browser
    },
  },
  build: {
    rollupOptions: {
      // Remove the external option for crypto
      // external: ["crypto"],
      output: {
        globals: {
          crypto: 'crypto', // Add global definition if needed
        },
      },
    },
  },
});
