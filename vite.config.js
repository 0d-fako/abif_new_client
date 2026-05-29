import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
        services: './services.html',
        contact: './contact.html',
        canada: './visa-canada.html',
        uk: './visa-uk.html',
        europe: './visa-europe.html',
      }
    }
  },
  preview: {
    allowedHosts: ['abif-new-client.onrender.com'],
    port: 5174 
  }
});
