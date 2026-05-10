import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import flowbiteReact from "flowbite-react/plugin/vite";

export default defineConfig({
  plugins: [tailwindcss(), flowbiteReact()],
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('framer-motion')) return 'vendor-motion';
            if (id.includes('lucide-react')) return 'vendor-icons';
            if (id.includes('flowbite')) return 'vendor-ui';
            if (id.includes('axios') || id.includes('query')) return 'vendor-utils';
            return 'vendor';
          }
          if (id.includes('src/sections')) {
            return 'sections';
          }
          if (id.includes('src/components/admin')) {
            return 'admin-dashboard';
          }
        },
      },
    },
  },
})