import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from a custom .env file
dotenv.config({ path: path.resolve(__dirname, '.env.custom') });

// Vite configuration
export default defineConfig({
  plugins: [react()],
});
