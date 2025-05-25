import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/CarbonNeutrality", // Ensure this matches your repository name
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx"], // Ensure Vite processes JSX
  },
  build: {
    outDir: "dist", // Ensure build output is correct
    assetsDir: "assets", // Prevent issues with paths
  }
});
