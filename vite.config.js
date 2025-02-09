import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/CarbonNeutrality/", // Ensure this matches your repository name
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure build output is correct
    assetsDir: "assets", // Prevent issues with paths
  }
});
