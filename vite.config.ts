import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    base: '/Table.One-Embed',
    plugins: [vue(), tailwindcss()],
});
