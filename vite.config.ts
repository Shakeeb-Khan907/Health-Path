import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// This configuration passes the GEMINI_API_KEY from Vercel/System to your browser code
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      // Define the API key for the browser - use GEMINI_API_KEY
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || process.env.GEMINI_API_KEY || '')
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
          }
        }
      }
    }
  };
});
