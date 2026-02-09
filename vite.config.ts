import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// This configuration passes the API_KEY from Vercel/System to your browser code
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    define: {
      // Robustly define process.env.API_KEY for the browser
      'process.env.API_KEY': JSON.stringify(env.API_KEY || process.env.API_KEY || '')
    }
  };
});